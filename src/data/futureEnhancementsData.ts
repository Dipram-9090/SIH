export interface FutureEnhancement {
  title: string;
  category: string;
  description: string;
  impact: string;
  architectureDetails: string[];
  techUsed: string;
}

export const FUTURE_ENHANCEMENTS: FutureEnhancement[] = [
  {
    title: "Natural Language Investigation Assistant",
    category: "Generative AI & LLMs",
    description: "Conversational cyber intelligence agent enabling investigators to query complex Bitcoin graphs in plain natural language.",
    impact: "Reduces complex multi-hop graph querying time from 30 minutes of manual filtering to a 5-second plain English prompt.",
    architectureDetails: [
      "Translates natural language questions ('Show all funds originating from Victim Wallet hopping through mixers to Binance') into NetworkX path queries and Cypher/SQL queries.",
      "Produces real-time automated evidentiary summaries and forensic narrative reports for law enforcement prosecutors.",
      "Local offline LLM deployment (Llama 3 / Mistral) ensuring sensitive state-level police intelligence never leaks to external clouds."
    ],
    techUsed: "LangChain, Llama 3 / Ollama, RAG, Structured JSON Extraction"
  },
  {
    title: "Live Blockchain Monitoring & Mempool Sniffer",
    category: "Real-time Telemetry",
    description: "Zero-confirmation mempool streaming socket to detect money laundering and peel chains the millisecond they are broadcast.",
    impact: "Alerts cybercrime units before transactions get confirmed into blocks, enabling swift freezing requests to regulated crypto exchanges.",
    architectureDetails: [
      "Direct ZeroMQ / WebSocket hook into full Bitcoin Core nodes for live unconfirmed transaction streaming.",
      "Sub-second anomaly scoring engine evaluating incoming UTXOs against active case watchlists in real time.",
      "Automated webhook dispatches to exchange compliance teams (Binance, CoinDCX, WazirX, Coinbase)."
    ],
    techUsed: "Bitcoin Core RPC, ZeroMQ, WebSockets, Redis Streams"
  },
  {
    title: "Multi-Cryptocurrency & Cross-Chain Bridge Support",
    category: "Cross-Chain Intelligence",
    description: "Expand forensic tracking across Ethereum (ERC-20 / ERC-721), Tron USDT, Solana, and cross-chain bridges (Thorchain, Stargate).",
    impact: "Tracks modern sophisticated money laundering schemes that hop from Bitcoin into USDT or Monero to evade single-chain tracking.",
    architectureDetails: [
      "Multi-chain ledger decoder parsing Ethereum EVM state logs, Tron TRC-20 transfers, and bridge smart contract deposit/withdraw events.",
      "Unified unified multi-currency balance normalizer standardizing cross-chain asset valuations in USD / INR.",
      "Cross-chain bridge heuristic matching deposit amounts, timestamps, and destination slippage."
    ],
    techUsed: "Web3.py, Ethers.js, TronPy, Multi-chain Indexer"
  },
  {
    title: "Entity Resolution & Off-Chain Attribution",
    category: "Intelligence Clustering",
    description: "Advanced clustering algorithms mapping pseudo-anonymous wallet addresses to known real-world entities, exchanges, darknet markets, and ransomware groups.",
    impact: "Unmasks the real-world operational syndicates behind thousands of seemingly disparate disposable addresses.",
    architectureDetails: [
      "Deposit address reuse heuristics and multi-input clustering with confidence decay modeling.",
      "Automated web crawler parsing public blockchain explorer tags, ransomware leak sites, and darknet pastebins.",
      "Temporal behavior fingerprinting matching wallet activity hours to specific global timezones."
    ],
    techUsed: "Scikit-Learn, Entity Resolution Graph Models, Beautiful Soup"
  },
  {
    title: "Advanced Counterfactual Explainability",
    category: "Explainable AI (XAI)",
    description: "Deep judicial-grade explainability generating mathematical proof of causality and counterfactual scenarios for courtroom trials.",
    impact: "Guarantees 100% evidentiary admissibility in Indian and International courts under electronic evidence guidelines.",
    architectureDetails: [
      "Computes exact TreeSHAP and Integrated Gradients proving which specific transactions drove the anomaly threshold.",
      "Generates counterfactual statements (e.g., 'Had this wallet transacted over 48 hours instead of 4 minutes, risk would drop by 64%').",
      "Automated SHA-256 signed forensic audit certificates preserving verifiable chain of custody."
    ],
    techUsed: "SHAP, Captum, Python PDFKit, Digital Signatures"
  },
  {
    title: "Threat Intelligence Integration & Global Blacklists",
    category: "Threat Intel",
    description: "Live synchronization with international sanction lists, OFAC SDN lists, FBI Cyber Most Wanted, and CERT-In advisories.",
    impact: "Instantly flags transactions touching wallets sanctioned for terrorism financing, state-sponsored attacks, or cyber extortion.",
    architectureDetails: [
      "Automated hourly sync with US Treasury OFAC Specially Designated Nationals (SDN) cryptocurrency list.",
      "Integration with open-source threat intelligence feeds (AlienVault OTX, MISP, AbuseIPDB).",
      "Calculates risk contagion scores radiating out from blacklisted epicenter nodes."
    ],
    techUsed: "OFAC API, MISP REST API, Kafka, Threat Contagion Graph Propagation"
  }
];
