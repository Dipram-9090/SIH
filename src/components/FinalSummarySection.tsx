"use client";

import React, { useState } from "react";
import { ShieldCheck, ArrowUp, Copy, Check } from "lucide-react";

export function FinalSummarySection() {
  const [copied, setCopied] = useState(false);

  const quoteText =
    "Our objective is not to replace human investigative intuition, but to augment specialized cybercrime units with automated graph intelligence, anomaly isolation, and statutory forensic verification.";

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="summary" className="py-20 scroll-mt-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Mission Card */}
        <div className="p-8 sm:p-12 rounded-xl border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-md text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 font-mono">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Core Mission & Operational Philosophy
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 max-w-3xl mx-auto leading-snug">
            “Our objective is not to replace human investigative intuition, but to augment specialized cybercrime units with automated graph intelligence, anomaly isolation, and statutory forensic verification.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Mission Statement Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  Copy Mission Pitch
                </>
              )}
            </button>

            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back To Top
            </a>
          </div>

          {/* Key Deliverables Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-left">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 font-mono">
                Latency Advantage
              </div>
              <div className="text-xl font-bold text-zinc-950 dark:text-zinc-100 mt-1 font-mono">
                &lt; 5 Min Triage
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Compresses manual multi-hop ledger auditing into sub-minute graph anomaly discovery (Illustrative Benchmark).
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 font-mono">
                Evidentiary Rigor
              </div>
              <div className="text-xl font-bold text-zinc-950 dark:text-zinc-100 mt-1 font-mono">
                Sec 65B Admissible
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Every flagged address is substantiated with local TreeSHAP feature weights and SHA-256 chain-of-custody hashes.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 font-mono">
                Deployment Architecture
              </div>
              <div className="text-xl font-bold text-zinc-950 dark:text-zinc-100 mt-1 font-mono">
                Containerized & Ready
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Scalable FastAPI REST backend, PostgreSQL relational store, and Next.js 14 investigation console.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
