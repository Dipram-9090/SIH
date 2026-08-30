"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, RefreshCw, FileText, CheckCircle2, LayoutDashboard, Terminal } from "lucide-react";

export function ProblemStatementSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "victim",
      name: "Genesis / Victim",
      role: "Source of Illicit Inflow",
      desc: "Victim transfers 50 BTC under ransomware extortion or cyber fraud.",
      detail: "Genesis transaction logged from verified victim wallet with clean history.",
      badge: "T+00:00:00"
    },
    {
      id: "wallet-a",
      name: "Mule Wallet (Hop 1)",
      role: "Layer 1 Structuring Node",
      desc: "Funds instantly structured into parallel 25 BTC outbound streams.",
      detail: "Rapid fan-out execution designed to defeat single-hop ledger tracking.",
      badge: "T+00:03:12"
    },
    {
      id: "wallet-b",
      name: "Peel Hub (Hop 2)",
      role: "Layer 2 Peel Chain Node",
      desc: "Peels 1.5 BTC to intermediate wallet; forwards 23.5 BTC change.",
      detail: "Heuristic peel chain degradation disguises bulk volume across successive blocks.",
      badge: "T+00:11:45"
    },
    {
      id: "wallet-c",
      name: "Mixer / CoinJoin Pool",
      role: "Layer 3 Obfuscation Hub",
      desc: "Blends with 30+ equal-denomination inputs in a decentralized mixing pool.",
      detail: "Transaction entropy spikes; breaks direct cryptographic linkability.",
      badge: "T+00:24:10"
    },
    {
      id: "exchange",
      name: "Off-Ramp Entity",
      role: "Liquidation Endpoint",
      desc: "Inflow arrives at unhosted exchange deposit or peer-to-peer OTC desk.",
      detail: "Final liquidation into fiat currency or privacy-centric alternative assets.",
      badge: "T+00:48:30"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="problem-statement" className="py-20 scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 02 // Official Problem Statement
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Problem Statement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Official Smart India Hackathon (SIH) 2026 problem statement specifications, operational scope, and technical requirements.
          </p>
        </div>

        {/* 1. Official SIH Problem Statement Card */}
        <div className="mb-16 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-md overflow-hidden transition-colors">
          {/* Official Banner Header */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-sm">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100">
                  Official SIH Problem Statement
                </h3>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Smart India Hackathon 2026 // Ministry / Department Submission
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                ID: 26146
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Software / Offline Linux
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Metadata Table Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Problem Metadata
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 text-xs">
                {/* Column 1 */}
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <div className="p-3.5 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Problem Statement ID</span>
                    <span className="font-mono font-bold text-zinc-950 dark:text-zinc-100">26146</span>
                  </div>
                  <div className="p-3.5 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Organization</span>
                    <span className="font-bold text-zinc-950 dark:text-zinc-100">National Technical Research Organisation (NTRO)</span>
                  </div>
                  <div className="p-3.5 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Department</span>
                    <span className="font-bold text-zinc-950 dark:text-zinc-100">National Technical Research Organisation (NTRO)</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <div className="p-3.5 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Problem Statement Title</span>
                    <span className="font-bold text-zinc-950 dark:text-zinc-100 text-left sm:text-right">
                      AI-Powered Monitoring & Analysis of Bitcoin Transaction Traffic
                    </span>
                  </div>
                  <div className="p-3.5 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Category</span>
                    <span className="font-bold text-zinc-950 dark:text-zinc-100">Software</span>
                  </div>
                  <div className="p-3.5 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-medium text-zinc-500 dark:text-zinc-400">Theme</span>
                    <span className="font-bold text-zinc-950 dark:text-zinc-100">Blockchain & Cybersecurity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Description
              </h4>
              
              <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 space-y-4 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                <div>
                  <div className="font-bold text-zinc-950 dark:text-zinc-100 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Background
                  </div>
                  <p className="pl-3.5 border-l-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                    Bitcoin&apos;s pseudonymous, peer-to-peer design lets criminal actors move, layer, and cash out illicit funds — ransomware payments, darknet-market proceeds, extortion, and laundering — while evading traditional financial surveillance.
                  </p>
                  <p className="mt-3 pl-3.5 border-l-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                    The objective of problem statement is to design and build a complete system (offline) that ingests bulk Bitcoin transaction/network metadata (in CSV/JSON/XML), correlates network-layer (IP/port/timing) observations with blockchain-layer (wallet/TXID/amount) data, and applies AI/ML to detect anomalies, cluster entities, and generate prioritized, explainable investigative leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge Objectives */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Challenge Objectives
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  "Ingest & parse a bulk metadata dataset (timestamp, src/dst IP & port, TXID, input/output wallet addresses, amounts, fee, script type).",
                  "Build an entity/transaction graph linking IPs, wallets, and transactions.",
                  "Implement AI/ML detection use case with a working model—not just rules.",
                  "Generate a ranked, explainable alert list explaining why a wallet/transaction was flagged, along with a confidence score.",
                  "Present findings through a simple dashboard or link-analysis visualization."
                ].map((obj, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs text-zinc-800 dark:text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dataset Requirements */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Dataset
              </h4>
              <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 space-y-3">
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Participants will work with a synthetic dataset modelled on real Bitcoin P2P/transaction fields (no real seized or live-intercept data will be provided).
                </p>
                
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Minimum fields:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {[
                      "timestamp",
                      "src_ip",
                      "dst_ip",
                      "src_port",
                      "dst_port",
                      "txid",
                      "input_addresses[]",
                      "output_addresses[]",
                      "input_amounts[]",
                      "output_amounts[]",
                      "geo_country / ASN"
                    ].map((field, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-mono text-[11px] text-zinc-800 dark:text-zinc-200 flex items-center space-x-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="truncate">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1 italic">
                  (Integrate an open-source downloadable GeoIP database.)
                </p>
              </div>
            </div>

            {/* Expected Solution */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Expected Solution
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Deliverable 1 */}
                <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-2">
                  <div className="text-xs font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Offline System & Prototype
                  </div>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 pl-4 list-disc">
                    <li>Workable complete offline solution for Linux platform.</li>
                    <li>
                      Working prototype (code repository) including:
                      <ul className="pl-4 mt-1 space-y-0.5 list-[circle]">
                        <li>Data ingestion</li>
                        <li>Correlation engine</li>
                        <li>AI/ML model</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Deliverable 2 */}
                <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-2">
                  <div className="text-xs font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Technical Write-up & Dashboard
                  </div>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 pl-4 list-disc">
                    <li>
                      Short technical write-up covering:
                      <ul className="pl-4 mt-1 space-y-0.5 list-[circle]">
                        <li>Overall approach</li>
                        <li>Model selection</li>
                        <li>Explainability method</li>
                      </ul>
                    </li>
                    <li>Dashboard / visualization showing flagged entities and supporting evidence for each alert.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Educational Explanation & Laundering Flow Simulation */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
              Educational Walkthrough
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
              Money Laundering Mechanics & Forensic Simulation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Deconstructing how criminal syndicates execute multi-hop structuring and why automated graph correlation is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Forensic Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Operational Threat Environment
                </div>
                <div className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  <p className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Modern cyber syndicates execute programmatic money laundering at scale.
                  </p>
                  <p>
                    Upon receiving extorted or defrauded Bitcoin, automated laundering scripts immediately route funds through multi-layered peel chains, multi-input structuring schemes, and decentralized CoinJoin protocols.
                  </p>
                  <p>
                    Within minutes, a single transaction splinters across hundreds of ephemeral intermediate addresses and proxy relays spanning multiple international jurisdictions.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Manual block explorer queries and spreadsheet-based ledger reconciliation cannot keep pace with high-velocity laundering pipelines, leading to lost leads and expired freezing windows.
                  </p>
                  <div className="p-3 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 text-xs leading-relaxed font-bold">
                    ⚡ AegisTrace automates transaction graph reconstruction, detects anomalous multi-hop routing using unsupervised machine learning, and produces mathematically explainable judicial evidence.
                  </div>
                </div>
              </div>

              {/* Benchmark Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">4,000+ TXs / Hour</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Observed peak laundering burst rate (Simulation Benchmark).</div>
                </div>
                <div className="p-3.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">&lt; 15 Minutes</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Typical time window before funds reach offshore exchange off-ramps.</div>
                </div>
              </div>
            </div>

            {/* Right Column: Animated Flow Diagram */}
            <div className="lg:col-span-6">
              <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Laundering Chain Progression (5-Stage Model)
                  </span>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Next Stage
                  </button>
                </div>

                {/* Vertical Animated Flow */}
                <div className="p-5 space-y-2 bg-white dark:bg-zinc-900">
                  {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    const isPassed = activeStep > idx;

                    return (
                      <React.Fragment key={step.id}>
                        <div
                          onClick={() => setActiveStep(idx)}
                          className={`cursor-pointer p-3.5 rounded-lg border transition-all ${
                            isActive
                              ? "border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/30 shadow-sm"
                              : isPassed
                              ? "border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/60 opacity-90"
                              : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                                  isActive
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : isPassed
                                    ? "bg-zinc-800 dark:bg-zinc-700 text-white border-zinc-800 dark:border-zinc-700"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700"
                                }`}
                              >
                                {idx + 1}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                  {step.name}
                                  <span className="text-[10px] font-normal text-zinc-500 dark:text-zinc-400">
                                    ({step.role})
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                isActive
                                  ? "border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold"
                                  : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                              }`}
                            >
                              {step.badge}
                            </span>
                          </div>

                          {/* Expanded details on active */}
                          <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 pl-9">
                            <p>{step.desc}</p>
                            {isActive && (
                              <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-1">
                                ↳ Forensic Assessment: {step.detail}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Arrow Connector */}
                        {idx < steps.length - 1 && (
                          <div className="flex justify-center py-0.5">
                            <ArrowDown
                              className={`w-4 h-4 transition-colors ${
                                activeStep > idx ? "text-zinc-800 dark:text-zinc-200" : "text-zinc-300 dark:text-zinc-700"
                              }`}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Simulation Footer */}
                <div className="px-4 py-2.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span>Autonomous simulation cycle active</span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300">Stage {activeStep + 1} of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
