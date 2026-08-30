export interface DashboardAlert {
  id: string;
  wallet: string;
  shortWallet: string;
  riskScore: number;
  threatLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  confidence: number;
  category: string;
  volumeBtc: number;
  txCount: number;
  lastActive: string;
  originCountry: string;
  reasons: string[];
  entityCluster: string;
  isTor: boolean;
}

export const DASHBOARD_METRICS = {
  totalTransactions: "142,890",
  totalTransactionsRaw: 142890,
  flaggedWallets: 384,
  flaggedIps: 129,
  riskAlerts: 72,
  countriesCount: 48,
  suspiciousVolumeBtc: "1,845.20 BTC",
  avgInvestigationTime: "4.2 min"
};

export const TIMELINE_VOLUME_DATA = [
  { time: "00:00", normalTx: 4200, suspiciousTx: 80, anomalyScore: 12 },
  { time: "03:00", normalTx: 2800, suspiciousTx: 140, anomalyScore: 28 },
  { time: "06:00", normalTx: 3100, suspiciousTx: 90, anomalyScore: 18 },
  { time: "09:00", normalTx: 7800, suspiciousTx: 320, anomalyScore: 45 },
  { time: "12:00", normalTx: 11400, suspiciousTx: 680, anomalyScore: 78 },
  { time: "15:00", normalTx: 14200, suspiciousTx: 980, anomalyScore: 92 },
  { time: "18:00", normalTx: 12600, suspiciousTx: 840, anomalyScore: 84 },
  { time: "21:00", normalTx: 8900, suspiciousTx: 410, anomalyScore: 52 }
];

export const COUNTRY_DISTRIBUTION_DATA = [
  { country: "DE (Germany)", alerts: 84, volume: 492 },
  { country: "RU (Russia)", alerts: 62, volume: 380 },
  { country: "SC (Seychelles)", alerts: 45, volume: 310 },
  { country: "PA (Panama)", alerts: 38, volume: 240 },
  { country: "VG (B.V.I.)", alerts: 31, volume: 185 },
  { country: "NL (Netherlands)", alerts: 26, volume: 140 },
  { country: "CH (Switzerland)", alerts: 18, volume: 98 }
];

export const ALERT_CATEGORY_DATA = [
  { name: "Peel Chains", count: 32, percentage: "44%" },
  { name: "CoinJoin Mixers", count: 18, percentage: "25%" },
  { name: "Darknet Market", count: 11, percentage: "15%" },
  { name: "Ransomware Mule", count: 7, percentage: "10%" },
  { name: "Co-spend Cluster", count: 4, percentage: "6%" }
];

export const MOCK_GRAPH_NODES = [
  { id: "W_VICTIM", label: "Victim Wallet", type: "victim", balance: "0.00 BTC", risk: 0, x: 80, y: 150, sublabel: "Defrauded 50 BTC" },
  { id: "W_MULE1", label: "Mule Hop A", type: "hop", balance: "1.20 BTC", risk: 74, x: 220, y: 80, sublabel: "Split 1 (24.8 BTC)" },
  { id: "W_MULE2", label: "Mule Hop B", type: "hop", balance: "0.80 BTC", risk: 78, x: 220, y: 220, sublabel: "Split 2 (24.8 BTC)" },
  { id: "W_PEEL1", label: "Peel Hub 1", type: "peel", balance: "0.05 BTC", risk: 89, x: 380, y: 80, sublabel: "12 rapid micro-hops" },
  { id: "W_MIXER", label: "CoinJoin Mixer", type: "mixer", balance: "142.5 BTC", risk: 96, x: 380, y: 220, sublabel: "High entropy pool" },
  { id: "W_TARGET", label: "3J98t1Wp... (Key Target)", type: "target", balance: "0.003 BTC", risk: 92, x: 540, y: 150, sublabel: "Critical 92% Risk" },
  { id: "W_OFFRAMP", label: "Exchange Deposit", type: "exchange", balance: "48.2 BTC", risk: 35, x: 700, y: 150, sublabel: "KYC Off-ramp" }
];

export const MOCK_GRAPH_EDGES = [
  { source: "W_VICTIM", target: "W_MULE1", amount: "25.0 BTC", time: "14:02:11 UTC" },
  { source: "W_VICTIM", target: "W_MULE2", amount: "25.0 BTC", time: "14:02:15 UTC" },
  { source: "W_MULE1", target: "W_PEEL1", amount: "23.8 BTC", time: "14:14:00 UTC" },
  { source: "W_MULE2", target: "W_MIXER", amount: "24.0 BTC", time: "14:18:22 UTC" },
  { source: "W_PEEL1", target: "W_TARGET", amount: "23.5 BTC", time: "14:25:10 UTC" },
  { source: "W_MIXER", target: "W_TARGET", amount: "23.9 BTC", time: "14:31:05 UTC" },
  { source: "W_TARGET", target: "W_OFFRAMP", amount: "47.2 BTC", time: "14:45:00 UTC" }
];

