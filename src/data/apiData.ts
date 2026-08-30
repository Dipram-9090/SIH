export interface ApiEndpoint {
  method: "GET" | "POST";
  path: string;
  title: string;
  description: string;
  requestParams?: string;
  requestBody?: string;
  responsePayload: string;
  statusCodes: string;
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    method: "POST",
    path: "/upload",
    title: "Dataset Ingestion Endpoint",
    description: "Uploads raw Bitcoin transaction logs, CSV ledger dumps, or JSON stream files for processing.",
    requestBody: `// multipart/form-data
{
  "file": "<binary_csv_or_json_payload>",
  "dataset_name": "SilkRoad_2026_Seizure_Dump.csv",
  "source_type": "csv_ledger"
}`,
    responsePayload: `{
  "status": "success",
  "file_id": "ds_89f3a19b-c401-4b71-9dfa-80e98031d234",
  "filename": "SilkRoad_2026_Seizure_Dump.csv",
  "records_count": 142890,
  "sha256_checksum": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "message": "Dataset staged successfully for background analytics pipeline"
}`,
    statusCodes: "201 Created | 400 Bad Request | 413 Payload Too Large"
  },
  {
    method: "POST",
    path: "/analyze",
    title: "Trigger AI Pipeline & Graph Analytics",
    description: "Initiates data cleaning, GeoIP enrichment, NetworkX graph construction, Isolation Forest, and DBSCAN clustering.",
    requestBody: `{
  "file_id": "ds_89f3a19b-c401-4b71-9dfa-80e98031d234",
  "contamination_rate": 0.05,
  "dbscan_eps": 0.75,
  "min_samples": 3,
  "enable_tor_lookup": true
}`,
    responsePayload: `{
  "task_id": "task_anlz_67d8a9e0",
  "status": "COMPLETED",
  "execution_time_ms": 1420,
  "nodes_indexed": 3840,
  "edges_indexed": 9120,
  "flagged_wallets_count": 384,
  "critical_alerts_count": 72,
  "clusters_discovered": 14
}`,
    statusCodes: "200 OK | 202 Accepted | 404 Not Found"
  },
  {
    method: "GET",
    path: "/wallet/:id",
    title: "Get Wallet Deep Profile & Risk Analysis",
    description: "Fetches complete forensic profile, graph centrality metrics, risk breakdown, and connected transaction count.",
    requestParams: "id: string (Bitcoin Address e.g., 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy)",
    responsePayload: `{
  "wallet_address": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  "address_type": "P2SH",
  "risk_score": 92.4,
  "threat_level": "CRITICAL",
  "first_seen": "2026-04-12T08:14:22Z",
  "last_active": "2026-08-28T19:30:10Z",
  "total_received_btc": 482.501,
  "total_sent_btc": 482.498,
  "current_balance_btc": 0.003,
  "graph_metrics": {
    "pagerank": 0.0412,
    "in_degree": 14,
    "out_degree": 182,
    "betweenness": 0.0891,
    "peel_chain_ratio": 0.94
  },
  "associated_ips": [
    {"ip": "185.220.101.5", "country": "DE", "is_tor": true},
    {"ip": "45.154.255.89", "country": "RU", "is_tor": false}
  ],
  "cluster_id": "CLUST-09_DARK_SYNDICATE"
}`,
    statusCodes: "200 OK | 404 Not Found"
  },
  {
    method: "GET",
    path: "/transaction/:id",
    title: "Get Transaction Details & UTXO Flow",
    description: "Retrieves specific Bitcoin transaction hash breakdown including inputs, outputs, fee sat/vB, and hop depth.",
    requestParams: "id: string (Transaction Hash 64-hex string)",
    responsePayload: `{
  "tx_hash": "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
  "block_height": 894120,
  "timestamp": "2026-08-28T19:22:15Z",
  "fee_satoshis": 12400,
  "fee_rate_sat_vB": 38.5,
  "inputs": [
    {
      "prev_out_hash": "f82b7c4...",
      "src_wallet": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      "amount_btc": 25.400
    }
  ],
  "outputs": [
    {
      "dst_wallet": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      "amount_btc": 23.900,
      "is_change": true
    },
    {
      "dst_wallet": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      "amount_btc": 1.498,
      "is_peel": true
    }
  ],
  "anomaly_tags": ["PEEL_CHAIN_STEP", "HIGH_VELOCITY_HOP"]
}`,
    statusCodes: "200 OK | 404 Not Found"
  },
  {
    method: "GET",
    path: "/graph",
    title: "Retrieve Investigation Subgraph Network",
    description: "Returns Cytoscape/NetworkX-compatible JSON nodes and edges for visual graph rendering around a focus wallet.",
    requestParams: "?root_wallet=3J98t1...&max_hops=3&min_amount=1.0",
    responsePayload: `{
  "nodes": [
    {"id": "victim_w1", "label": "Victim (Defrauded)", "type": "victim", "risk": 0},
    {"id": "hop_w2", "label": "Laundering Hop 1", "type": "mule", "risk": 78},
    {"id": "mixer_w3", "label": "CoinJoin Mixer", "type": "mixer", "risk": 94},
    {"id": "exchange_w4", "label": "KYC Off-Ramp", "type": "exchange", "risk": 30}
  ],
  "edges": [
    {"source": "victim_w1", "target": "hop_w2", "amount_btc": 15.0, "tx_hash": "tx_01"},
    {"source": "hop_w2", "target": "mixer_w3", "amount_btc": 14.8, "tx_hash": "tx_02"},
    {"source": "mixer_w3", "target": "exchange_w4", "amount_btc": 14.2, "tx_hash": "tx_03"}
  ],
  "graph_meta": {
    "total_nodes": 4,
    "total_edges": 3,
    "peel_detected": true
  }
}`,
    statusCodes: "200 OK"
  },
  {
    method: "GET",
    path: "/alerts",
    title: "List Priority Investigative Alerts",
    description: "Lists active high-risk wallets, anomaly flags, confidence ratings, and explainability reasoning.",
    requestParams: "?threat_level=CRITICAL&limit=50&offset=0",
    responsePayload: `{
  "total_alerts": 72,
  "items": [
    {
      "alert_id": "ALT-9041",
      "wallet_address": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      "risk_score": 92,
      "confidence": 92,
      "threat_level": "CRITICAL",
      "created_at": "2026-08-29T14:10:00Z",
      "reasons": [
        "High transaction frequency (18.4 tx/hr)",
        "Large outgoing amount (482.5 BTC)",
        "Connected to suspicious darknet wallet",
        "Multiple IP addresses across 4 countries",
        "Rapid transaction chain (Peel ratio: 0.94)"
      ],
      "status": "ACTIVE_INVESTIGATION"
    }
  ]
}`,
    statusCodes: "200 OK"
  },
  {
    method: "GET",
    path: "/timeline",
    title: "Get Temporal Transaction Timeline",
    description: "Returns chronologically sorted transaction events for money flow timeline reconstruction.",
    requestParams: "?wallet_id=3J98t1...&start_time=2026-08-01&end_time=2026-08-30",
    responsePayload: `{
  "wallet_id": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  "events_count": 18,
  "events": [
    {
      "timestamp": "2026-08-28T14:02:11Z",
      "action": "DEPOSIT",
      "amount_btc": 50.0,
      "counterparty": "1A1zP1...",
      "flag": "INITIAL_STOLEN_FUNDS"
    },
    {
      "timestamp": "2026-08-28T14:15:33Z",
      "action": "PEEL_SPLIT",
      "amount_btc": 48.5,
      "counterparty": "bc1q...",
      "flag": "PEEL_CHAIN_STEP_1"
    }
  ]
}`,
    statusCodes: "200 OK"
  },
  {
    method: "GET",
    path: "/stats",
    title: "Aggregate Dashboard Statistics",
    description: "Returns summary metrics, flagged wallet counts, country breakdown, and volume charts.",
    responsePayload: `{
  "total_transactions": 142890,
  "flagged_wallets": 384,
  "flagged_ips": 129,
  "risk_alerts": 72,
  "countries_identified": 48,
  "total_suspicious_volume_btc": 1845.2,
  "top_jurisdictions": [
    {"country": "DE", "count": 84},
    {"country": "RU", "count": 62},
    {"country": "SC", "count": 45},
    {"country": "PA", "count": 38}
  ]
}`,
    statusCodes: "200 OK"
  },
  {
    method: "GET",
    path: "/search",
    title: "Universal Forensic Search",
    description: "Searches across wallet addresses, transaction hashes, IP addresses, ASN names, and cluster tags.",
    requestParams: "?q=3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    responsePayload: `{
  "query": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  "match_type": "WALLET_ADDRESS",
  "match_count": 1,
  "results": [
    {
      "id": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      "type": "wallet",
      "threat_level": "CRITICAL",
      "risk_score": 92,
      "entity_cluster": "CLUST-09_DARK_SYNDICATE",
      "details_url": "/api/v1/wallet/3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
    }
  ]
}`,
    statusCodes: "200 OK"
  }
];
