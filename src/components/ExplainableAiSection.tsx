"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Copy, Download } from "lucide-react";

export function ExplainableAiSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"alert" | "shap" | "court">("alert");

  const walletAddress = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy";

  const reasons = [
    "Extreme transaction velocity (18.4 tx/hr vs network baseline median 0.2 tx/hr)",
    "Anomalous outbound volume (482.50 BTC drained across 4 hours)",
    "Direct 1-hop topological link to high-risk obfuscation hub",
    "Multi-jurisdictional relay broadcaster IPs across 4 international routing nodes (DE, RU, SC, PA)",
    "High-ratio peel chain structure (Peel ratio 0.94 / sub-90s block propagation)"
  ];

  const shapFeatures = [
    { feature: "Transaction Velocity Delta (tx/hr)", weight: "+34%", positive: true },
    { feature: "Peel Chain Ratio Index", weight: "+28%", positive: true },
    { feature: "Tor / Relay Node IP Diversity", weight: "+18%", positive: true },
    { feature: "Sanctioned Entity Proximity", weight: "+12%", positive: true },
    { feature: "Ephemeral Address Lifespan (<10 Blocks)", weight: "+8%", positive: true }
  ];

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="explainability" className="py-20 scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 10 // Explainable AI (XAI) & Statutory Evidence Admissibility
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Explainable AI Forensic Intelligence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Black-box machine learning predictions are inadmissible under strict judicial scrutiny. Our Explainable AI engine provides complete transparency with human-readable reason checklists, mathematical feature attributions (TreeSHAP), and statutory compliance trails.
          </p>
        </div>

        {/* 2-Column: Flagged Wallet Alert Card + XAI Inspector Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flagged Alert Card */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-md overflow-hidden">
              {/* Header Badge */}
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Forensic Alert // Threat Level: Critical
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 dark:bg-zinc-900 text-zinc-200 border border-zinc-700">
                  ID: ALT-9041
                </span>
              </div>

              {/* Alert Body */}
              <div className="p-6 space-y-6">
                {/* Subject Wallet */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 font-mono">
                    Target Subject Address
                  </div>
                  <div className="mt-1 flex items-center justify-between p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate mr-2">
                      {walletAddress}
                    </span>
                    <button
                      onClick={handleCopyWallet}
                      className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 shrink-0"
                      title="Copy Address"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Risk Score & Confidence Strip */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 font-mono">
                      Risk Score
                    </div>
                    <div className="text-3xl font-bold font-mono text-zinc-950 dark:text-zinc-100 mt-1">
                      92.4%
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 block">
                      Ensemble ML + Graph Model
                    </span>
                  </div>

                  <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 font-mono">
                      Confidence
                    </div>
                    <div className="text-3xl font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">
                      94.8%
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 block">
                      Multi-Vector Convergence
                    </span>
                  </div>
                </div>

                {/* Checklist of Reasons */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center justify-between">
                    <span>Forensic Evidence Checklist</span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                      5 Indicators Corroborated
                    </span>
                  </div>

                  <div className="space-y-2">
                    {reasons.map((reason, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      >
                        <div className="w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center text-[9px] shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <span className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug">
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between text-xs">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono">Investigation Status: Active Triage</span>
                <button
                  onClick={() => setActiveTab("court")}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
                >
                  Inspect Section 65B Dossier →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive XAI Breakdown & Evidence Audit */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              {/* Tab Selector */}
              <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80">
                <button
                  onClick={() => setActiveTab("alert")}
                  className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${
                    activeTab === "alert"
                      ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-white dark:bg-zinc-900"
                      : "border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  TreeSHAP Feature Weights
                </button>
                <button
                  onClick={() => setActiveTab("court")}
                  className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${
                    activeTab === "court"
                      ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-white dark:bg-zinc-900"
                      : "border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  Section 65B Evidence Dossier
                </button>
              </div>

              {/* Tab 1: SHAP Feature Weights */}
              {activeTab === "alert" && (
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                      Local Feature Attribution (TreeSHAP)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Calculates the exact Shapley contribution of each topological and behavioral feature pushing the risk prediction above baseline network expectation.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {shapFeatures.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-800 dark:text-zinc-200">{item.feature}</span>
                          <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                            {item.weight}
                          </span>
                        </div>
                        {/* Bar */}
                        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden">
                          <div
                            className="h-full bg-zinc-900 dark:bg-zinc-100 rounded"
                            style={{
                              width: item.weight.replace("+", "").replace("%", "") + "%"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">Axiomatic Guarantee:</span> Shapley Additive Explanations enforce local accuracy, missingness, and consistency—ensuring feature weights sum exactly to the model output difference.
                  </div>
                </div>
              )}

              {/* Tab 2: Court Evidence Dossier */}
              {activeTab === "court" && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Statutory Evidence Certificate
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Indian Evidence Act (Sec 65B) / Cyber Forensics Affidavit Draft
                      </p>
                    </div>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      Export Affidavit
                    </button>
                  </div>

                  <div className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/60 font-mono text-[11px] text-zinc-800 dark:text-zinc-200 space-y-2 leading-relaxed">
                    <div className="font-bold pb-1 border-b border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-zinc-100">
                      FORENSIC CASE REF: CR-2026-BTC-9041
                    </div>
                    <div>SUBJECT ADDRESS: {walletAddress}</div>
                    <div>ATTRIBUTION CLASSIFICATION: High-Velocity Peel Chain with Obfuscation Ingress</div>
                    <div>AGGREGATE RISK SCORE: 92.4% (Critical Threat Priority)</div>
                    <div>CRYPTOGRAPHIC INTEGRITY HASH (SHA-256): e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                    <div className="pt-2 text-zinc-600 dark:text-zinc-400 font-sans text-xs">
                      &quot;Based on multi-directed graph traversal and unsupervised tree isolation metrics, Subject Wallet {walletAddress} exhibited anomalous outbound velocity (482.50 BTC) across 18 transactions per hour, routing through known darknet relay infrastructure. Recommended for statutory exchange freezing under relevant cybercrime statutes.&quot;
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
