"use client";

import React, { useState } from "react";
import { FUTURE_ENHANCEMENTS, FutureEnhancement } from "@/data/futureEnhancementsData";
import { Bot, Radio, Coins, Users, Scale, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export function FutureEnhancementsSection() {
  const [selectedEnhancement, setSelectedEnhancement] = useState<FutureEnhancement | null>(null);

  const icons: Record<string, React.ReactNode> = {
    "Natural Language Investigation Assistant": <Bot className="w-5 h-5" />,
    "Live Blockchain Monitoring & Mempool Sniffer": <Radio className="w-5 h-5" />,
    "Multi-Cryptocurrency & Cross-Chain Bridge Support": <Coins className="w-5 h-5" />,
    "Entity Resolution & Off-Chain Attribution": <Users className="w-5 h-5" />,
    "Advanced Counterfactual Explainability": <Scale className="w-5 h-5" />,
    "Threat Intelligence Integration & Global Blacklists": <ShieldAlert className="w-5 h-5" />
  };

  return (
    <section id="future-enhancements" className="py-20 scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 15 // Future Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Future Enhancements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Long-term technological horizon for scaling the platform into a multi-chain, real-time national cyber intelligence system for law enforcement agencies.
          </p>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_ENHANCEMENTS.map((item) => (
            <div
              key={item.title}
              onClick={() => setSelectedEnhancement(item)}
              className="cursor-pointer p-6 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-zinc-500 dark:hover:border-zinc-700 hover:shadow transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                      {icons[item.title] || <Sparkles className="w-4 h-4" />}
                    </div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {item.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                  Impact: {item.impact}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  <span>Stack: {item.techUsed.split(",")[0]}</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold hover:underline">
                    View Specs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Specs */}
        {selectedEnhancement && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-300 dark:border-zinc-800 shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in text-zinc-900 dark:text-zinc-100">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold font-mono">
                    Future Roadmap Specification
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEnhancement(null)}
                  className="text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 font-mono">
                    {selectedEnhancement.category}
                  </span>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-100 mt-0.5">
                    {selectedEnhancement.title}
                  </h4>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedEnhancement.description}
                </p>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2">
                    Architectural Plan
                  </div>
                  <ul className="space-y-2">
                    {selectedEnhancement.architectureDetails.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-700 dark:text-zinc-300 p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-start space-x-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 text-xs">
                  <span className="font-bold">Proposed Stack:</span> {selectedEnhancement.techUsed}
                </div>
              </div>

              <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex justify-end">
                <button
                  onClick={() => setSelectedEnhancement(null)}
                  className="px-4 py-1.5 text-xs font-bold rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
