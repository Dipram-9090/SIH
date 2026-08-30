"use client";

import React, { useState } from "react";
import { Cpu, Network, ShieldAlert, Sliders, CheckCircle2, Calculator, Layers, Binary } from "lucide-react";

export function AiDetectionSection() {
  // Interactive Risk Score Calculator Weights & Inputs
  const [anomalyValue, setAnomalyValue] = useState<number>(85); // 0-100
  const [graphCentrality, setGraphCentrality] = useState<number>(75); // 0-100
  const [heuristicScore, setHeuristicScore] = useState<number>(90); // 0-100

  // 40% ML + 25% Graph + 35% Heuristics
  const calculatedRisk = Math.round(
    anomalyValue * 0.4 + graphCentrality * 0.25 + heuristicScore * 0.35
  );

  return (
    <section id="ai-detection" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 09 // Machine Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            AI Detection Section
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Multi-model unsupervised machine learning architecture combining tree anomaly isolation, density spatial clustering, and graph topological features to score suspicious Bitcoin entities.
          </p>
        </div>

        {/* 3 Core AI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Isolation Forest */}
          <div className="p-6 rounded-lg border border-zinc-300 bg-white shadow-sm flex flex-col justify-between hover:border-zinc-500 transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded border border-zinc-300 bg-zinc-100 flex items-center justify-center text-zinc-800">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950">
                    Isolation Forest
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-700">
                  Unsupervised
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-600">
                  Purpose: Find anomalous wallets.
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Isolates abnormal wallet behavior by recursively partitioning feature dimensions (velocity, sudden volume spikes, hop latencies). Anomalies require significantly fewer splits to isolate than normal benign nodes.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100 space-y-1 text-[11px] text-zinc-500 font-mono">
              <div className="flex justify-between">
                <span>Contamination:</span>
                <span className="text-zinc-900 font-bold">5% (0.05)</span>
              </div>
              <div className="flex justify-between">
                <span>Output:</span>
                <span className="text-zinc-900">Decision Value [-0.5, 0.5]</span>
              </div>
            </div>
          </div>

          {/* Card 2: DBSCAN */}
          <div className="p-6 rounded-lg border border-zinc-300 bg-white shadow-sm flex flex-col justify-between hover:border-zinc-500 transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded border border-zinc-300 bg-zinc-100 flex items-center justify-center text-zinc-800">
                    <Network className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950">
                    DBSCAN
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-700">
                  Density Cluster
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-600">
                  Purpose: Cluster suspicious entities.
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Density-Based Spatial Clustering of Applications with Noise automatically groups co-spending addresses and interconnected laundering syndicates without requiring a predetermined cluster count (k).
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100 space-y-1 text-[11px] text-zinc-500 font-mono">
              <div className="flex justify-between">
                <span>Epsilon (eps):</span>
                <span className="text-zinc-900 font-bold">0.75</span>
              </div>
              <div className="flex justify-between">
                <span>Min Samples:</span>
                <span className="text-zinc-900 font-bold">3 Core Nodes</span>
              </div>
            </div>
          </div>

          {/* Card 3: Graph Features */}
          <div className="p-6 rounded-lg border border-zinc-300 bg-white shadow-sm flex flex-col justify-between hover:border-zinc-500 transition-all">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded border border-zinc-300 bg-zinc-100 flex items-center justify-center text-zinc-800">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-950">
                    Graph Features
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-700">
                  NetworkX
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-600">
                  Purpose: Use graph metrics to improve predictions.
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Computes topological signals including PageRank, Betweenness Centrality, In/Out degree divergence, and Reciprocity. Distinguishes high-throughput merchant addresses from obfuscated peel chains.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100 space-y-1 text-[11px] text-zinc-500 font-mono">
              <div className="flex justify-between">
                <span>Metrics Count:</span>
                <span className="text-zinc-900 font-bold">12 Centrality Features</span>
              </div>
              <div className="flex justify-between">
                <span>Engine:</span>
                <span className="text-zinc-900">NetworkX Graph Theory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Combine All Into: Final Risk Score (Interactive Formula & Sandbox) */}
        <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
          <div className="p-5 border-b border-zinc-200 bg-zinc-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <Calculator className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-zinc-950">
                Combined Final Risk Score Formula
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-600">
              Risk = (0.40 × ML_Anomaly) + (0.25 × Graph_Centrality) + (0.35 × Heuristic_Rules)
            </span>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-800">1. Isolation Forest Anomaly (40% Weight)</span>
                  <span className="text-blue-600 font-mono">{anomalyValue}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={anomalyValue}
                  onChange={(e) => setAnomalyValue(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <span className="text-[11px] text-zinc-500 block">
                  Captures velocity bursts, volume outliers, and atypical transaction timing.
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-800">2. Graph Centrality & Peel Ratio (25% Weight)</span>
                  <span className="text-blue-600 font-mono">{graphCentrality}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={graphCentrality}
                  onChange={(e) => setGraphCentrality(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <span className="text-[11px] text-zinc-500 block">
                  Evaluates PageRank concentration, betweenness bridging, and peel chain splits.
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-800">3. Forensic Heuristics & GeoIP (35% Weight)</span>
                  <span className="text-blue-600 font-mono">{heuristicScore}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={heuristicScore}
                  onChange={(e) => setHeuristicScore(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <span className="text-[11px] text-zinc-500 block">
                  Tor exit node matches, VPN broadcaster flags, and proximity to darknet markets.
                </span>
              </div>
            </div>

            {/* Right: Calculated Risk Output Card */}
            <div className="lg:col-span-5 p-6 rounded-lg border border-zinc-300 bg-zinc-50/50 flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-mono">
                Computed Threat Level
              </span>
              <div className="text-4xl sm:text-5xl font-bold font-mono text-zinc-950">
                {calculatedRisk}%
              </div>
              <div
                className={`text-xs font-bold font-mono px-3 py-1 rounded border ${
                  calculatedRisk >= 80
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : calculatedRisk >= 60
                    ? "border-zinc-400 bg-zinc-200 text-zinc-900"
                    : "border-zinc-300 bg-white text-zinc-700"
                }`}
              >
                {calculatedRisk >= 80
                  ? "CRITICAL THREAT PRIORITY"
                  : calculatedRisk >= 60
                  ? "HIGH RISK FLAGGED"
                  : calculatedRisk >= 40
                  ? "MODERATE SUSPICION"
                  : "LOW / BENIGN"}
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs">
                {calculatedRisk >= 80
                  ? "Immediate warrant recommendation triggered. Direct evidence of multi-hop money laundering."
                  : "Within normal heuristic bounds. Continued automated background indexing."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
