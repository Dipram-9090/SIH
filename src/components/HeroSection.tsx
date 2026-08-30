"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Layers, MapPin, Shield, Network, Activity, CheckCircle2, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [selectedNode, setSelectedNode] = useState<string | null>("node3");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: "node1", label: "Wallet 1A1z... (Victim)", x: 70, y: 70, type: "victim", btc: "50.00 BTC", risk: "0% Normal", desc: "Defrauded user wallet address in ransomware attack" },
    { id: "node2", label: "Wallet 34xp... (Hop 1)", x: 230, y: 40, type: "hop", btc: "25.00 BTC", risk: "68% High", desc: "Immediate splitting hop transferring funds in <90 sec" },
    { id: "node3", label: "Wallet 3J98... (Mixer Hub)", x: 410, y: 80, type: "target", btc: "23.90 BTC", risk: "92% Critical", desc: "Flagged high-risk peel chain hub with 18 tx/hr velocity" },
    { id: "node4", label: "Wallet bc1q... (Hop 2)", x: 230, y: 130, type: "hop", btc: "25.00 BTC", risk: "74% High", desc: "Parallel money mule intermediate hop" },
    { id: "node5", label: "Wallet 1Feex... (Dark Market)", x: 570, y: 40, type: "dark", btc: "12.50 BTC", risk: "95% Critical", desc: "Sanctioned entity linked to darknet bazaar off-ramp" },
    { id: "node6", label: "Wallet 3D2o... (Exchange KYC)", x: 570, y: 130, type: "exchange", btc: "11.40 BTC", risk: "32% Medium", desc: "Regulated exchange liquidation deposit address" }
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <section id="hero" className="relative pt-12 pb-20 border-b border-zinc-200 bg-white">
      {/* Background Dot Pattern (No Gradients) */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-zinc-300 bg-zinc-50 text-xs font-bold text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse-subtle" />
            Smart India Hackathon (SIH) 2026
          </span>
          <span className="text-xs text-zinc-500 hidden sm:inline border-l border-zinc-300 pl-3">
            Problem Statement: Cybercrime Investigation & AI Forensics
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Info */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              AI-Powered Bitcoin Transaction Investigation System
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              An educational walkthrough explaining how an AI-powered cyber investigation platform can detect suspicious Bitcoin transactions, cluster criminal entities and assist investigators through explainable AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Layers className="w-4 h-4" />
                Explore Architecture
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 hover:border-zinc-400 transition-colors"
              >
                <Activity className="w-4 h-4 text-zinc-700" />
                View Implementation Roadmap
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200">
              <div className="p-3 rounded border border-zinc-200 bg-zinc-50/50">
                <div className="text-[10px] text-zinc-500 uppercase font-bold">Detection Engine</div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">Isolation Forest</div>
              </div>
              <div className="p-3 rounded border border-zinc-200 bg-zinc-50/50">
                <div className="text-[10px] text-zinc-500 uppercase font-bold">Graph Analytics</div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">NetworkX + CIOH</div>
              </div>
              <div className="p-3 rounded border border-zinc-200 bg-zinc-50/50">
                <div className="text-[10px] text-zinc-500 uppercase font-bold">Explainability</div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">SHAP + Audit Trail</div>
              </div>
            </div>
          </div>

          {/* Right Visual: Minimal Illustration of Connected Wallets & Transactions */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
              {/* Card Header Bar */}
              <div className="px-4 py-3 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
                  <span className="text-xs font-bold text-zinc-800">
                    Live Bitcoin Subgraph Visualization (Forensic Simulation)
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded border border-zinc-200 bg-white text-zinc-600 font-mono">
                  Interactive Sandbox
                </span>
              </div>

              {/* Minimal SVG Node-Link Canvas */}
              <div className="p-4 bg-zinc-50/30">
                <svg
                  viewBox="0 0 660 180"
                  className="w-full h-auto select-none overflow-visible"
                >
                  {/* Grid Lines */}
                  <defs>
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="18"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#71717a" />
                    </marker>
                  </defs>

                  {/* Edges */}
                  {/* Node1 -> Node2 */}
                  <line x1="70" y1="70" x2="230" y2="40" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrow)" />
                  {/* Node1 -> Node4 */}
                  <line x1="70" y1="70" x2="230" y2="130" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrow)" />
                  {/* Node2 -> Node3 */}
                  <line x1="230" y1="40" x2="410" y2="80" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow)" />
                  {/* Node4 -> Node3 */}
                  <line x1="230" y1="130" x2="410" y2="80" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow)" />
                  {/* Node3 -> Node5 */}
                  <line x1="410" y1="80" x2="570" y2="40" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrow)" />
                  {/* Node3 -> Node6 */}
                  <line x1="410" y1="80" x2="570" y2="130" stroke="#18181b" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrow)" />

                  {/* Traveling Packet (Simulation) */}
                  <circle
                    cx={70 + ((230 - 70) * ((tick * 2) % 100)) / 100}
                    cy={70 + ((40 - 70) * ((tick * 2) % 100)) / 100}
                    r="3.5"
                    fill="#2563eb"
                  />
                  <circle
                    cx={230 + ((410 - 230) * (((tick + 30) * 2) % 100)) / 100}
                    cy={40 + ((80 - 40) * (((tick + 30) * 2) % 100)) / 100}
                    r="3.5"
                    fill="#2563eb"
                  />

                  {/* Nodes */}
                  {nodes.map((n) => {
                    const isSelected = selectedNode === n.id;
                    const isTarget = n.id === "node3";

                    return (
                      <g
                        key={n.id}
                        transform={`translate(${n.x}, ${n.y})`}
                        onClick={() => setSelectedNode(n.id)}
                        className="cursor-pointer"
                      >
                        {/* Ping pulse for high risk target */}
                        {isTarget && (
                          <circle
                            r="22"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="1"
                            className="animate-ping opacity-30"
                          />
                        )}
                        {/* Outer Circle */}
                        <circle
                          r={isSelected ? "18" : "15"}
                          fill={isTarget ? "#18181b" : isSelected ? "#f4f4f5" : "#ffffff"}
                          stroke={isTarget ? "#2563eb" : isSelected ? "#09090b" : "#71717a"}
                          strokeWidth={isSelected ? "2.5" : "1.5"}
                          className="transition-all"
                        />
                        {/* Inner Icon / Text */}
                        <text
                          textAnchor="middle"
                          dy="4"
                          fontSize="9"
                          fontWeight="bold"
                          fill={isTarget ? "#ffffff" : "#18181b"}
                          fontFamily="monospace"
                        >
                          {n.id === "node1" ? "V" : n.id === "node3" ? "92%" : n.id === "node5" ? "D" : n.id === "node6" ? "EX" : "W"}
                        </text>
                        {/* Node Label Below */}
                        <text
                          textAnchor="middle"
                          dy="28"
                          fontSize="8.5"
                          fontWeight={isSelected ? "bold" : "normal"}
                          fill="#27272a"
                          fontFamily="monospace"
                        >
                          {n.label.split(" ")[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Node Inspector Footer */}
              <div className="p-3 border-t border-zinc-200 bg-white">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-500">
                      Selected Node:
                    </span>
                    <span className="font-bold text-zinc-900">{activeNodeData.label}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold border border-zinc-300 bg-zinc-100 text-zinc-900">
                    Risk: {activeNodeData.risk}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-600">
                  <span>Balance: {activeNodeData.btc}</span>
                  <span className="text-zinc-500 truncate max-w-[280px]">{activeNodeData.desc}</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-[11px] text-zinc-500 mt-2 text-center">
              Click any node above to inspect wallet metadata, laundering hop depth, and AI risk score.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
