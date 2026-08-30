"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Activity } from "lucide-react";

export function HeroSection() {
  const [selectedNode, setSelectedNode] = useState<string | null>("node3");

  const nodes = [
    {
      id: "node1",
      label: "Wallet 1A1z... (Victim)",
      shortLabel: "Victim",
      badge: "0%",
      x: 65,
      y: 90,
      type: "victim",
      btc: "50.00 BTC",
      risk: "0% Normal",
      desc: "Defrauded victim wallet address where funds were initially stolen."
    },
    {
      id: "node2",
      label: "Wallet 34xp... (Hop 1)",
      shortLabel: "Hop 1",
      badge: "68%",
      x: 195,
      y: 90,
      type: "hop",
      btc: "50.00 BTC",
      risk: "68% High",
      desc: "First criminal laundering hop after theft; initiates rapid splitting into parallel paths."
    },
    {
      id: "node4",
      label: "Wallet bc1q... (Hop 2)",
      shortLabel: "Hop 2",
      badge: "74%",
      x: 325,
      y: 40,
      type: "hop",
      btc: "25.00 BTC",
      risk: "74% High",
      desc: "Secondary laundering wallet used to increase transaction distance and obscurity."
    },
    {
      id: "node3",
      label: "Wallet 3J98... (Mixer Hub)",
      shortLabel: "Mixer Hub",
      badge: "92%",
      x: 440,
      y: 90,
      type: "target",
      btc: "48.50 BTC",
      risk: "92% Critical",
      desc: "Central aggregation wallet receiving multiple laundering paths (Hop 1 & Hop 2) before redistribution."
    },
    {
      id: "node5",
      label: "Wallet 1Feex... (Dark Market)",
      shortLabel: "Dark Market",
      badge: "95%",
      x: 580,
      y: 40,
      type: "dark",
      btc: "25.00 BTC",
      risk: "95% Critical",
      desc: "Known illicit destination receiving laundered funds inside darknet marketplace."
    },
    {
      id: "node6",
      label: "Wallet 3D2o... (Exchange KYC)",
      shortLabel: "Exchange",
      badge: "32%",
      x: 580,
      y: 140,
      type: "exchange",
      btc: "23.50 BTC",
      risk: "32% Medium",
      desc: "Regulated exchange receiving suspicious deposits for cash-out (not inherently criminal)."
    }
  ];

  const edges = [
    {
      id: "e1",
      from: "node1",
      to: "node2",
      d: "M 65 90 L 195 90",
      dur: "2.2s",
      begin: "0s",
      label: "Initial Theft (50 BTC)"
    },
    {
      id: "e2",
      from: "node2",
      to: "node4",
      d: "M 195 90 C 235 60, 275 45, 325 40",
      dur: "2.0s",
      begin: "0.7s",
      label: "Laundering Split (25 BTC)"
    },
    {
      id: "e3",
      from: "node2",
      to: "node3",
      d: "M 195 90 C 260 145, 370 145, 440 90",
      dur: "2.4s",
      begin: "0.7s",
      label: "Direct Deposit (25 BTC)"
    },
    {
      id: "e4",
      from: "node4",
      to: "node3",
      d: "M 325 40 C 375 45, 410 65, 440 90",
      dur: "2.0s",
      begin: "1.4s",
      label: "Hop 2 Forwarding (24.5 BTC)"
    },
    {
      id: "e5",
      from: "node3",
      to: "node5",
      d: "M 440 90 C 485 65, 525 45, 580 40",
      dur: "2.2s",
      begin: "2.0s",
      label: "Illicit Spending (25 BTC)"
    },
    {
      id: "e6",
      from: "node3",
      to: "node6",
      d: "M 440 90 C 485 115, 525 135, 580 140",
      dur: "2.2s",
      begin: "2.0s",
      label: "KYC Cash-out (23.5 BTC)"
    }
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[3];

  return (
    <section id="hero" className="relative pt-12 pb-20 border-b border-zinc-200 bg-white">
      {/* Background Dot Pattern */}
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
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
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
                  viewBox="0 0 650 185"
                  className="w-full h-auto select-none overflow-visible"
                >
                  <defs>
                    {/* Default Arrow Marker */}
                    <marker
                      id="arrow-default"
                      viewBox="0 0 10 10"
                      refX="22"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#71717a" />
                    </marker>

                    {/* Active Highlight Arrow Marker */}
                    <marker
                      id="arrow-active"
                      viewBox="0 0 10 10"
                      refX="22"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb" />
                    </marker>

                    {/* Muted Arrow Marker */}
                    <marker
                      id="arrow-muted"
                      viewBox="0 0 10 10"
                      refX="22"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#d4d4d8" />
                    </marker>
                  </defs>

                  {/* Directed Edges */}
                  {edges.map((edge) => {
                    const isOutgoing = selectedNode === edge.from;
                    const isIncoming = selectedNode === edge.to;
                    const isConnected = isOutgoing || isIncoming;
                    const hasSelection = selectedNode !== null;

                    let strokeColor = "#71717a";
                    let strokeWidth = 1.5;
                    let strokeDash = "3,3";
                    let markerId = "arrow-default";

                    if (hasSelection) {
                      if (isConnected) {
                        strokeColor = "#2563eb";
                        strokeWidth = 2.2;
                        strokeDash = "none";
                        markerId = "arrow-active";
                      } else {
                        strokeColor = "#e4e4e7";
                        strokeWidth = 1.2;
                        strokeDash = "3,3";
                        markerId = "arrow-muted";
                      }
                    }

                    return (
                      <g key={edge.id}>
                        {/* Static Path */}
                        <path
                          id={`path-${edge.id}`}
                          d={edge.d}
                          fill="none"
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          strokeDasharray={strokeDash}
                          markerEnd={`url(#${markerId})`}
                          className="transition-all duration-300"
                        />

                        {/* Animated Flowing Bitcoin Transaction Packet */}
                        <circle
                          r={isConnected ? "3.5" : "2.8"}
                          fill={isConnected ? "#2563eb" : "#71717a"}
                          opacity={hasSelection && !isConnected ? "0.2" : "0.9"}
                        >
                          <animateMotion
                            dur={edge.dur}
                            begin={edge.begin}
                            repeatCount="indefinite"
                            path={edge.d}
                          />
                        </circle>
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  {nodes.map((n) => {
                    const isSelected = selectedNode === n.id;
                    const isTarget = n.id === "node3";

                    return (
                      <g
                        key={n.id}
                        transform={`translate(${n.x}, ${n.y})`}
                        onClick={() => setSelectedNode(n.id)}
                        className="cursor-pointer group"
                      >
                        {/* Ping pulse for high risk target */}
                        {isTarget && (
                          <circle
                            r="22"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="1"
                            className="animate-ping opacity-30 pointer-events-none"
                          />
                        )}

                        {/* Outer Glow Ring on Selection */}
                        {isSelected && (
                          <circle
                            r="20"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="1.5"
                            strokeDasharray="2,2"
                            className="animate-spin-slow opacity-60 pointer-events-none"
                          />
                        )}

                        {/* Outer Circle */}
                        <circle
                          r={isSelected ? "17" : "15"}
                          fill={isTarget ? "#18181b" : isSelected ? "#f4f4f5" : "#ffffff"}
                          stroke={isTarget ? "#2563eb" : isSelected ? "#2563eb" : "#71717a"}
                          strokeWidth={isSelected ? "2.5" : "1.5"}
                          className="transition-all duration-200 group-hover:stroke-blue-600"
                        />

                        {/* Inner Node Text / Symbol */}
                        <text
                          textAnchor="middle"
                          dy="3.5"
                          fontSize="8.5"
                          fontWeight="bold"
                          fill={isTarget ? "#ffffff" : isSelected ? "#2563eb" : "#18181b"}
                          fontFamily="monospace"
                        >
                          {n.id === "node1"
                            ? "V"
                            : n.id === "node2"
                            ? "H1"
                            : n.id === "node4"
                            ? "H2"
                            : n.id === "node3"
                            ? "HUB"
                            : n.id === "node5"
                            ? "DM"
                            : "KYC"}
                        </text>

                        {/* Node Label Below */}
                        <text
                          textAnchor="middle"
                          dy="27"
                          fontSize="8.5"
                          fontWeight={isSelected ? "bold" : "600"}
                          fill={isSelected ? "#2563eb" : "#27272a"}
                          fontFamily="monospace"
                        >
                          {n.shortLabel}
                        </text>

                        {/* Risk Score Pill Text */}
                        <text
                          textAnchor="middle"
                          dy="37"
                          fontSize="7.5"
                          fontWeight="500"
                          fill="#71717a"
                          fontFamily="monospace"
                        >
                          {n.badge}
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
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${
                    activeNodeData.risk.includes("Critical")
                      ? "border-red-300 bg-red-50 text-red-700"
                      : activeNodeData.risk.includes("High")
                      ? "border-amber-300 bg-amber-50 text-amber-800"
                      : activeNodeData.risk.includes("Medium")
                      ? "border-blue-300 bg-blue-50 text-blue-700"
                      : "border-zinc-300 bg-zinc-100 text-zinc-800"
                  }`}>
                    Risk: {activeNodeData.risk}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-600">
                  <span className="font-mono font-semibold">Balance: {activeNodeData.btc}</span>
                  <span className="text-zinc-500 truncate max-w-[320px]">{activeNodeData.desc}</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-[11px] text-zinc-500 mt-2 text-center">
              Click any wallet node to trace incoming/outgoing transaction paths, laundering depth, and AI risk scores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

