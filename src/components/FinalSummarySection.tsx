"use client";

import React, { useState } from "react";
import { ShieldCheck, ArrowUp, Copy, Check, Terminal, ExternalLink, Download } from "lucide-react";

export function FinalSummarySection() {
  const [copied, setCopied] = useState(false);

  const quoteText =
    "Our goal is not to replace investigators.\n\nOur goal is to help them discover suspicious Bitcoin activity faster using AI, graph analytics and explainable machine learning.";

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="summary" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Mission Card */}
        <div className="p-8 sm:p-12 rounded-xl border-2 border-zinc-900 bg-white shadow-md text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300 bg-zinc-100 text-xs font-bold text-zinc-800 font-mono">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            SIH 2026 Core Mission Statement
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950 max-w-3xl mx-auto leading-snug">
            “Our goal is not to replace investigators.
            <br className="hidden sm:inline" /> Our goal is to help them discover suspicious Bitcoin activity faster using AI, graph analytics and explainable machine learning.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  Mission Statement Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
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

          {/* SIH Final Takeaways Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-200 text-left">
            <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                Speed Advantage
              </div>
              <div className="text-xl font-bold text-zinc-950 mt-1 font-mono">
                98% Faster
              </div>
              <p className="text-xs text-zinc-600 mt-1">
                Compresses weeks of manual spreadsheet tracing into sub-minute graph anomaly discovery.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                Judicial Rigor
              </div>
              <div className="text-xl font-bold text-zinc-950 mt-1 font-mono">
                100% Explainable
              </div>
              <p className="text-xs text-zinc-600 mt-1">
                Every flagged wallet is accompanied by human-readable forensic reasons and SHAP attributions.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50/60">
              <div className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                SIH Viability
              </div>
              <div className="text-xl font-bold text-zinc-950 mt-1 font-mono">
                Production Ready
              </div>
              <p className="text-xs text-zinc-600 mt-1">
                Containerized Python/FastAPI backend with Next.js frontend ready for immediate deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
