"use client";

import React from "react";
import { XCircle, Clock, Search, Network, Database, ShieldCheck, Zap, FileText } from "lucide-react";

export function ProblemSolvingSection() {
  return (
    <section id="problem-solving" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 03 // Comparative Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            What Problem Are We Solving?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Transitioning cyber investigation units from error-prone manual ledger auditing to automated, graph-powered AI anomaly discovery.
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Manual Investigation (Problem) */}
          <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header Bar */}
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 flex items-center justify-center text-[8px] text-white font-bold">
                    ✕
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Manual Investigation
                  </h3>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Legacy Approach
                </span>
              </div>

              {/* Items List */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  Cyber police officers attempt to trace money by reading Excel spreadsheets and searching individual transaction hashes on public block explorers.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <XCircle className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Thousands of transactions</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        High volume of noise and micro-dust transactions overwhelms human cognitive capacity.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <Clock className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Time consuming</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Tracing a 10-hop peel chain takes 4 to 12 weeks of manual cross-referencing.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Hidden money trails</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        CoinJoin mixers and multi-input co-spending obscure the true beneficial owner.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <Network className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Difficult to correlate IPs and wallets</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        No automated correlation between relay network broadcaster IPs and wallet clusters.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
              <span>Detection Success Rate: Low (12-18%)</span>
              <span>Avg Case Triage: Weeks</span>
            </div>
          </div>

          {/* Card 2: AI Investigation Platform (Solution) */}
          <div className="rounded-lg border border-blue-600 dark:border-blue-500 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header Bar */}
              <div className="p-4 border-b border-blue-100 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">
                    ✓
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
                    AI Investigation Platform
                  </h3>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-blue-300 dark:border-blue-800 bg-white dark:bg-zinc-800 text-blue-700 dark:text-blue-300 font-bold">
                  Proposed SIH System
                </span>
              </div>

              {/* Items List */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  End-to-end automated platform that processes raw datasets into interactive multi-graph intelligence with explainable threat scores.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Upload dataset</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        One-click ingestion of CSV ledger dumps, blockchain node files, and network logs.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <Network className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Automatic graph creation</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Instant construction of multi-directed NetworkX graphs with node-edge topology.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">AI anomaly detection</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Isolation Forest flags abnormal velocity and DBSCAN clusters criminal syndicates.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Risk scoring & Explainable alerts</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        0-100% composite score backed by human-readable judicial reason checklists.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Investigation dashboard</div>
                      <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Searchable alert queue, interactive graph explorer, and one-click PDF case export.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="p-4 border-t border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/30 text-[11px] text-blue-900 dark:text-blue-200 font-bold flex items-center justify-between">
              <span>Detection Success Rate: High (&gt; 94%)</span>
              <span>Avg Case Triage: &lt; 5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
