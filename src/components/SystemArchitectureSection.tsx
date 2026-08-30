"use client";

import React, { useState } from "react";
import { ArrowDown, Layers, CheckCircle2, ChevronRight, Binary, Cpu, ShieldCheck, Database, FileSpreadsheet, Eye } from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  category: "Source" | "Pipeline" | "Analytics" | "AI" | "Presentation";
  desc: string;
  input: string;
  output: string;
  tech: string;
  keyAction: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "source",
    name: "CSV / JSON / XML",
    category: "Source",
    desc: "Raw ingested ledger data and telemetry from nodes, dumps, or forensic seizures.",
    input: "Raw forensic disk dumps, block transactions, mempool dumps",
    output: "Raw file stream buffer with SHA-256 integrity checksum",
    tech: "Multipart File Upload, aiofiles, SHA-256",
    keyAction: "Accepts heterogeneous multi-format blockchain transactions"
  },
  {
    id: "ingest",
    name: "Data Ingestion",
    category: "Pipeline",
    desc: "Asynchronous staging worker parsing raw records into structured memory chunks.",
    input: "Raw binary/text stream",
    output: "Staged raw tables with transaction IDs and raw scripts",
    tech: "FastAPI, Pydantic v2, Python asyncio",
    keyAction: "Validates headers, bounds checking, and rejects corrupted rows"
  },
  {
    id: "cleaning",
    name: "Data Cleaning",
    category: "Pipeline",
    desc: "Deconstructs UTXO inputs/outputs, normalizes satoshis to BTC, and enriches GeoIP.",
    input: "Staged raw tables",
    output: "Clean normalized relational DataFrame (wallets, hops, fees, IPs)",
    tech: "Pandas, NumPy, GeoIP2 MaxMind",
    keyAction: "Standardizes address formats, converts timestamps, maps relay IPs"
  },
  {
    id: "features",
    name: "Feature Engineering",
    category: "Analytics",
    desc: "Computes temporal velocity, peel chain ratios, and transaction burst indicators.",
    input: "Normalized transactions DataFrame",
    output: "High-dimensional feature matrix X for wallet behavior",
    tech: "NumPy, Pandas, Heuristic rule engine",
    keyAction: "Calculates hops per hour, fan-out ratios, and balance lifespans"
  },
  {
    id: "builder",
    name: "Graph Builder",
    category: "Analytics",
    desc: "Assembles directed multi-graph network representing all wallet interactions.",
    input: "Wallet addresses and directed transfer records",
    output: "NetworkX DiGraph object with vertex & edge properties",
    tech: "NetworkX, Common-Input Ownership Heuristics (CIOH)",
    keyAction: "Instantiates wallet nodes and weighted directed transfer edges"
  },
  {
    id: "analytics",
    name: "Graph Analytics",
    category: "Analytics",
    desc: "Executes topological algorithms: PageRank, Betweenness Centrality, and Reciprocity.",
    input: "NetworkX DiGraph object",
    output: "Graph centrality scores and shortest money path trails",
    tech: "NetworkX Centrality, Graph Traversal Algorithms",
    keyAction: "Measures influence of mixing hubs and money mule intermediaries"
  },
  {
    id: "ai_engine",
    name: "AI Detection Engine",
    category: "AI",
    desc: "Unsupervised machine learning algorithms detecting statistical outliers and clusters.",
    input: "Feature matrix X + Graph centrality metrics",
    output: "Isolation Forest anomaly scores (-1/1) + DBSCAN entity cluster IDs",
    tech: "Scikit-learn (Isolation Forest & DBSCAN), RobustScaler",
    keyAction: "Isolates high-dimensional anomaly wallets and groups syndicates"
  },
  {
    id: "xai_engine",
    name: "Explainability Engine",
    category: "AI",
    desc: "Extracts transparent feature attributions translating tree splits into plain English reasons.",
    input: "ML decision functions + Extracted wallet features",
    output: "Explainable checklist reasons and confidence percentage",
    tech: "SHAP (SHapley Additive exPlanations), Decision Tree audit",
    keyAction: "Produces human-readable justifications for law enforcement"
  },
  {
    id: "alerts",
    name: "Alert Prioritization",
    category: "AI",
    desc: "Computes 0-100% composite risk score and tiers alerts into priority queues.",
    input: "Anomaly scores, cluster labels, heuristic flags",
    output: "Prioritized threat queue (CRITICAL, HIGH, MEDIUM, LOW)",
    tech: "Ensemble Risk Scoring Math, PostgreSQL Queue",
    keyAction: "Combines 40% ML + 25% Graph + 35% Heuristics into final risk score"
  },
  {
    id: "dashboard",
    name: "Interactive Dashboard",
    category: "Presentation",
    desc: "Rich visual investigation workspace with node graphs, filters, and dossier export.",
    input: "Enriched alerts, graph subnets, and temporal timelines",
    output: "Interactive investigator UI and exportable court-ready PDF dossier",
    tech: "Next.js 14 App Router, Cytoscape.js, Recharts, Tailwind CSS",
    keyAction: "Empowers cyber police to drill into suspicious money trails"
  }
];

