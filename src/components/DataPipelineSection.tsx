"use client";

import React, { useState } from "react";
import { PIPELINE_STAGES } from "@/data/pipelineData";
import { Copy, Check, Code2 } from "lucide-react";

export function DataPipelineSection() {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const activeStage =
    PIPELINE_STAGES.find((s) => s.step === selectedStep) || PIPELINE_STAGES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeStage.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pipeline" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 05 // Execution Stages
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Full Data Pipeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A comprehensive, 10-stage forensic pipeline explaining how raw cryptographic ledger records are ingested, modeled into graph structures, and evaluated by machine learning models.
          </p>
        </div>

        {/* Horizontal / Grid Stage Selector */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {PIPELINE_STAGES.map((stg) => {
              const isSelected = selectedStep === stg.step;
              return (
                <button
                  key={stg.step}
                  onClick={() => setSelectedStep(stg.step)}
                  className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/30 ring-1 ring-blue-600 dark:ring-blue-500 shadow-sm"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"
                      }`}
                    >
                      S{stg.step}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-bold mt-2 truncate ${
                      isSelected ? "text-blue-700 dark:text-blue-400" : "text-zinc-900 dark:text-zinc-200"
                    }`}
                  >
                    {stg.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Inspector */}
        <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          {/* Stage Banner */}
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-zinc-900 dark:bg-zinc-800 text-white border border-zinc-800 dark:border-zinc-700">
                  Stage {activeStage.step} of 10
                </span>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-100">
                  {activeStage.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {activeStage.shortDesc}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Tech:</span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
                {activeStage.techUsed}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Functional Breakdown & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  Forensic Operations
                </h4>
                <ul className="space-y-2.5">
                  {activeStage.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start space-x-2.5 p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/40"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Contracts */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                    Input Format:
                  </span>
                  <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    {activeStage.inputFormat}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                    Output Format:
                  </span>
                  <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    {activeStage.outputFormat}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Implementation Snippet */}
            <div className="lg:col-span-6">
              <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 text-zinc-100 overflow-hidden flex flex-col h-full">
                {/* Code Header */}
                <div className="px-4 py-2.5 bg-zinc-950 dark:bg-zinc-900 border-b border-zinc-800 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-300">
                      python_implementation_step_{activeStage.step}.py
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded border border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-4 overflow-x-auto font-mono text-xs text-zinc-200 leading-relaxed bg-zinc-950 flex-1">
                  <pre>
                    <code>{activeStage.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Stage Navigation Footer */}
          <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
            <button
              onClick={() => setSelectedStep((prev) => Math.max(1, prev - 1))}
              disabled={selectedStep === 1}
              className="text-xs font-bold px-3 py-1.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              ← Previous Stage
            </button>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              Stage {activeStage.step} of 10
            </span>
            <button
              onClick={() => setSelectedStep((prev) => Math.min(10, prev + 1))}
              disabled={selectedStep === 10}
              className="text-xs font-bold px-3 py-1.5 rounded bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