export const MOCK_ALERTS: DashboardAlert[] = [
  {
    id: "ALT-9041",
    wallet: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    shortWallet: "3J98t1...RhWNLy",
    riskScore: 92,
    threatLevel: "CRITICAL",
    confidence: 92,
    category: "Peel Chain / Rapid Hopping",
    volumeBtc: 482.50,
    txCount: 196,
    lastActive: "12m ago",
    originCountry: "DE (Germany)",
    reasons: [
      "High transaction frequency (18.4 tx/hr vs avg 0.2)",
      "Large outgoing amount (482.5 BTC within 4 hours)",
      "Direct connection to flagged darknet wallet",
      "Multiple IP addresses across 4 jurisdictions (DE, RU, SC, PA)",
      "Rapid transaction chain (Peel ratio: 0.94)"
    ],
    entityCluster: "CLUST-09_DARK_SYNDICATE",
    isTor: true
  },
  {
    id: "ALT-9038",
    wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    shortWallet: "1A1zP1...vfNa",
    riskScore: 88,
    threatLevel: "CRITICAL",
    confidence: 90,
    category: "CoinJoin Mixer Pool",
    volumeBtc: 142.10,
    txCount: 84,
    lastActive: "28m ago",
    originCountry: "RU (Russia)",
    reasons: [
      "Zero-time hop latency (< 45 seconds between ins/outs)",
      "Equal-sized output splitting (CoinJoin fingerprint)",
      "High entropy graph clustering score (0.88)",
      "Tor relay broadcast node matched"
    ],
    entityCluster: "CLUST-04_MIXER_RING",
    isTor: true
  },
  {
    id: "ALT-9035",
    wallet: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    shortWallet: "bc1qxy...0wlh",
    riskScore: 84,
    threatLevel: "CRITICAL",
    confidence: 89,
    category: "Ransomware Extortion Mule",
    volumeBtc: 78.45,
    txCount: 52,
    lastActive: "1h ago",
    originCountry: "SC (Seychelles)",
    reasons: [
      "Matches known ransomware extortion payment pattern",
      "Immediate fan-out to 8 distinct unverified addresses",
      "Broadcaster IP associated with bulletproof hosting ASN"
    ],
    entityCluster: "CLUST-12_RANSOM_PAYLOAD",
    isTor: false
  },
  {
    id: "ALT-9029",
    wallet: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
    shortWallet: "34xp4v...Twseo",
    riskScore: 76,
    threatLevel: "HIGH",
    confidence: 85,
    category: "Co-spending Syndicate",
    volumeBtc: 210.00,
    txCount: 312,
    lastActive: "2h ago",
    originCountry: "PA (Panama)",
    reasons: [
      "Common-Input Ownership Heuristic linked to 14 sub-wallets",
      "Abnormal transaction bursts during non-business hours",
      "Sudden 100% balance drainage within 1 block"
    ],
    entityCluster: "CLUST-07_COSPEND_NET",
    isTor: false
  },
  {
    id: "ALT-9024",
    wallet: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    shortWallet: "bc1qar...5mdq",
    riskScore: 68,
    threatLevel: "HIGH",
    confidence: 82,
    category: "Darknet Market Off-Ramp",
    volumeBtc: 34.20,
    txCount: 44,
    lastActive: "3h ago",
    originCountry: "NL (Netherlands)",
    reasons: [
      "2-hop proximity to Hydra / Black market seizure cluster",
      "Round-number structuring just below reporting thresholds ($9,800)",
      "High velocity outbound sweeps"
    ],
    entityCluster: "CLUST-02_MARKET_NODE",
    isTor: true
  },
  {
    id: "ALT-9018",
    wallet: "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
    shortWallet: "1FeexV...b6uF",
    riskScore: 61,
    threatLevel: "HIGH",
    confidence: 79,
    category: "Dormant Whale Awakening",
    volumeBtc: 190.50,
    txCount: 12,
    lastActive: "5h ago",
    originCountry: "CH (Switzerland)",
    reasons: [
      "Dormant for > 4 years before sudden high-volume liquidation",
      "Outbound transfer routed through 3 intermediate proxy wallets",
      "High betweenness centrality in current dataset subgraph"
    ],
    entityCluster: "CLUST-01_DORMANT_RECOVERY",
    isTor: false
  },
  {
    id: "ALT-9012",
    wallet: "3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r",
    shortWallet: "3D2oet...Fk9r",
    riskScore: 49,
    threatLevel: "MEDIUM",
    confidence: 75,
    category: "Unregistered OTC Broker",
    volumeBtc: 88.00,
    txCount: 160,
    lastActive: "8h ago",
    originCountry: "VG (B.V.I.)",
    reasons: [
      "Frequent high-volume bilateral transfers without merchant metadata",
      "Cyclic transaction loops between 4 recurrent counterparty nodes"
    ],
    entityCluster: "CLUST-15_OTC_FLOW",
    isTor: false
  }
];