export function SystemArchitectureSection() {
  const [selectedId, setSelectedId] = useState<string>("ai_engine");
  const selectedNode = ARCH_NODES.find((n) => n.id === selectedId) || ARCH_NODES[6];

  return (
    <section id="architecture" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 04 // Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Complete System Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            The end-to-end dataflow pipeline transforming unstructured blockchain ledger logs into actionable, court-ready forensic intelligence.
          </p>
        </div>

        {/* 2-Column: Architecture Diagram Flow + Interactive Block Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flowchart */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm p-4 sm:p-6 space-y-2">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-200">
                <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">
                  Dataflow Architecture (10 Pipeline Blocks)
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  Click any block to inspect
                </span>
              </div>

              {ARCH_NODES.map((node, index) => {
                const isSelected = selectedId === node.id;
                const isAI = node.category === "AI" || node.category === "Analytics";

                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => setSelectedId(node.id)}
                      className={`cursor-pointer p-3 rounded-lg border transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/20 shadow-sm ring-1 ring-blue-600"
                          : "border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold font-mono border ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-zinc-100 text-zinc-700 border-zinc-300"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                            {node.name}
                            <span className="text-[9px] px-1.5 py-0.2 rounded border border-zinc-200 bg-zinc-100 text-zinc-600 uppercase font-mono">
                              {node.category}
                            </span>
                          </div>
                          <div className="text-[11px] text-zinc-500 mt-0.5 truncate max-w-[280px] sm:max-w-md">
                            {node.desc}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? "text-blue-600 translate-x-1" : "text-zinc-400"
                        }`}
                      />
                    </div>

                    {/* Arrow between nodes */}
                    {index < ARCH_NODES.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Block Inspector */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Component Inspector
                  </span>
                  <h3 className="text-sm font-bold text-zinc-950 mt-0.5">
                    {selectedNode.name}
                  </h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded border border-blue-200 bg-blue-50 text-blue-700 font-bold uppercase font-mono">
                  {selectedNode.category}
                </span>
              </div>

              {/* Details Body */}
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Description & Role
                  </label>
                  <p className="text-xs text-zinc-700 mt-1 leading-relaxed">
                    {selectedNode.desc}
                  </p>
                </div>

                <div className="p-3 rounded border border-zinc-200 bg-zinc-50/60 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-zinc-500">
                    Key Execution Action
                  </div>
                  <div className="text-xs font-semibold text-zinc-900">
                    {selectedNode.keyAction}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-zinc-400 block">
                      Input Contract:
                    </span>
                    <code className="text-[11px] block mt-0.5 p-2 rounded bg-zinc-100 text-zinc-800 border border-zinc-200 font-mono">
                      {selectedNode.input}
                    </code>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase text-zinc-400 block">
                      Output Artifact:
                    </span>
                    <code className="text-[11px] block mt-0.5 p-2 rounded bg-zinc-100 text-zinc-800 border border-zinc-200 font-mono">
                      {selectedNode.output}
                    </code>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase text-zinc-400 block">
                      Core Technology:
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {selectedNode.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] rounded border border-zinc-300 bg-white text-zinc-800 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-zinc-200 bg-zinc-50 text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Architecture Layer: {selectedNode.category}</span>
                <span className="font-mono text-zinc-700">SIH 2026 Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
