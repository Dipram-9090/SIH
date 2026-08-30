"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, FileText, Download, Copy, CheckCircle2, Info, Eye, ExternalLink } from "lucide-react";

export function ExplainableAiSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"alert" | "shap" | "court">("alert");

  const walletAddress = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy";

  const reasons = [
    "High transaction frequency (18.4 tx/hr vs network median 0.2)",
    "Large outgoing amount (482.50 BTC drained in 4 hours)",
    "Connected to suspicious darknet wallet (1-hop link)",
    "Multiple IP addresses across 4 jurisdictions (DE, RU, SC, PA)",
    "Rapid transaction chain (Peel ratio 0.94 / sub-90s hop latency)"
  ];

  const shapFeatures = [
    { feature: "Transaction Velocity (tx/hr)", weight: "+34%", positive: true },
    { feature: "Peel Chain Ratio", weight: "+28%", positive: true },
    { feature: "Tor / Relay IP Diversity", weight: "+18%", positive: true },
    { feature: "Darknet Node Proximity", weight: "+12%", positive: true },
    { feature: "Lifespan in Blocks (<10)", weight: "+8%", positive: true }
  ];

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="explainability" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 10 // Explainable AI (XAI)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Explainable AI Alert
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Black-box machine learning is inadmissible in courts of law. Our Explainable AI engine provides full transparency with human-readable reason checklists and mathematical feature attributions.
          </p>
        </div>

        {/* 2-Column: Flagged Wallet Alert Card + XAI Inspector Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flagged Alert Card (Exact Specification) */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border-2 border-zinc-900 bg-white shadow-md overflow-hidden">
              {/* Header Badge */}
              <div className="p-4 border-b border-zinc-200 bg-zinc-900 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Forensic Alert // Threat Level: Critical
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                  ID: ALT-9041
                </span>
              </div>

              {/* Alert Body */}
              <div className="p-6 space-y-6">
                {/* Subject Wallet */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 font-mono">
                    Subject Wallet
                  </div>
                  <div className="mt-1 flex items-center justify-between p-2.5 rounded border border-zinc-200 bg-zinc-50">
                    <span className="font-mono text-xs font-bold text-zinc-900 truncate mr-2">
                      {walletAddress}
                    </span>
                    <button
                      onClick={handleCopyWallet}
                      className="p-1 rounded text-zinc-500 hover:text-zinc-900 shrink-0"
                      title="Copy Address"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Risk Score & Confidence Strip */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/70">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                      Risk Score
                    </div>
                    <div className="text-3xl font-bold font-mono text-zinc-950 mt-1">
                      92%
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-0.5 block">
                      Ensemble ML + Graph
                    </span>
                  </div>

                  <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/70">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                      Confidence
                    </div>
                    <div className="text-3xl font-bold font-mono text-blue-600 mt-1">
                      92%
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-0.5 block">
                      Evidence Convergence
                    </span>
                  </div>
                </div>

                {/* Checklist of Reasons */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3 flex items-center justify-between">
                    <span>Evidence Reasons</span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      5 Flags Triggered
                    </span>
                  </div>

                  <div className="space-y-2">
                    {reasons.map((reason, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 p-2.5 rounded border border-zinc-200 bg-white"
                      >
                        <div className="w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[9px] shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <span className="text-xs text-zinc-800 leading-snug">
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Status: Active Triage</span>
                <button
                  onClick={() => setActiveTab("court")}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Generate Judicial Dossier →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive XAI Breakdown & Evidence Audit */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
              {/* Tab Selector */}
              <div className="flex border-b border-zinc-200 bg-zinc-50">
                <button
                  onClick={() => setActiveTab("alert")}
                  className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${
                    activeTab === "alert"
                      ? "border-blue-600 text-blue-600 bg-white"
                      : "border-transparent text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  SHAP Feature Weights
                </button>
                <button
                  onClick={() => setActiveTab("court")}
                  className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${
                    activeTab === "court"
                      ? "border-blue-600 text-blue-600 bg-white"
                      : "border-transparent text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Court Evidence Dossier
                </button>
              </div>

              {/* Tab 1: SHAP Feature Weights */}
              {activeTab === "alert" && (
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Mathematical Attribution (TreeSHAP)
                    </h4>
                    <p className="text-xs text-zinc-600">
                      Shows how much each individual behavioral metric pushed the prediction above the baseline benign threshold (0%).
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {shapFeatures.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-800">{item.feature}</span>
                          <span className="font-mono font-bold text-zinc-900">
                            {item.weight}
                          </span>
                        </div>
                        {/* Bar */}
                        <div className="h-2 w-full bg-zinc-100 rounded overflow-hidden">
                          <div
                            className="h-full bg-zinc-900 rounded"
                            style={{
                              width: item.weight.replace("+", "").replace("%", "") + "%"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded border border-zinc-200 bg-zinc-50 text-[11px] text-zinc-600 leading-relaxed mt-4">
                    <span className="font-bold text-zinc-900">Statistical Guarantee:</span> SHAP values sum exactly to the discrepancy between base model expectation and target wallet risk score.
                  </div>
                </div>
              )}

              {/* Tab 2: Court Evidence Dossier */}
              {activeTab === "court" && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Judicial Evidentiary Summary
                      </h4>
                      <p className="text-xs text-zinc-600 mt-0.5">
                        Exportable forensic affidavit draft for cyber prosecution.
                      </p>
                    </div>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      Export PDF
                    </button>
                  </div>

                  <div className="p-4 rounded border border-zinc-200 bg-zinc-50/50 font-mono text-[11px] text-zinc-800 space-y-2 leading-relaxed">
                    <div className="font-bold pb-1 border-b border-zinc-200 text-zinc-950">
                      REPORT CASE REF: #SIH-2026-BTC-9041
                    </div>
                    <div>SUBJECT: Bitcoin Address {walletAddress}</div>
                    <div>DETECTED ANOMALY: Multi-hop Peel Chain Laundering with Mixer Convergence</div>
                    <div>AGGREGATE RISK: 92.4% (Critical Level)</div>
                    <div>EVIDENTIARY HASH (SHA-256): e3b0c44298fc1c149afbf4c8996fb92427ae...</div>
                    <div className="pt-2 text-zinc-600 font-sans text-xs">
                      &quot;Based on graph traversal analysis and unsupervised isolation metrics, Subject Wallet 3J98... exhibited anomalous outbound volume (482.5 BTC) across 18 transactions per hour, routing through known privacy relays in Germany and Russia. Recommended for statutory exchange freezing.&quot;
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
