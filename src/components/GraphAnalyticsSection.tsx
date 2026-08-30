"use client";

import React, { useState } from "react";
import { ArrowRight, CircleDot } from "lucide-react";

interface SampleNode {
  id: string;
  name: string;
  type: "wallet" | "tx";
  balance?: string;
  amount?: string;
  role: string;
  risk: number;
}

export function GraphAnalyticsSection() {
  const [selectedElement, setSelectedElement] = useState<SampleNode>({
    id: "w2",
    name: "Wallet 3J98... (Mule Hub)",
    type: "wallet",
    balance: "23.90 BTC",
    role: "Peel Chain Intermediate Structuring Node",
    risk: 92
  });

  return (
    <section id="graph-analytics" className="py-20 scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 08 // Topological Graph Modeling
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Graph Analytics Engine
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Modeling Bitcoin blockchain ledgers as directed multi-graphs: how wallets act as vertices, transactions act as weighted hyper-edges, and topological centrality reveals money laundering syndicates.
          </p>
        </div>

        {/* Fundamental Flow Representation */}
        <div className="mb-12 p-6 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
            Bipartite & Directed Graph Flow Architecture
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-center">
            {/* Wallet 1 */}
            <div
              onClick={() =>
                setSelectedElement({
                  id: "w1",
                  name: "Genesis Wallet (Victim)",
                  type: "wallet",
                  balance: "50.00 BTC",
                  role: "Defrauded Victim Address",
                  risk: 0
                })
              }
              className="cursor-pointer flex-1 min-w-[130px] p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">Node (Vertex)</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-1">Wallet 1</div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Genesis Origin</div>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0 hidden sm:inline" />

            {/* Transaction 1 */}
            <div
              onClick={() =>
                setSelectedElement({
                  id: "tx1",
                  name: "TX #894101 (Fan-Out TX)",
                  type: "tx",
                  amount: "50.00 BTC",
                  role: "1 Input -> 2 Outputs Structuring Split",
                  risk: 65
                })
              }
              className="cursor-pointer flex-1 min-w-[130px] p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">Directed Edge</div>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">Transaction A</div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">50.0 BTC Structuring</div>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0 hidden sm:inline" />

            {/* Wallet 2 */}
            <div
              onClick={() =>
                setSelectedElement({
                  id: "w2",
                  name: "Wallet 3J98... (Mule Hub)",
                  type: "wallet",
                  balance: "23.90 BTC",
                  role: "Peel Chain Intermediate Structuring Node",
                  risk: 92
                })
              }
              className="cursor-pointer flex-1 min-w-[130px] p-3 rounded-lg border border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/30 ring-1 ring-blue-600 dark:ring-blue-500 transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase font-bold">Node (Focus)</div>
              <div className="text-xs font-bold text-zinc-950 dark:text-zinc-100 mt-1">Wallet 2</div>
              <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5">Peel Chain Hub</div>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0 hidden sm:inline" />

            {/* Transaction 2 */}
            <div
              onClick={() =>
                setSelectedElement({
                  id: "tx2",
                  name: "TX #894108 (Mixer Ingress)",
                  type: "tx",
                  amount: "23.50 BTC",
                  role: "CoinJoin Mixing Pool Deposit",
                  risk: 88
                })
              }
              className="cursor-pointer flex-1 min-w-[130px] p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">Directed Edge</div>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">Transaction B</div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">23.5 BTC Peel</div>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0 hidden sm:inline" />

            {/* Wallet 3 */}
            <div
              onClick={() =>
                setSelectedElement({
                  id: "w3",
                  name: "Wallet 1Feex... (Exchange)",
                  type: "wallet",
                  balance: "142.50 BTC",
                  role: "Liquidation Off-Ramp Endpoint",
                  risk: 35
                })
              }
              className="cursor-pointer flex-1 min-w-[130px] p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">Node (Vertex)</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-1">Wallet 3</div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Exchange Off-Ramp</div>
            </div>
          </div>
        </div>

        {/* 2-Column: Concepts & Sample Graph Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Node & Edge Definitions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                <CircleDot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Nodes (Vertices)
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nodes represent individual cryptographic public key addresses or clustered wallet entities. Node attributes include balance, address type, first seen timestamp, PageRank centrality, and in/out transaction degrees.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Legacy (P2PKH)
                </span>
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Script Hash (P2SH)
                </span>
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Bech32 Native SegWit (P2WPKH)
                </span>
              </div>
            </div>

            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Edges (Directed Transfers)
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Edges represent confirmed Bitcoin transactions transferring value from inputs to outputs. Edge attributes capture transfer volume in BTC, block timestamps, fee-per-byte, and peel ratio classification.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Amount Satoshis
                </span>
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Temporal Velocity (Δt)
                </span>
                <span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                  Peel Indicator
                </span>
              </div>
            </div>

            {/* Centrality Metrics */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 text-xs text-zinc-700 dark:text-zinc-300 space-y-2">
              <div className="font-bold text-zinc-900 dark:text-zinc-100">Topological Heuristics:</div>
              <ul className="space-y-1.5 list-disc list-inside text-zinc-600 dark:text-zinc-400">
                <li><span className="font-semibold text-zinc-800 dark:text-zinc-200">PageRank:</span> Identifies primary laundering aggregation hubs with high cumulative inward flow.</li>
                <li><span className="font-semibold text-zinc-800 dark:text-zinc-200">Betweenness Centrality:</span> Pinpoints crucial intermediary bridge nodes linking disjoint clusters.</li>
                <li><span className="font-semibold text-zinc-800 dark:text-zinc-200">CIOH Heuristic:</span> Clusters multi-input addresses co-signed in a single transaction into unified entities.</li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Sample Graph Sandbox */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  Sample Graph Sandbox (NetworkX MultiDiGraph)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  4 Wallets / 3 Transfers
                </span>
              </div>

              {/* Visual Graph Diagram */}
              <div className="p-6 bg-zinc-50/30 dark:bg-zinc-950/60">
                <div className="h-48 relative border border-dashed border-zinc-200 dark:border-zinc-800 rounded flex items-center justify-around p-4">
                  {/* Node 1: Victim */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-zinc-800 dark:border-zinc-600 bg-white dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-900 dark:text-zinc-100 shadow-sm">
                      V
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">Victim</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center text-zinc-400 dark:text-zinc-500">
                    <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 font-bold">50 BTC</span>
                    <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-[8px] text-zinc-400 dark:text-zinc-500">&lt; 90s</span>
                  </div>

                  {/* Node 2: Peel Mule */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-zinc-900 dark:bg-zinc-950 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-4 ring-blue-50 dark:ring-blue-950/50">
                      92%
                    </div>
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold mt-1">Peel Hub</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center text-zinc-400 dark:text-zinc-500">
                    <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 font-bold">23.5 BTC</span>
                    <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-[8px] text-zinc-400 dark:text-zinc-500">Peel 1.5</span>
                  </div>

                  {/* Node 3: Exchange */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-sm">
                      EX
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">Exchange</span>
                  </div>
                </div>
              </div>

              {/* Element Inspector */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{selectedElement.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      selectedElement.risk >= 80
                        ? "border-zinc-900 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-800 text-white font-bold"
                        : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    Risk Score: {selectedElement.risk}%
                  </span>
                </div>
                <div className="pt-2 text-xs text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                  <span>Role: {selectedElement.role}</span>
                  <span className="font-mono">{selectedElement.balance || selectedElement.amount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
