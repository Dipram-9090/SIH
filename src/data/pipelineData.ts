export interface PipelineStage {
  step: number;
  title: string;
  shortDesc: string;
  inputFormat: string;
  outputFormat: string;
  details: string[];
  techUsed: string;
  codeSnippet: string;
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: 1,
    title: "Upload Dataset",
    shortDesc: "Ingest multi-source raw Bitcoin transaction logs and network records.",
    inputFormat: "Raw CSV / JSON / XML file uploads (Ledger dumps, Mempool dumps, Node logs)",
    outputFormat: "Validated in-memory staging stream / Parquet dump",
    details: [
      "Handles multipart CSV/JSON ledger transactions with streaming chunk parser.",
      "Accepts block dumps, wallet address lookups, and ISP peer connection dumps.",
      "Integrity hashing (SHA-256) ensures evidence tamper-proofing for legal admissibility."
    ],
    techUsed: "FastAPI, Pydantic, Python streaming upload",
    codeSnippet: `@app.post("/api/v1/upload")
async def ingest_dataset(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())
    raw_path = f"/data/raw/{file_id}_{file.filename}"
    async with aiofiles.open(raw_path, "wb") as f:
        while chunk := await file.read(1024 * 1024):
            await f.write(chunk)
    return {"file_id": file_id, "status": "staged"}`
  },
  {
    step: 2,
    title: "Parse CSV",
    shortDesc: "Extract UTXOs, inputs, outputs, locktimes, and broadcast metadata.",
    inputFormat: "Raw stream / Staged CSV rows",
    outputFormat: "Typed DataFrame: tx_hash, block_height, vin[], vout[], fee, timestamp",
    details: [
      "Deconstructs raw Bitcoin scripts and UTXO (Unspent Transaction Output) models.",
      "Extracts multi-input co-spending signatures and split output change addresses.",
      "Verifies block confirmation depths and rejects malformed transaction hashes."
    ],
    techUsed: "Pandas, NumPy, RegEx Parser",
    codeSnippet: `def parse_btc_transactions(df_raw: pd.DataFrame) -> pd.DataFrame:
    df_clean = df_raw.rename(columns={
        "txid": "tx_hash",
        "time": "timestamp",
        "value": "amount_satoshis"
    })
    df_clean["amount_btc"] = df_clean["amount_satoshis"] / 1e8
    df_clean["datetime"] = pd.to_datetime(df_clean["timestamp"], unit="s")
    return df_clean.dropna(subset=["tx_hash", "amount_btc"])`
  },
  {
    step: 3,
    title: "Normalize Data",
    shortDesc: "Standardize Satoshi conversions, timestamps, fee rates, and remove duplicates.",
    inputFormat: "Parsed transaction DataFrame",
    outputFormat: "Clean relational tables (wallets, transactions, hops)",
    details: [
      "Converts satoshis to decimal BTC and calculates miner fee per byte (sat/vB).",
      "Standardizes address types: Legacy (1...), P2SH (3...), and Bech32 (bc1...).",
      "Performs deduplication and fixes out-of-order block sequence timestamps."
    ],
    techUsed: "Pandas, SQLAlchemy, Pydantic Validation",
    codeSnippet: `def normalize_records(df: pd.DataFrame) -> pd.DataFrame:
    # Deduplicate by tx_hash + output_index
    df = df.drop_duplicates(subset=["tx_hash", "vout_index"])
    # Address type categorization
    df["addr_type"] = df["address"].apply(classify_btc_address)
    # Filter zero-value spam/dust transactions (< 546 satoshis)
    return df[df["amount_satoshis"] > 546]`
  },
  {
    step: 4,
    title: "GeoIP Enrichment",
    shortDesc: "Map relay node broadcaster IP addresses, ASN numbers, and jurisdictions.",
    inputFormat: "Normalized transactions with relay IP addresses",
    outputFormat: "Enriched dataset with Country, City, ASN, VPN/Tor flags, ISP info",
    details: [
      "Correlates transaction broadcaster IP with MaxMind GeoLite2 & Tor exit node lists.",
      "Flags transactions initiated from high-risk privacy hosting ASNs and darknet relays.",
      "Maps cross-border money movement velocity across timezones."
    ],
    techUsed: "GeoIP2, MaxMind DB, IPWhois, Redis Cache",
    codeSnippet: `def enrich_ip_metadata(ip_str: str) -> dict:
    if not ip_str or ip_str == "0.0.0.0":
        return {"country": "UNKNOWN", "is_tor": False, "risk": 0}
    geo = geo_reader.city(ip_str)
    is_tor = ip_str in tor_exit_nodes_set
    return {
        "country": geo.country.iso_code,
        "city": geo.city.name,
        "asn": geo.traits.autonomous_system_organization,
        "is_tor": is_tor,
        "is_vpn": check_vpn_flag(ip_str)
    }`
  },
  {
    step: 5,
    title: "Build Wallet Graph",
    shortDesc: "Construct directed multi-graph of wallets (nodes) and transfers (edges).",
    inputFormat: "Enriched transactions and wallet addresses",
    outputFormat: "Directed Graph Object (DiGraph) with vertex & edge properties",
    details: [
      "Nodes represent unique Bitcoin wallet addresses; edges represent transfer flows.",
      "Edge attributes store cumulative volume (BTC), transaction count, and time deltas.",
      "Aggregates multi-input addresses using Common-Input Ownership Heuristic."
    ],
    techUsed: "NetworkX, Cytoscape.js data schema",
    codeSnippet: `import networkx as nx

def build_investigation_graph(df: pd.DataFrame) -> nx.DiGraph:
    G = nx.DiGraph()
    for _, row in df.iterrows():
        G.add_node(row["src_wallet"], type="wallet", first_seen=row["timestamp"])
        G.add_node(row["dst_wallet"], type="wallet", first_seen=row["timestamp"])
        G.add_edge(
            row["src_wallet"],
            row["dst_wallet"],
            tx_hash=row["tx_hash"],
            amount=row["amount_btc"],
            timestamp=row["timestamp"]
        )
    return G`
  },
  {
    step: 6,
    title: "Extract Features",
    shortDesc: "Compute graph centrality, transaction velocity, peel chains, and fan-out metrics.",
    inputFormat: "Directed Graph + Transaction history",
    outputFormat: "High-dimensional feature matrix X (N_wallets x K_features)",
    details: [
      "Calculates In/Out Degree, PageRank, Betweenness Centrality, and Reciprocity.",
      "Measures transaction velocity (frequency of hops within minutes/hours).",
      "Calculates Peel Chain ratio (one large change output, one small cash-out output)."
    ],
    techUsed: "NumPy, Pandas, NetworkX Algorithms",
    codeSnippet: `def extract_wallet_features(G: nx.DiGraph, df: pd.DataFrame) -> pd.DataFrame:
    pagerank = nx.pagerank(G, alpha=0.85)
    in_degree = dict(G.in_degree())
    out_degree = dict(G.out_degree())
    
    features = []
    for wallet in G.nodes():
        txs = df[(df["src_wallet"] == wallet) | (df["dst_wallet"] == wallet)]
        velocity = calculate_tx_velocity(txs)
        peel_score = detect_peel_pattern(txs)
        features.append({
            "wallet": wallet,
            "pagerank": pagerank.get(wallet, 0),
            "in_deg": in_degree.get(wallet, 0),
            "out_deg": out_degree.get(wallet, 0),
            "velocity": velocity,
            "peel_ratio": peel_score,
            "total_volume": txs["amount_btc"].sum()
        })
    return pd.DataFrame(features)`
  },
  {
    step: 7,
    title: "Run ML Models",
    shortDesc: "Execute Isolation Forest for anomaly discovery and DBSCAN for entity clustering.",
    inputFormat: "Normalized feature matrix X",
    outputFormat: "Anomaly scores (-1 to 1) & Cluster labels (0, 1, 2, ...)",
    details: [
      "Isolation Forest isolates outliers across high-dimensional velocity/volume vectors.",
      "DBSCAN clusters co-spending wallets and related money-laundering syndicates.",
      "Unsupervised approach guarantees zero dependency on outdated historical labels."
    ],
    techUsed: "Scikit-Learn, Isolation Forest, DBSCAN",
    codeSnippet: `from sklearn.ensemble import IsolationForest
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import RobustScaler

def run_ml_detection(features_df: pd.DataFrame):
    X = features_df.drop(columns=["wallet"])
    X_scaled = RobustScaler().fit_transform(X)
    
    # 1. Anomaly Isolation
    iso = IsolationForest(contamination=0.05, random_state=42)
    features_df["anomaly_score"] = iso.fit_predict(X_scaled)
    features_df["raw_anomaly"] = iso.decision_function(X_scaled)
    
    # 2. Entity Clustering
    db = DBSCAN(eps=0.75, min_samples=3)
    features_df["entity_cluster"] = db.fit_predict(X_scaled)
    return features_df`
  },
  {
    step: 8,
    title: "Generate Risk Scores",
    shortDesc: "Compute 0-100% composite risk score using weighted heuristic & ML ensembles.",
    inputFormat: "Anomaly decision functions + Cluster metrics + Heuristic triggers",
    outputFormat: "Calculated risk percentage (0-100%), Threat Level (LOW / MED / HIGH / CRITICAL)",
    details: [
      "Combines ML anomaly probabilities (40%), Graph Centrality (25%), and Heuristics (35%).",
      "Heuristics check: Rapid hopping (<5 min), Mixer address proximity, and Tor/VPN origins.",
      "Assigns standardized alert tiers: CRITICAL (>=80%), HIGH (60-79%), MED (40-59%)."
    ],
    techUsed: "Python Ensemble Math, Pydantic Schema",
    codeSnippet: `def calculate_risk_score(row: pd.Series) -> dict:
    ml_component = max(0, -row["raw_anomaly"]) * 100 * 0.40
    graph_component = min(1.0, row["pagerank"] * 50 + row["out_deg"] / 20) * 100 * 0.25
    heuristic_component = (
        (30 if row["is_tor"] else 0) +
        (25 if row["peel_ratio"] > 0.7 else 0) +
        (25 if row["velocity"] > 10 else 0)
    ) * 0.35
    
    final_score = min(100.0, ml_component + graph_component + heuristic_component)
    return {
        "risk_percentage": round(final_score, 1),
        "threat_level": "CRITICAL" if final_score >= 80 else "HIGH" if final_score >= 60 else "MEDIUM"
    }`
  },
  {
    step: 9,
    title: "Explain Predictions",
    shortDesc: "Generate human-readable audit reasons and feature attribution weights for investigators.",
    inputFormat: "Risk score object + Extracted feature vectors + Tree SHAP values",
    outputFormat: "Explainability payload with checklist reasons and confidence score",
    details: [
      "Extracts top-5 contributing factors behind each flagged wallet.",
      "Generates clear factual statements (e.g., 'Velocity 14 tx/hour exceeds 99th percentile').",
      "Supplies verifiable evidence trails designed for judicial submission."
    ],
    techUsed: "SHAP (SHapley Additive exPlanations), Rule Engine",
    codeSnippet: `def generate_explanations(wallet_row: dict) -> list[str]:
    reasons = []
    if wallet_row["velocity"] > 5:
        reasons.append(f"High transaction frequency ({wallet_row['velocity']} tx/hr)")
    if wallet_row["total_volume"] > 50.0:
        reasons.append(f"Large outgoing volume ({wallet_row['total_volume']} BTC)")
    if wallet_row["peel_ratio"] > 0.6:
        reasons.append("Rapid transaction chain / Peel splitting identified")
    if wallet_row["is_tor"] or wallet_row["unique_ips"] > 3:
        reasons.append("Multiple relay IPs / Tor exit node connection")
    if wallet_row["connected_to_blacklisted"]:
        reasons.append("1-hop direct link to sanctioned darknet entity")
    return reasons`
  },
  {
    step: 10,
    title: "Visual Dashboard",
    shortDesc: "Render interactive graph explorer, risk alerts, temporal timeline, and export case dossier.",
    inputFormat: "Fully enriched database records & Graph JSON API",
    outputFormat: "Interactive Next.js investigation dashboard & PDF report export",
    details: [
      "Interactive node-link graph viewer allows investigators to expand wallet hops.",
      "Real-time filter by Risk Score, Transaction Amount, Date Range, and Country.",
      "One-click 'Export Legal Case Dossier' generates compliant forensic summary."
    ],
    techUsed: "Next.js 14, Tailwind CSS, Cytoscape.js / Canvas, Recharts",
    codeSnippet: `export function CaseDossierExporter({ walletId, alertData }) {
    const handleExport = () => {
        generateForensicPDF({
            caseId: \`CASE-\${Date.now()}\`,
            subjectWallet: walletId,
            riskScore: alertData.score,
            evidenceTrail: alertData.reasons,
            chainOfCustodyHash: alertData.sha256
        });
    };
    return <button onClick={handleExport}>Export Forensic Dossier</button>;
}`
  }
];
