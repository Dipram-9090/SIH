export interface RoadmapStep {
  step: number;
  phase: string;
  title: string;
  objective: string;
  keyDeliverables: string[];
  duration: string;
  status: "Completed" | "In Progress" | "Planned";
  technicalFocus: string;
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: 1,
    phase: "Phase 1: Ingestion",
    title: "Dataset Upload",
    objective: "Build a scalable endpoint and file handler to ingest raw multi-format transaction logs.",
    keyDeliverables: [
      "FastAPI `/api/upload` endpoint supporting multipart CSV/JSON",
      "Chunked disk streaming for 500MB+ dataset handling",
      "SHA-256 evidence integrity hashing and metadata recording"
    ],
    duration: "Week 1",
    status: "Completed",
    technicalFocus: "FastAPI, aiofiles, StreamingResponse, Pydantic"
  },
  {
    step: 2,
    phase: "Phase 1: Ingestion",
    title: "Cleaning & Normalization",
    objective: "Parse and clean raw transaction records, extracting UTXO ins/outs and converting satoshis to BTC.",
    keyDeliverables: [
      "Regex parser for Legacy, P2SH, and SegWit Bech32 address formats",
      "Satoshi-to-BTC float precision converter and fee-per-byte estimator",
      "Deduplication and dust transaction (<546 sats) filtering engine"
    ],
    duration: "Week 1-2",
    status: "Completed",
    technicalFocus: "Pandas vectorized transformations, NumPy, Clean Data Pipeline"
  },
  {
    step: 3,
    phase: "Phase 2: Enrichment",
    title: "GeoIP & Network Enrichment",
    objective: "Correlate transaction broadcaster relay IPs with geographical location, ASNs, and privacy tools.",
    keyDeliverables: [
      "MaxMind GeoLite2 integration for Country/City mapping",
      "Real-time Tor Exit Node and known commercial VPN CIDR lookup tables",
      "Autonomous System Number (ASN) categorization for suspicious bulletproof hosts"
    ],
    duration: "Week 2",
    status: "Completed",
    technicalFocus: "GeoIP2 Python SDK, Redis in-memory cache, IPWhois"
  },
  {
    step: 4,
    phase: "Phase 2: Enrichment",
    title: "Graph Construction",
    objective: "Transform tabular ledger records into a directed multi-graph network representing money movements.",
    keyDeliverables: [
      "NetworkX DiGraph modeling Wallets as vertices and Transactions as directed edges",
      "Common-Input Ownership Heuristic (CIOH) clustering for multi-input transactions",
      "Edge weight calculation combining transaction volume and temporal recency"
    ],
    duration: "Week 3",
    status: "Completed",
    technicalFocus: "NetworkX, Graph Theory, MultiDiGraph, Topological sorting"
  },
  {
    step: 5,
    phase: "Phase 3: Machine Learning",
    title: "Feature Engineering",
    objective: "Compute rich behavioral and topological features for each wallet to feed ML algorithms.",
    keyDeliverables: [
      "Graph centrality metrics: PageRank, In/Out degree, Betweenness, Reciprocity",
      "Temporal velocity features: Hops per hour, burstiness, lifespan in blocks",
      "Heuristic ratios: Peel chain peel-off score, Fan-out splitting factor, Mixer entropy"
    ],
    duration: "Week 3-4",
    status: "Completed",
    technicalFocus: "NetworkX centrality algorithms, Pandas feature matrix, RobustScaler"
  },
  {
    step: 6,
    phase: "Phase 3: Machine Learning",
    title: "ML Detection Engines",
    objective: "Train and execute unsupervised models to isolate anomalies and group criminal syndicates.",
    keyDeliverables: [
      "Isolation Forest ensemble for isolating outlier high-velocity wallets",
      "DBSCAN density clustering for identifying multi-wallet money laundering rings",
      "Hyperparameter tuning for contamination rates and epsilon neighborhood distance"
    ],
    duration: "Week 4-5",
    status: "In Progress",
    technicalFocus: "Scikit-learn, IsolationForest, DBSCAN, Silhouette Scoring"
  },
  {
    step: 7,
    phase: "Phase 4: Risk Scoring",
    title: "Risk Scoring & Threat Tiering",
    objective: "Synthesize ML decision values, graph centrality, and heuristic flags into a 0-100% composite score.",
    keyDeliverables: [
      "Weighted scoring formula: 40% ML Anomaly + 25% Graph Metrics + 35% Heuristic Rules",
      "Tier classification: CRITICAL (>=80%), HIGH (60-79%), MEDIUM (40-59%), LOW (<40%)",
      "Automated alert generation for priority queue triage"
    ],
    duration: "Week 5",
    status: "In Progress",
    technicalFocus: "Composite score weighting, Alert Queue, Threshold Calibration"
  },
  {
    step: 8,
    phase: "Phase 4: Risk Scoring",
    title: "Explainability & Audit Trail",
    objective: "Generate transparent, human-readable forensic justifications for every flagged wallet.",
    keyDeliverables: [
      "SHAP feature importance extraction translating tree splits into plain English",
      "Checklist of contributing forensic flags (e.g. 'Peel chain detected', 'Tor relay origin')",
      "Confidence percentage calculation based on evidence convergence"
    ],
    duration: "Week 6",
    status: "Planned",
    technicalFocus: "TreeSHAP, Natural language generation, Evidentiary compliance"
  },
  {
    step: 9,
    phase: "Phase 5: User Interface",
    title: "Investigation Dashboard",
    objective: "Build high-performance interactive dashboard for cybersecurity investigators.",
    keyDeliverables: [
      "Interactive node-link graph viewer with hop expansion and path highlight",
      "Real-time alert filter table with wallet search and transaction inspector modals",
      "One-click 'Court-Ready Case Dossier' PDF generator with SHA-256 chain of custody"
    ],
    duration: "Week 6-7",
    status: "In Progress",
    technicalFocus: "Next.js 14, Cytoscape.js, Recharts, Tailwind CSS, shadcn/ui"
  },
  {
    step: 10,
    phase: "Phase 5: User Interface",
    title: "Testing & Hackathon Demo Preparation",
    objective: "Stress test system with synthetic and real Bitcoin ransomware datasets, ensuring sub-second response times.",
    keyDeliverables: [
      "End-to-end integration tests on simulated Wannacry & Silk Road Bitcoin laundering trails",
      "Docker Compose multi-container staging deployment",
      "Comprehensive SIH 2026 jury walkthrough deck and live demonstration script"
    ],
    duration: "Week 8",
    status: "Planned",
    technicalFocus: "PyTest, Docker Compose, Load Testing (Locust), SIH Demo Protocol"
  }
];
