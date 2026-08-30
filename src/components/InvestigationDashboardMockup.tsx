"use client";

import React, { useState, useEffect } from "react";
import {
  DASHBOARD_METRICS,
  TIMELINE_VOLUME_DATA,
  COUNTRY_DISTRIBUTION_DATA,
  ALERT_CATEGORY_DATA,
  MOCK_GRAPH_NODES,
  MOCK_GRAPH_EDGES,
  MOCK_ALERTS,
  DashboardAlert
} from "@/data/mockDashboardData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid
} from "recharts";
import {
  LayoutDashboard,
  Wallet,
  ArrowRightLeft,
  Network,
  Bell,
  Clock,
  FileText,
  Search,
  Filter,
  ShieldAlert,
  Download,
  Eye,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  Globe,
  Terminal,
  Play,
  Pause,
  AlertTriangle,
  FileCheck,
  User,
  Hash,
  Database,
  Info
} from "lucide-react";

export function InvestigationDashboardMockup() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedThreatFilter, setSelectedThreatFilter] = useState<string>("ALL");
  const [selectedAlert, setSelectedAlert] = useState<DashboardAlert | null>(null);

  // Graph Analysis States
  const [isFlowing, setIsFlowing] = useState<boolean>(true);
  const [ciohOverlay, setCiohOverlay] = useState<boolean>(false);
  const [hoveredNode, setHoveredNode] = useState<any | null>(null);

  // Wallet Explorer States
  const [walletSearch, setWalletSearch] = useState<string>("3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy");
  const [selectedWallet, setSelectedWallet] = useState<DashboardAlert | null>(MOCK_ALERTS[0]);
  const [isResolvingCioh, setIsResolvingCioh] = useState<boolean>(false);
  const [ciohResolved, setCiohResolved] = useState<boolean>(false);

  // Transaction States
  const [txSearchQuery, setTxSearchQuery] = useState<string>("");
  const [txFilter, setTxFilter] = useState<string>("ALL");
  const [selectedTx, setSelectedTx] = useState<any | null>(null);

  // Report Generator States
  const [investigatorName, setInvestigatorName] = useState<string>("Agent S. Sharma");
  const [caseNotes, setCaseNotes] = useState<string>("Tracing funds linked to ransomware payload cluster CLUST-09. Off-ramp address resolved to KYC profile at exchange.");
  const [reportProgress, setReportProgress] = useState<number>(0);
  const [isGeneratingReport, setIsGeneratingReport] = useState<boolean>(false);
  const [generatedReport, setGeneratedReport] = useState<any | null>(null);

  // Trigger CIOH heuristic resolution animation
  const handleResolveCioh = () => {
    setIsResolvingCioh(true);
    setCiohResolved(false);
    setTimeout(() => {
      setIsResolvingCioh(false);
      setCiohResolved(true);
    }, 1800);
  };

  // Trigger dynamic report generator compilation
  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    setReportProgress(5);
    setGeneratedReport(null);
  };

  // Handle report generator countup
  useEffect(() => {
    let interval: any;
    if (isGeneratingReport && reportProgress < 100) {
      interval = setInterval(() => {
        setReportProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGeneratingReport(false);
            setGeneratedReport({
              caseId: "CASE-2026-8942",
              dataset: "SilkRoad_2026_Seizure.csv",
              investigator: investigatorName,
              timestamp: new Date().toISOString(),
              targetWallet: selectedWallet?.wallet || "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
              threatLevel: selectedWallet?.threatLevel || "CRITICAL",
              riskScore: selectedWallet?.riskScore || 92,
              sha256Signature: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
              bsaCertification: "BSA Section 65B Certified",
              notes: caseNotes
            });
            return 100;
          }
          return prev + Math.floor(Math.random() * 20) + 5;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isGeneratingReport, reportProgress, investigatorName, caseNotes, selectedWallet]);

  // Filtered alerts for Overview/Alerts tables
  const filteredAlerts = MOCK_ALERTS.filter((alert) => {
    const matchesSearch =
      alert.wallet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.originCountry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesThreat =
      selectedThreatFilter === "ALL" || alert.threatLevel === selectedThreatFilter;
    return matchesSearch && matchesThreat;
  });

  const sidebarLinks = [
    { name: "Overview", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Wallet Explorer", icon: <Wallet className="w-4 h-4" /> },
    { name: "Transaction Explorer", icon: <ArrowRightLeft className="w-4 h-4" /> },
    { name: "Graph Analysis", icon: <Network className="w-4 h-4" /> },
    { name: "Alerts", icon: <Bell className="w-4 h-4" />, badge: MOCK_ALERTS.length.toString() },
    { name: "Timeline", icon: <Clock className="w-4 h-4" /> },
    { name: "Reports", icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <section id="dashboard-mockup" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse" />
            Section 11 // Forensic Interactive Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            AegisTrace Interactive Console
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Experience the actual investigator interface. Navigate through specialized modules, run the CIOH entity resolver, simulate flow paths, and compile signed statutory evidence.
          </p>
        </div>

        {/* Dashboard Container (Simulated Dark Forensic Window) */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex flex-col terminal-grid">
          
          {/* Top Window Bar (Forensic Blue) */}
          <div className="px-4 py-3 bg-zinc-900 text-zinc-100 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
              </div>
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline-flex items-center gap-2">
                <Terminal className="w-3 h-3 text-blue-500" />
                AEGISTRACE-FORENSIC-CONSOLE // Live Session #8942
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-800 text-blue-400 border border-zinc-700/60 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                OFFLINE MEMPOOL: ACTIVE
              </span>
              <button 
                onClick={() => setActiveTab("Reports")}
                className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-600/10"
              >
                Compile Dossier
              </button>
            </div>
          </div>

          {/* Main Body: Sidebar + Dynamic Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[720px] bg-zinc-950">
            
            {/* Sidebar Module Menu */}
            <div className="lg:col-span-3 border-r border-zinc-800 bg-zinc-900/35 p-4 space-y-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3 px-2 flex items-center justify-between">
                  <span>Investigation Modules</span>
                  <Database className="w-3 h-3" />
                </div>
                <nav className="space-y-1">
                  {sidebarLinks.map((item) => {
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.25)]"
                            : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                              isActive
                                ? "bg-white text-blue-700 font-bold"
                                : "bg-zinc-800 text-zinc-400 border border-zinc-700/60"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Seized Case Data Target Context */}
              <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 space-y-2 text-xs">
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  Target Dataset (Offline)
                </div>
                <div className="font-bold text-zinc-100 truncate flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  SilkRoad_2026_Seizure.csv
                </div>
                <div className="text-[10px] text-zinc-500 font-mono select-all">
                  SHA-256: e3b0c44...996fb
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between text-[10px] text-zinc-400">
                  <span>Size: 142k records</span>
                  <span className="text-blue-400 font-bold">Heuristics: 100%</span>
                </div>
              </div>
            </div>

            {/* Dynamic Content Panel */}
            <div className="lg:col-span-9 p-5 sm:p-6 space-y-6 overflow-y-auto max-h-[800px] bg-zinc-950/20 text-zinc-200">
              
              {/* -------------------- 1. OVERVIEW TAB -------------------- */}
              {activeTab === "Overview" && (
                <div className="space-y-6 animate-slide-up">
                  
                  {/* KPI Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                      { label: "Total Transactions", value: DASHBOARD_METRICS.totalTransactions, desc: "In current ledger", color: "border-zinc-800 text-zinc-100" },
                      { label: "Flagged Entities", value: DASHBOARD_METRICS.flaggedWallets, desc: "Heuristic clusters", color: "border-zinc-800 text-zinc-100" },
                      { label: "Flagged IP Relays", value: DASHBOARD_METRICS.flaggedIps, desc: "Tor exit nodes", color: "border-zinc-800 text-zinc-100" },
                      { label: "Risk Alerts", value: `${DASHBOARD_METRICS.riskAlerts} Critical`, desc: "Require inspection", color: "border-red-900/60 bg-red-950/10 text-red-400 animate-pulse-glow-red" },
                      { label: "Jurisdictions", value: DASHBOARD_METRICS.countriesCount, desc: "Cross-border hops", color: "border-zinc-800 text-zinc-100" }
                    ].map((m, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border transition-all duration-200 hover:-translate-y-0.5 ${m.color}`}>
                        <div className="text-[10px] uppercase font-bold text-zinc-500">{m.label}</div>
                        <div className="text-base sm:text-lg font-bold font-mono mt-1">{m.value}</div>
                        <span className="text-[9px] text-zinc-400 font-mono">{m.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Charts Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    
                    {/* Line Chart */}
                    <div className="lg:col-span-7 p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-200">
                          Transaction Velocity & Threat Index Spikes
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">24h Anomaly Spikes</span>
                      </div>

                      <div className="h-52 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={TIMELINE_VOLUME_DATA}>
                            <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="time" stroke="#71717a" fontSize={9} tickLine={false} />
                            <YAxis stroke="#71717a" fontSize={9} tickLine={false} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#09090b",
                                borderColor: "#27272a",
                                fontSize: "11px",
                                color: "#f4f4f5",
                                fontFamily: "monospace"
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="suspiciousTx"
                              name="Suspicious Volume"
                              stroke="#3b82f6"
                              strokeWidth={2}
                              dot={{ r: 3, fill: "#3b82f6" }}
                            />
                            <Line
                              type="monotone"
                              dataKey="anomalyScore"
                              name="Threat Score %"
                              stroke="#ef4444"
                              strokeWidth={1.5}
                              strokeDasharray="4 4"
                              dot={false}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex items-center justify-center space-x-6 text-[9px] font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          Suspicious Volume (BTC)
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          Threat Index
                        </span>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="lg:col-span-5 p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-200">
                          Top Risk Jurisdictions
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">Uncovered IP Leads</span>
                      </div>

                      <div className="h-52 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={COUNTRY_DISTRIBUTION_DATA} layout="vertical">
                            <XAxis type="number" stroke="#71717a" fontSize={9} tickLine={false} />
                            <YAxis
                              type="category"
                              dataKey="country"
                              stroke="#71717a"
                              fontSize={9}
                              width={80}
                              tickLine={false}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#09090b",
                                borderColor: "#27272a",
                                fontSize: "11px",
                                color: "#f4f4f5",
                                fontFamily: "monospace"
                              }}
                            />
                            <Bar dataKey="alerts" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-[9px] text-zinc-500 text-center font-mono">
                        Identified using Tor relays & Geolocation mappings
                      </p>
                    </div>
                  </div>

                  {/* Subgraph Preview Box */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                        <Network className="w-3.5 h-3.5 text-blue-500" />
                        Multi-Hop Ledger Graph Topology
                      </h4>
                      <p className="text-[11px] text-zinc-400">
                        Interactive transaction propagation tracing resolves flow distances and entity resolves.
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveTab("Graph Analysis")}
                      className="px-3.5 py-1.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-all text-xs font-bold active:scale-95"
                    >
                      Open Graph Sandbox →
                    </button>
                  </div>

                  {/* Alerts Distribution progress */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
                    <span className="text-xs font-bold text-zinc-200 block">
                      Resolved Anomaly Distributions (Laundering Signatures)
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ALERT_CATEGORY_DATA.map((cat, idx) => (
                        <div key={cat.name} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-zinc-400">{cat.name}</span>
                            <span className="font-mono font-bold text-zinc-200">
                              {cat.count} alerts ({cat.percentage})
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded"
                              style={{ width: cat.percentage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* -------------------- 2. WALLET EXPLORER -------------------- */}
              {activeTab === "Wallet Explorer" && (
                <div className="space-y-6 animate-slide-up">
                  
                  {/* Search Bar / Wallet Selector */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
                    <h3 className="text-xs font-bold text-zinc-200">Forensic Wallet Address Lookup</h3>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="Paste target address (e.g. 3J98t1...)"
                          value={walletSearch}
                          onChange={(e) => setWalletSearch(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded border border-zinc-800 bg-zinc-950 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const matched = MOCK_ALERTS.find(a => a.wallet.includes(walletSearch) || walletSearch.includes(a.id));
                          if (matched) {
                            setSelectedWallet(matched);
                            setCiohResolved(false);
                          } else {
                            alert("Address not in local indexed seizure dataset. Select a preset below.");
                          }
                        }}
                        className="px-4 py-2 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md"
                      >
                        Query Database
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] text-zinc-500 font-mono mr-1">Preset Targets:</span>
                      {MOCK_ALERTS.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => {
                            setWalletSearch(a.wallet);
                            setSelectedWallet(a);
                            setCiohResolved(false);
                          }}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                            selectedWallet?.id === a.id
                              ? "border-blue-500 bg-blue-950/40 text-blue-400"
                              : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          {a.id} ({a.threatLevel})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wallet Profile Details */}
                  {selectedWallet && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                      
                      {/* Left: Risk Metric Circular Dial Gauge */}
                      <div className="md:col-span-5 p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 flex flex-col items-center justify-center space-y-4">
                        <span className="text-xs font-bold text-zinc-300">Composite Threat Index</span>
                        
                        <div className="relative w-36 h-36 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#1f2937"
                              strokeWidth="8"
                              fill="transparent"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke={selectedWallet.riskScore > 80 ? "#ef4444" : selectedWallet.riskScore > 60 ? "#f59e0b" : "#3b82f6"}
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray="251.2"
                              strokeDashoffset={251.2 - (251.2 * selectedWallet.riskScore) / 100}
                              className="transition-all duration-1000 ease-out"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute text-center">
                            <div className="text-3xl font-bold font-mono text-zinc-100">{selectedWallet.riskScore}%</div>
                            <div className="text-[10px] text-zinc-500 uppercase font-bold">{selectedWallet.threatLevel}</div>
                          </div>
                        </div>

                        <div className="text-center">
                          <span className="text-[10px] font-mono text-zinc-400">Confidence Accuracy: {selectedWallet.confidence}%</span>
                        </div>
                      </div>

                      {/* Right: Technical Stats Card */}
                      <div className="md:col-span-7 p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase font-bold text-zinc-500 font-mono">Resolved Entity Cluster</span>
                          <h4 className="text-sm font-bold text-blue-400 font-mono flex items-center gap-1.5">
                            <ShieldAlert className="w-4 h-4 text-red-500" />
                            {selectedWallet.entityCluster}
                          </h4>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800/80">
                          <div>
                            <span className="text-[9px] text-zinc-500 font-mono">Total Traced Volume</span>
                            <div className="text-sm font-bold font-mono text-zinc-200">{selectedWallet.volumeBtc.toFixed(2)} BTC</div>
                          </div>
                          <div>
                            <span className="text-[9px] text-zinc-500 font-mono">Transaction Hops</span>
                            <div className="text-sm font-bold font-mono text-zinc-200">{selectedWallet.txCount} blocks</div>
                          </div>
                          <div>
                            <span className="text-[9px] text-zinc-500 font-mono">Origin Geolocation</span>
                            <div className="text-sm font-bold text-zinc-200 flex items-center gap-1">
                              <Globe className="w-3.5 h-3.5 text-zinc-400" />
                              {selectedWallet.originCountry}
                            </div>
                          </div>
                          <div>
                            <span className="text-[9px] text-zinc-500 font-mono">Network Layer Relays</span>
                            <div className="text-sm font-bold text-zinc-200">
                              {selectedWallet.isTor ? "TOR VPN Broadcast" : "ClearNet Broadcaster"}
                            </div>
                          </div>
                        </div>

                        {/* Heuristic clustering solver button */}
                        <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-2">
                          <button
                            onClick={handleResolveCioh}
                            disabled={isResolvingCioh}
                            className="w-full sm:w-auto px-3.5 py-1.5 text-xs font-bold rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 text-blue-500 ${isResolvingCioh ? "animate-spin" : ""}`} />
                            {isResolvingCioh ? "Clustering Entities..." : "CIOH Cluster Resolution"}
                          </button>

                          {ciohResolved && (
                            <span className="text-[10px] text-green-400 font-mono flex items-center gap-1 animate-slide-up">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                              Linked 14 sub-wallets under common ownership.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Evidence Checklist */}
                  {selectedWallet && (
                    <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
                      <h4 className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        AI Forensic Attributions (SHAP Checklist)
                      </h4>
                      <ul className="space-y-2">
                        {selectedWallet.reasons.map((reason, idx) => (
                          <li key={idx} className="text-xs text-zinc-300 flex items-start space-x-2.5 p-2.5 rounded border border-zinc-800 bg-zinc-950/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}

              {/* -------------------- 3. TRANSACTION EXPLORER -------------------- */}
              {activeTab === "Transaction Explorer" && (
                <div className="space-y-6 animate-slide-up">
                  
                  {/* Search and Filters */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search tx hash..."
                        value={txSearchQuery}
                        onChange={(e) => setTxSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded border border-zinc-800 bg-zinc-950 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                      />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <select
                        value={txFilter}
                        onChange={(e) => setTxFilter(e.target.value)}
                        className="px-3 py-2 text-xs rounded border border-zinc-800 bg-zinc-950 text-zinc-300 font-mono w-full"
                      >
                        <option value="ALL">All Categories</option>
                        <option value="Peel Chain">Peel Chains</option>
                        <option value="CoinJoin">CoinJoin Mixers</option>
                        <option value="Ransomware">Ransomware Mules</option>
                        <option value="Co-spending">Co-spend Clusters</option>
                      </select>
                    </div>
                  </div>

                  {/* Transactions Table */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 uppercase text-[9px] tracking-wider">
                          <tr>
                            <th className="py-3 px-4">Transaction Hash</th>
                            <th className="py-3 px-4">Origin Wallet</th>
                            <th className="py-3 px-4">Dest/Cluster</th>
                            <th className="py-3 px-4">Volume (BTC)</th>
                            <th className="py-3 px-4">Status Heuristics</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-300">
                          {MOCK_ALERTS
                            .filter(tx => {
                              const matchesSearch = tx.wallet.toLowerCase().includes(txSearchQuery.toLowerCase()) || tx.id.toLowerCase().includes(txSearchQuery.toLowerCase());
                              const matchesFilter = txFilter === "ALL" || tx.category.includes(txFilter);
                              return matchesSearch && matchesFilter;
                            })
                            .map((tx) => (
                              <tr
                                key={tx.id}
                                className="hover:bg-zinc-900/60 cursor-pointer transition-colors"
                                onClick={() => setSelectedTx(tx)}
                              >
                                <td className="py-3 px-4 font-bold text-blue-400 truncate max-w-[120px]">
                                  tx_{tx.id.toLowerCase()}_hash_9841
                                </td>
                                <td className="py-3 px-4 text-zinc-400 truncate max-w-[120px]">
                                  {tx.shortWallet}
                                </td>
                                <td className="py-3 px-4 text-zinc-400 truncate max-w-[120px]">
                                  {tx.entityCluster}
                                </td>
                                <td className="py-3 px-4 font-bold text-zinc-100">
                                  {tx.volumeBtc.toFixed(2)} BTC
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`text-[9px] px-2 py-0.5 rounded font-bold border ${
                                    tx.threatLevel === "CRITICAL"
                                      ? "border-red-900 bg-red-950/20 text-red-400"
                                      : tx.threatLevel === "HIGH"
                                      ? "border-amber-900 bg-amber-950/20 text-amber-400"
                                      : "border-blue-900 bg-blue-950/20 text-blue-400"
                                  }`}>
                                    {tx.threatLevel}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-right">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedTx(tx);
                                    }}
                                    className="text-xs font-bold text-blue-400 hover:text-blue-200 flex items-center gap-1 ml-auto"
                                  >
                                    Inspect <ChevronRight className="w-3 h-3" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Transaction Inspector Panel */}
                  {selectedTx && (
                    <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4 animate-slide-up">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <h4 className="text-xs font-bold text-zinc-200 font-mono">
                          Transaction Inspector // tx_{selectedTx.id.toLowerCase()}_hash_9841
                        </h4>
                        <button
                          onClick={() => setSelectedTx(null)}
                          className="text-zinc-500 hover:text-zinc-300 text-xs font-bold"
                        >
                          Close Panel ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                        <div className="space-y-2 p-3 rounded border border-zinc-800/80 bg-zinc-950/50">
                          <span className="text-[10px] text-zinc-500 font-bold uppercase block">Inputs (Source Addresses)</span>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-zinc-300">
                              <span className="truncate max-w-[150px]">{selectedTx.wallet}</span>
                              <span className="font-bold text-zinc-400">{selectedTx.volumeBtc.toFixed(2)} BTC</span>
                            </div>
                            <div className="text-[10px] text-zinc-500">CIOH grouping: Linked {selectedTx.txCount} inputs</div>
                          </div>
                        </div>

                        <div className="space-y-2 p-3 rounded border border-zinc-800/80 bg-zinc-950/50">
                          <span className="text-[10px] text-zinc-500 font-bold uppercase block">Outputs (Transit Destinations)</span>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-zinc-300">
                              <span className="truncate max-w-[150px]">bc1qxy_out_hop_1</span>
                              <span className="font-bold text-green-400">{(selectedTx.volumeBtc * 0.49).toFixed(2)} BTC</span>
                            </div>
                            <div className="flex justify-between items-center text-zinc-300">
                              <span className="truncate max-w-[150px]">bc1qxy_out_peel_change</span>
                              <span className="font-bold text-zinc-400">{(selectedTx.volumeBtc * 0.51).toFixed(2)} BTC</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded border border-blue-900/60 bg-blue-950/10 space-y-1.5">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5" />
                          Flow Anomaly Attribution (AI SHAP Lead)
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          This transaction resolves to category: <span className="font-bold text-zinc-200">{selectedTx.category}</span>.
                          Heuristics identify a peel ratio of 0.94 within 3 subsequent blocks. Outflow split paths show immediate KYC cash-out signatures.
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* -------------------- 4. GRAPH ANALYSIS -------------------- */}
              {activeTab === "Graph Analysis" && (
                <div className="space-y-6 animate-slide-up">
                  
                  {/* Graph controls */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-zinc-200">Transaction Graph Simulator</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-500">
                        Target Focus: CLUST-09
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setIsFlowing(!isFlowing)}
                        className={`px-3 py-1.5 rounded text-xs font-bold border transition-all flex items-center gap-1 active:scale-95 ${
                          isFlowing
                            ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/10"
                            : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        }`}
                      >
                        {isFlowing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        {isFlowing ? "Flowing Particles" : "Static Path"}
                      </button>

                      <button
                        onClick={() => setCiohOverlay(!ciohOverlay)}
                        className={`px-3 py-1.5 rounded text-xs font-bold border transition-all flex items-center gap-1 active:scale-95 ${
                          ciohOverlay
                            ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-600/10"
                            : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        }`}
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        CIOH Clusters
                      </button>
                    </div>
                  </div>

                  {/* SVG Node Graph Canvas */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/20 p-4 relative overflow-hidden flex items-center justify-center min-h-[340px]">
                    <svg viewBox="0 0 740 280" className="w-full h-full select-none overflow-visible">
                      <defs>
                        <marker
                          id="arrow-neon"
                          viewBox="0 0 10 10"
                          refX="18"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto"
                        >
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6" />
                        </marker>
                      </defs>

                      {/* CIOH Grouping Bounds Overlay */}
                      {ciohOverlay && (
                        <g className="animate-fade-in">
                          <rect
                            x="200"
                            y="40"
                            width="370"
                            height="215"
                            rx="8"
                            fill="rgba(168, 85, 247, 0.05)"
                            stroke="#a855f7"
                            strokeWidth="1.2"
                            strokeDasharray="4,4"
                          />
                          <text
                            x="215"
                            y="240"
                            fontSize="9"
                            fill="#a855f7"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            CIOH Group Bounds: CLUST-09_DARK_SYNDICATE
                          </text>
                        </g>
                      )}

                      {/* Edges */}
                      {MOCK_GRAPH_EDGES.map((edge, idx) => {
                        const src = MOCK_GRAPH_NODES.find((n) => n.id === edge.source);
                        const dst = MOCK_GRAPH_NODES.find((n) => n.id === edge.target);
                        if (!src || !dst) return null;
                        return (
                          <g key={idx}>
                            <line
                              x1={src.x}
                              y1={src.y}
                              x2={dst.x}
                              y2={dst.y}
                              stroke="#374151"
                              strokeWidth="2"
                              markerEnd="url(#arrow-neon)"
                            />

                            {/* Neon flowing dash layer */}
                            {isFlowing && (
                              <line
                                x1={src.x}
                                y1={src.y}
                                x2={dst.x}
                                y2={dst.y}
                                stroke="#3b82f6"
                                strokeWidth="2.2"
                                className="animate-flow-edge"
                              />
                            )}

                            <text
                              x={(src.x + dst.x) / 2}
                              y={(src.y + dst.y) / 2 - 5}
                              fontSize="8"
                              fill="#9ca3af"
                              textAnchor="middle"
                              fontFamily="monospace"
                            >
                              {edge.amount}
                            </text>
                          </g>
                        );
                      })}

                      {/* Nodes */}
                      {MOCK_GRAPH_NODES.map((node) => {
                        const isTarget = node.id === "W_TARGET";
                        const isVictim = node.type === "victim";
                        const isMixer = node.type === "mixer";
                        
                        let borderStroke = "#4b5563";
                        let fillBg = "#09090b";
                        let textFill = "#e4e4e7";

                        if (isVictim) {
                          borderStroke = "#10b981";
                          fillBg = "rgba(16, 185, 129, 0.1)";
                          textFill = "#10b981";
                        } else if (isTarget) {
                          borderStroke = "#ef4444";
                          fillBg = "#7f1d1d";
                          textFill = "#ffffff";
                        } else if (isMixer) {
                          borderStroke = "#ef4444";
                          fillBg = "rgba(239, 68, 68, 0.1)";
                          textFill = "#ef4444";
                        } else if (node.type === "exchange") {
                          borderStroke = "#3b82f6";
                          fillBg = "rgba(59, 130, 246, 0.15)";
                          textFill = "#3b82f6";
                        }

                        const isHovered = hoveredNode?.id === node.id;

                        return (
                          <g
                            key={node.id}
                            transform={`translate(${node.x}, ${node.y})`}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredNode(node)}
                            onMouseLeave={() => setHoveredNode(null)}
                            onClick={() => {
                              const matched = MOCK_ALERTS.find(a => a.wallet.includes(node.id) || node.label.includes(a.wallet) || (node.id === "W_TARGET" && a.id === "ALT-9041"));
                              if (matched) {
                                setSelectedWallet(matched);
                                setWalletSearch(matched.wallet);
                                setActiveTab("Wallet Explorer");
                              }
                            }}
                          >
                            <circle
                              r={isTarget ? "17" : "13"}
                              fill={fillBg}
                              stroke={borderStroke}
                              strokeWidth={isHovered ? "3.2" : "1.8"}
                              className="transition-all duration-200"
                            />
                            
                            {isTarget && (
                              <circle
                                r="23"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="1"
                                className="animate-ping opacity-30 pointer-events-none"
                              />
                            )}

                            <text
                              textAnchor="middle"
                              dy="3"
                              fontSize="7.5"
                              fontWeight="bold"
                              fill={textFill}
                              fontFamily="monospace"
                            >
                              {node.risk > 0 ? `${node.risk}%` : isVictim ? "VIC" : "HOP"}
                            </text>

                            <text
                              textAnchor="middle"
                              dy="24"
                              fontSize="8"
                              fill="#f4f4f5"
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              {node.label.split(" ")[0]}
                            </text>
                            
                            <text
                              textAnchor="middle"
                              dy="32"
                              fontSize="7"
                              fill="#71717a"
                              fontFamily="monospace"
                            >
                              {node.balance}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {hoveredNode && (
                      <div className="absolute bottom-4 left-4 p-3 rounded border border-zinc-800 bg-zinc-900/90 backdrop-blur text-xs font-mono space-y-1.5 animate-slide-up max-w-[280px]">
                        <div className="font-bold text-zinc-100 flex items-center justify-between">
                          <span>{hoveredNode.label}</span>
                          <span className="text-[10px] text-blue-400">Risk: {hoveredNode.risk}%</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">{hoveredNode.sublabel}</div>
                        <div className="text-[9px] text-zinc-500 font-bold border-t border-zinc-800 pt-1">
                          Cluster: CLUST-09
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400 space-y-1 flex items-center justify-between">
                    <span>Target Wallet: <span className="font-mono font-bold text-zinc-200">3J98t1... (92% Risk)</span></span>
                    <span className="text-blue-400 font-bold font-mono">Hop Transit Velocity: &lt; 90s</span>
                  </div>

                </div>
              )}

              {/* -------------------- 5. ALERTS TAB -------------------- */}
              {activeTab === "Alerts" && (
                <div className="space-y-6 animate-slide-up">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                    <div className="flex items-center space-x-2">
                      <ShieldAlert className="w-4 h-4 text-zinc-100" />
                      <span className="text-xs font-bold text-zinc-200">
                        Priority Investigative Alerts Queue ({filteredAlerts.length})
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2" />
                        <input
                          type="text"
                          placeholder="Search address..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-8 pr-3 py-1 text-xs rounded border border-zinc-800 bg-zinc-950 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                        />
                      </div>

                      <select
                        value={selectedThreatFilter}
                        onChange={(e) => setSelectedThreatFilter(e.target.value)}
                        className="px-2 py-1 text-xs rounded border border-zinc-800 bg-zinc-950 text-zinc-300 font-mono"
                      >
                        <option value="ALL">All Threats</option>
                        <option value="CRITICAL">CRITICAL</option>
                        <option value="HIGH">HIGH</option>
                        <option value="MEDIUM">MEDIUM</option>
                      </select>
                    </div>
                  </div>

                  {/* Alerts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => setSelectedAlert(alert)}
                        className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-blue-500/50 hover:bg-zinc-900/70 cursor-pointer transition-all duration-200 group flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-mono font-bold text-blue-400">{alert.id}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded font-bold border ${
                              alert.threatLevel === "CRITICAL"
                                ? "border-red-900 bg-red-950/20 text-red-400"
                                : alert.threatLevel === "HIGH"
                                ? "border-amber-900 bg-amber-950/20 text-amber-400"
                                : "border-blue-900 bg-blue-950/20 text-blue-400"
                            }`}>
                              {alert.threatLevel}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] text-zinc-500 font-mono">Address Hash</div>
                            <div className="text-xs font-mono text-zinc-100 truncate">{alert.wallet}</div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-zinc-300 py-1.5 border-y border-zinc-800/60 text-[10px] font-mono">
                            <div>
                              <span className="text-[8px] text-zinc-500 block">Risk Score</span>
                              <span className="font-bold text-zinc-200">{alert.riskScore}%</span>
                            </div>
                            <div>
                              <span className="text-[8px] text-zinc-500 block">Volume BTC</span>
                              <span className="font-bold text-zinc-200">{alert.volumeBtc.toFixed(1)} BTC</span>
                            </div>
                            <div>
                              <span className="text-[8px] text-zinc-500 block">Country Code</span>
                              <span className="font-bold text-zinc-200">{alert.originCountry.split(" ")[0]}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[10px] font-mono text-zinc-500">Category: {alert.category.split(" ")[0]}</span>
                          <span className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-0.5">
                            Inspect lead →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* -------------------- 6. TIMELINE TAB -------------------- */}
              {activeTab === "Timeline" && (
                <div className="space-y-6 animate-slide-up">
                  
                  <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400">
                    Chronological audit flow mapping BTC splits, hops, and mixers from genesis incident to exchange endpoints.
                  </div>

                  {/* Vertical Timeline Tree */}
                  <div className="relative border-l-2 border-zinc-800 ml-4 pl-6 space-y-8 py-2">
                    {[
                      { title: "Incident Genesis (Theft)", desc: "Funds leave defrauded victim wallet 1A1zP1...", time: "14:02 UTC", amount: "50.00 BTC", status: "Origin" },
                      { title: "First Split (Hop A & B)", desc: "Divided between intermediary wallets 34xp4v... and bc1qxy... to strip tracing bounds.", time: "14:02 - 14:18 UTC", amount: "25.00 BTC x2", status: "Mule Hop" },
                      { title: "Ingress Obfuscation Pool", desc: "Outflow from Hop B enters High entropy CoinJoin mixer address W_MIXER.", time: "14:18 - 14:31 UTC", amount: "24.00 BTC", status: "Mixer Ingress" },
                      { title: "Re-aggregation Sweep", desc: "Peel Chain strips and Mixer outputs re-assembled in Target address 3J98t1...", time: "14:31 UTC", amount: "48.50 BTC total", status: "Critical Target" },
                      { title: "KYC Off-ramp Outflow", desc: "Outflow sweeps routed to exchange deposit KYC account for liquidation cash-out.", time: "14:45 UTC", amount: "47.20 BTC", status: "Off-ramp" }
                    ].map((step, idx) => (
                      <div key={idx} className="relative">
                        <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border border-zinc-950 bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold">
                          {idx + 1}
                        </span>

                        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2 max-w-xl">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span className="text-xs font-bold text-zinc-100">{step.title}</span>
                            <span className="text-[10px] font-mono text-zinc-500">{step.time}</span>
                          </div>
                          
                          <p className="text-xs text-zinc-400">{step.desc}</p>
                          
                          <div className="flex justify-between items-center text-[10px] font-mono pt-1.5 border-t border-zinc-800/80">
                            <span className="text-zinc-500">Vol: <span className="font-bold text-zinc-300">{step.amount}</span></span>
                            <span className="px-1.5 py-0.2 rounded border border-blue-900/40 bg-blue-950/20 text-blue-400">{step.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* -------------------- 7. REPORTS TAB -------------------- */}
              {activeTab === "Reports" && (
                <div className="space-y-6 animate-slide-up">
                  
                  {/* Form input details */}
                  <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
                    <h3 className="text-xs font-bold text-zinc-200">Compile Court-Admissible Case Report</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1.5">
                        <label className="text-zinc-400 font-bold block">Lead Investigator Name</label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            value={investigatorName}
                            onChange={(e) => setInvestigatorName(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-zinc-400 font-bold block">Case Reference ID</label>
                        <div className="relative">
                          <Hash className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            value="CASE-2026-8942"
                            disabled
                            className="w-full pl-9 pr-3 py-2 rounded border border-zinc-800 bg-zinc-900 text-zinc-500 font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <label className="text-zinc-400 font-bold block">Brief Investigation Summary</label>
                      <textarea
                        value={caseNotes}
                        onChange={(e) => setCaseNotes(e.target.value)}
                        rows={3}
                        className="w-full p-2.5 rounded border border-zinc-800 bg-zinc-950 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono text-xs"
                      />
                    </div>

                    {isGeneratingReport && (
                      <div className="space-y-2 animate-slide-up">
                        <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                          <span>Compiling ledger trails & SHAP attribution profiles...</span>
                          <span>{reportProgress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded transition-all duration-300"
                            style={{ width: `${reportProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleGenerateReport}
                      disabled={isGeneratingReport}
                      className="px-4 py-2 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md flex items-center gap-1.5 justify-center"
                    >
                      <FileCheck className="w-4 h-4" />
                      Compile Statutory Case Dossier
                    </button>
                  </div>

                  {/* Generated Dossier Card */}
                  {generatedReport && (
                    <div className="p-5 rounded-lg border border-green-900/60 bg-green-950/10 space-y-4 animate-slide-up">
                      <div className="flex items-center justify-between border-b border-green-900/30 pb-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-xs font-bold text-green-400 font-mono">
                            Evidentiary Case Dossier Compiled Successfully // Signed
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            const blob = new Blob([JSON.stringify(generatedReport, null, 2)], { type: "application/json" });
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.href = url;
                            link.download = `AEGISTRACE_${generatedReport.caseId}.json`;
                            link.click();
                          }}
                          className="px-3 py-1.5 text-xs font-bold rounded bg-green-800 text-zinc-100 hover:bg-green-700 transition-all flex items-center gap-1 active:scale-95"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Export dossier.json
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        <div className="space-y-1">
                          <span className="text-zinc-500">Case Reference ID</span>
                          <div className="text-zinc-300 font-bold">{generatedReport.caseId}</div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-zinc-500">Lead Investigator</span>
                          <div className="text-zinc-300 font-bold">{generatedReport.investigator}</div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-zinc-500">Case Verification Key</span>
                          <div className="text-zinc-400 font-bold truncate">{generatedReport.sha256Signature}</div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-zinc-500">Legal Certification Standard</span>
                          <div className="text-zinc-300 font-bold">{generatedReport.bsaCertification}</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded border border-green-900/40 bg-zinc-950/40 space-y-1.5">
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">
                          Section 65B Forensics Affidavit Hash
                        </span>
                        <p className="text-xs text-zinc-300 font-mono select-all">
                          sha256sum: {generatedReport.sha256Signature}
                        </p>
                        <p className="text-[10px] text-zinc-500 leading-relaxed pt-1">
                          This signature validates the cryptographic hash of the raw transaction ledger rows and network relay attributes, establishing custody chain admissibility under current laws.
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Modal for Alert Inspection (Globally Accessible) */}
      {selectedAlert && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 rounded-lg border border-zinc-800 shadow-2xl max-w-xl w-full overflow-hidden animate-slide-up">
            
            <div className="p-4 border-b border-zinc-800 bg-zinc-900 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-xs font-bold font-mono">
                  Forensic Alert Dossier // {selectedAlert.id}
                </span>
              </div>
              <button
                onClick={() => setSelectedAlert(null)}
                className="text-zinc-500 hover:text-zinc-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="text-[9px] uppercase font-bold text-zinc-500 font-mono">
                  Subject Wallet Address
                </div>
                <div className="p-2.5 rounded border border-zinc-800 bg-zinc-900 font-mono text-xs font-bold text-blue-400 mt-1 break-all select-all">
                  {selectedAlert.wallet}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono">
                <div className="p-3 rounded border border-zinc-800 bg-zinc-900/40 text-center">
                  <div className="text-[8px] text-zinc-500 uppercase font-bold">Threat Tier</div>
                  <div className="text-xs font-bold text-red-400 mt-1">
                    {selectedAlert.threatLevel}
                  </div>
                </div>
                <div className="p-3 rounded border border-zinc-800 bg-zinc-900/40 text-center">
                  <div className="text-[8px] text-zinc-500 uppercase font-bold">Risk Score</div>
                  <div className="text-xs font-bold text-zinc-100 mt-1">
                    {selectedAlert.riskScore}%
                  </div>
                </div>
                <div className="p-3 rounded border border-zinc-800 bg-zinc-900/40 text-center">
                  <div className="text-[8px] text-zinc-500 uppercase font-bold">Volume BTC</div>
                  <div className="text-xs font-bold text-zinc-100 mt-1">
                    {selectedAlert.volumeBtc} BTC
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Attribution Checkpoints
                </div>
                <ul className="space-y-1.5">
                  {selectedAlert.reasons.map((r, i) => (
                    <li
                      key={i}
                      className="text-xs text-zinc-300 flex items-start space-x-2 p-2 rounded border border-zinc-800 bg-zinc-900/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">
                Cluster: {selectedAlert.entityCluster}
              </span>
              <button
                onClick={() => setSelectedAlert(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-blue-600 hover:bg-blue-700 text-white transition-all active:scale-95"
              >
                Acknowledge Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
