"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, RefreshCw } from "lucide-react";

export function ProblemStatementSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "victim",
      name: "Victim",
      role: "Source of Stolen Funds",
      desc: "Victim transfers 50 BTC under extortion or fraud.",
      detail: "Initial stolen funds leave victim's verified wallet.",
      badge: "Inception (00:00:00)"
    },
    {
      id: "wallet-a",
      name: "Wallet A",
      role: "Layer 1 Mule Wallet",
      desc: "Funds instantly split into two 25 BTC sub-streams.",
      detail: "Quick fan-out designed to confuse single-hop tracking.",
      badge: "Hop 1 (+00:03:12)"
    },
    {
      id: "wallet-b",
      name: "Wallet B",
      role: "Layer 2 Peel Chain",
      desc: "Peels off 1.5 BTC to cashout; passes 23.5 BTC forward.",
      detail: "Classic peel chain technique to disguise bulk volume.",
      badge: "Hop 2 (+00:11:45)"
    },
    {
      id: "wallet-c",
      name: "Wallet C",
      role: "Layer 3 Mixer / Obfuscation",
      desc: "Blends with 30+ other addresses in a CoinJoin pool.",
      detail: "Transaction entropy spikes; ownership links break.",
      badge: "Hop 3 (+00:24:10)"
    },
    {
      id: "exchange",
      name: "Exchange",
      role: "Off-Ramp Liquidation",
      desc: "Deposits to offshore OTC broker / unverified exchange.",
      detail: "Cash out into fiat currency or privacy coins.",
      badge: "Final Exit (+00:48:30)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="problem-statement" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 02 // The Real-World Challenge
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Problem Statement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Understanding why modern cybercrime law enforcement struggles to trace illicit cryptocurrency trails without automated graph intelligence.
          </p>
        </div>

        {/* 2-Column: Simple Language Narrative + Animated Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Simple Language Explanation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                The Narrative
              </div>
              <div className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                <p className="font-semibold text-zinc-950 dark:text-zinc-100">
                  Imagine police trying to trace stolen money.
                </p>
                <p>
                  Instead of physical cash, cyber criminals use <span className="font-bold text-zinc-950 dark:text-zinc-100">Bitcoin</span>.
                </p>
                <p>
                  Within seconds, the stolen money is split and transferred across <span className="font-bold text-zinc-950 dark:text-zinc-100">hundreds of intermediate disposable wallets</span> and automated mixing pools.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Human investigators cannot manually inspect thousands of multi-input transactions, calculate UTXO peel ratios, or correlate foreign IP broadcasts in time.
                </p>
                <div className="p-3 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 text-xs leading-relaxed font-bold">
                  ⚡ Our system helps cybercrime investigators automatically discover suspicious activity, reconstruct laundering graphs, and produce explainable evidentiary reports.
                </div>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">4,000+ TXs / Hour</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Average velocity in active ransomware syndicates.</div>
              </div>
              <div className="p-3.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">&lt; 15 Minutes</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Time window before funds reach offshore fiat off-ramps.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Flow Diagram */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  Money Laundering Flow Simulation
                </span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  Next Step
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
                              ↳ Forensic Insight: {step.detail}
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
                <span>Autonomous step cycling active</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">Step {activeStep + 1} of 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
