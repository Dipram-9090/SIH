"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  Bar
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
  ShieldAlert
} from "lucide-react";

export function InvestigationDashboardMockup() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedThreatFilter, setSelectedThreatFilter] = useState<string>("ALL");
  const [selectedAlert, setSelectedAlert] = useState<DashboardAlert | null>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Filtered alerts for the table
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
    { name: "Alerts", icon: <Bell className="w-4 h-4" />, badge: "72" },
    { name: "Timeline", icon: <Clock className="w-4 h-4" /> },
    { name: "Reports", icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <section id="dashboard-mockup" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 11 // Product Simulation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Investigation Dashboard Mockup
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            An interactive preview of the investigator dashboard. Test the active sidebar views, filter threat queues, inspect live charting, and examine wallet subgraphs.
          </p>
        </div>

        {/* Dashboard Container (Simulated Window) */}
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden flex flex-col transition-colors">
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 hidden sm:inline">
                SIH-Forensic-Investigation-Console // Live Session #8942
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <span className="px-2 py-0.5 rounded bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono shadow-xs">
                BTC MEMPOOL: SYNCED
              </span>
              <button className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 transition-colors shadow-sm">
                Export Dossier
              </button>
            </div>
          </div>

          {/* Main Body: Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
            {/* Sidebar (Mock) */}
            <div className="lg:col-span-3 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/70 p-4 space-y-6 transition-colors">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 px-2">
                  Investigation Modules
                </div>
                <nav className="space-y-1">
                  {sidebarLinks.map((item) => {
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold shadow-sm"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-900"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                              isActive
                                ? "bg-blue-600 text-white font-bold"
                                : "bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
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

              {/* Active Case Context */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2 text-xs transition-colors">
                <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                  Target Dataset
                </div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100 truncate">
                  SilkRoad_2026_Seizure.csv
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                  SHA-256: e3b0c44...996fb
                </div>
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between text-[10px] text-zinc-600 dark:text-zinc-400">
                  <span>Processed: 142k rows</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">100% Analyzed</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 p-5 sm:p-6 space-y-6 overflow-y-auto max-h-[800px] bg-white dark:bg-zinc-900/50 transition-colors">
              {/* 5 Main KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                    Total Transactions
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100 mt-1">
                    {DASHBOARD_METRICS.totalTransactions}
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">In current dataset</span>
                </div>

                <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                    Flagged Wallets
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100 mt-1">
                    {DASHBOARD_METRICS.flaggedWallets}
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Anomalous nodes</span>
                </div>

                <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                    Flagged IPs
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100 mt-1">
                    {DASHBOARD_METRICS.flaggedIps}
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Tor/VPN relays</span>
                </div>

                <div className="p-3.5 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/30">
                  <div className="text-[10px] uppercase font-bold text-blue-800 dark:text-blue-300">
                    Risk Alerts
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-blue-700 dark:text-blue-400 mt-1">
                    {DASHBOARD_METRICS.riskAlerts} Critical
                  </div>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">Requires action</span>
                </div>

                <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 col-span-2 sm:col-span-1">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500">
                    Countries
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-zinc-950 dark:text-zinc-100 mt-1">
                    {DASHBOARD_METRICS.countriesCount} Identified
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Cross-border hops</span>
                </div>
              </div>

              {/* Charts Row: Line Chart + Bar Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Line Chart */}
                <div className="lg:col-span-7 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      Transaction Volume & Anomaly Spikes
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">24-Hour Window</span>
                  </div>

                  <div className="h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={TIMELINE_VOLUME_DATA}>
                        <XAxis
                          dataKey="time"
                          stroke={isDark ? "#71717a" : "#71717a"}
                          fontSize={10}
                          tickLine={false}
                        />
                        <YAxis stroke={isDark ? "#71717a" : "#71717a"} fontSize={10} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDark ? "#18181b" : "#ffffff",
                            borderColor: isDark ? "#27272a" : "#e4e4e7",
                            color: isDark ? "#f4f4f5" : "#09090b",
                            fontSize: "11px",
                            fontFamily: "monospace",
                            borderRadius: "6px"
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="suspiciousTx"
                          name="Suspicious TXs"
                          stroke="#2563eb"
                          strokeWidth={2}
                          dot={{ r: 3 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="anomalyScore"
                          name="Threat Score %"
                          stroke={isDark ? "#f4f4f5" : "#18181b"}
                          strokeWidth={1.5}
                          strokeDasharray="4 4"
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center space-x-6 text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      Suspicious Volume (BTC)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                      Composite Threat Index
                    </span>
                  </div>
                </div>

                {/* Bar Chart: Country Breakdown */}
                <div className="lg:col-span-5 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      Top High-Risk Jurisdictions
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Alerts Count</span>
                  </div>

                  <div className="h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={COUNTRY_DISTRIBUTION_DATA} layout="vertical">
                        <XAxis type="number" stroke={isDark ? "#71717a" : "#71717a"} fontSize={9} />
                        <YAxis
                          type="category"
                          dataKey="country"
                          stroke={isDark ? "#71717a" : "#71717a"}
                          fontSize={9}
                          width={85}
                          tickLine={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDark ? "#18181b" : "#ffffff",
                            borderColor: isDark ? "#27272a" : "#e4e4e7",
                            color: isDark ? "#f4f4f5" : "#09090b",
                            fontSize: "11px",
                            fontFamily: "monospace",
                            borderRadius: "6px"
                          }}
                        />
                        <Bar dataKey="alerts" fill={isDark ? "#3b82f6" : "#18181b"} radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center font-mono">
                    Correlated via Tor exit relays & ISP autonomous systems
                  </p>
                </div>
              </div>

              {/* Wallet Graph & Alert Distribution Donut */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Interactive Subgraph View */}
                <div className="lg:col-span-8 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Network className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        Live Subgraph Inspector (Target Focus)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                      Depth: 3 Hops
                    </span>
                  </div>

                  {/* SVG Node Graph */}
                  <div className="h-56 bg-zinc-50/50 dark:bg-zinc-950/70 rounded border border-zinc-200 dark:border-zinc-800 p-2 overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 740 260" className="w-full h-full">
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
                              stroke={isDark ? "#52525b" : "#a1a1aa"}
                              strokeWidth="1.5"
                            />
                            <text
                              x={(src.x + dst.x) / 2}
                              y={(src.y + dst.y) / 2 - 4}
                              fontSize="8"
                              fill={isDark ? "#a1a1aa" : "#71717a"}
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
                        return (
                          <g
                            key={node.id}
                            transform={`translate(${node.x}, ${node.y})`}
                            className="cursor-pointer"
                          >
                            <circle
                              r={isTarget ? "18" : "14"}
                              fill={
                                isTarget
                                  ? (isDark ? "#09090b" : "#18181b")
                                  : (isDark ? "#18181b" : "#ffffff")
                              }
                              stroke={
                                isTarget
                                  ? (isDark ? "#60a5fa" : "#2563eb")
                                  : (isDark ? "#52525b" : "#71717a")
                              }
                              strokeWidth={isTarget ? "2.5" : "1.5"}
                            />
                            <text
                              textAnchor="middle"
                              dy="4"
                              fontSize="8"
                              fontWeight="bold"
                              fill={
                                isTarget
                                  ? "#ffffff"
                                  : (isDark ? "#f4f4f5" : "#18181b")
                              }
                              fontFamily="monospace"
                            >
                              {node.risk > 0 ? `${node.risk}%` : "V"}
                            </text>
                            <text
                              textAnchor="middle"
                              dy="24"
                              fontSize="7.5"
                              fill={isDark ? "#e4e4e7" : "#27272a"}
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              {node.label.split(" ")[0]}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span>Target node: 3J98t1... (92% Risk)</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Hop Velocity: &lt; 90s</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="lg:col-span-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
                    Alerts By Laundering Type
                  </span>

                  <div className="space-y-2 pt-1">
                    {ALERT_CATEGORY_DATA.map((cat) => (
                      <div key={cat.name} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-zinc-700 dark:text-zinc-300">{cat.name}</span>
                          <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                            {cat.count} ({cat.percentage})
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden">
                          <div
                            className="h-full bg-zinc-900 dark:bg-zinc-100 rounded"
                            style={{ width: cat.percentage }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono text-center">
                    Total: 72 Prioritized Threats
                  </div>
                </div>
              </div>

              {/* Searchable / Filterable Alert Table */}
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center space-x-2">
                    <ShieldAlert className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      Investigative Priority Alerts ({filteredAlerts.length})
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Search input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 absolute left-2.5 top-2" />
                      <input
                        type="text"
                        placeholder="Search wallet, category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 pr-3 py-1 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono"
                      />
                    </div>

                    {/* Threat Filter */}
                    <select
                      value={selectedThreatFilter}
                      onChange={(e) => setSelectedThreatFilter(e.target.value)}
                      className="px-2 py-1 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-mono"
                    >
                      <option value="ALL">All Threats</option>
                      <option value="CRITICAL">CRITICAL</option>
                      <option value="HIGH">HIGH</option>
                      <option value="MEDIUM">MEDIUM</option>
                    </select>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase text-[10px]">
                      <tr>
                        <th className="py-2 px-3">Alert ID</th>
                        <th className="py-2 px-3">Wallet Address</th>
                        <th className="py-2 px-3">Threat Tier</th>
                        <th className="py-2 px-3">Risk</th>
                        <th className="py-2 px-3">Volume</th>
                        <th className="py-2 px-3">Category</th>
                        <th className="py-2 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {filteredAlerts.map((alert) => (
                        <tr
                          key={alert.id}
                          onClick={() => setSelectedAlert(alert)}
                          className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"
                        >
                          <td className="py-2.5 px-3 font-bold text-zinc-900 dark:text-zinc-100">
                            {alert.id}
                          </td>
                          <td className="py-2.5 px-3 text-zinc-700 dark:text-zinc-300 truncate max-w-[140px]">
                            {alert.shortWallet}
                          </td>
                          <td className="py-2.5 px-3">
                            <span
                              className={`text-[9px] px-2 py-0.5 rounded font-bold border ${
                                alert.threatLevel === "CRITICAL"
                                  ? "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300"
                                  : alert.threatLevel === "HIGH"
                                  ? "border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300"
                                  : "border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                              }`}
                            >
                              {alert.threatLevel}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-bold text-zinc-950 dark:text-zinc-100">
                            {alert.riskScore}%
                          </td>
                          <td className="py-2.5 px-3 text-zinc-700 dark:text-zinc-300">
                            {alert.volumeBtc.toFixed(2)} BTC
                          </td>
                          <td className="py-2.5 px-3 text-zinc-600 dark:text-zinc-400 truncate max-w-[150px]">
                            {alert.category}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedAlert(alert);
                              }}
                              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                            >
                              Inspect →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Alert Inspection */}
        {selectedAlert && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-300 dark:border-zinc-800 shadow-2xl max-w-xl w-full overflow-hidden animate-fade-in text-zinc-900 dark:text-zinc-100">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold">
                    Forensic Alert Dossier // {selectedAlert.id}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="text-zinc-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 font-mono">
                    Subject Wallet Address
                  </div>
                  <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-1 break-all">
                    {selectedAlert.wallet}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Threat Tier</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      {selectedAlert.threatLevel}
                    </div>
                  </div>
                  <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Risk Score</div>
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                      {selectedAlert.riskScore}%
                    </div>
                  </div>
                  <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Volume</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      {selectedAlert.volumeBtc} BTC
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2">
                    Forensic Evidence Checklist
                  </div>
                  <ul className="space-y-1.5">
                    {selectedAlert.reasons.map((r, i) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start space-x-2 p-2 rounded border border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Cluster: {selectedAlert.entityCluster}
                </span>
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="px-4 py-1.5 text-xs font-bold rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
