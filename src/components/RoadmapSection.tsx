"use client";

import React, { useState } from "react";
import { ROADMAP_STEPS } from "@/data/roadmapData";
import { CheckCircle2 } from "lucide-react";

export function RoadmapSection() {
  const [filterPhase, setFilterPhase] = useState<string>("all");

  const phases = ["all", "Phase 1: Ingestion", "Phase 2: Enrichment", "Phase 3: Machine Learning", "Phase 4: Risk Scoring", "Phase 5: User Interface"];

  const filteredSteps =
    filterPhase === "all"
      ? ROADMAP_STEPS
      : ROADMAP_STEPS.filter((s) => s.phase === filterPhase);

  return (
    <section id="roadmap" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 07 // Project Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Step-by-Step Implementation Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            An 8-week developmental roadmap tracking milestones from raw data ingestion to courtroom-ready evidentiary dashboard testing.
          </p>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {phases.map((p) => (
            <button
              key={p}
              onClick={() => setFilterPhase(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterPhase === p
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                  : "border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {p === "all" ? "All 10 Steps" : p}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {filteredSteps.map((step) => {
            const isDone = step.status === "Completed";
            const isInProgress = step.status === "In Progress";

            return (
              <div key={step.step} className="relative group">
                {/* Timeline Pin Node */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border-2 bg-white dark:bg-zinc-950 ${
                    isDone
                      ? "border-zinc-900 text-zinc-900 dark:border-zinc-200 dark:text-zinc-200"
                      : isInProgress
                      ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 ring-4 ring-blue-50 dark:ring-blue-950/50"
                      : "border-zinc-300 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600"
                  }`}
                >
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="p-5 sm:p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm transition-all">
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase font-mono">
                        {step.phase}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">•</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        Step {step.step}: {step.title}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {step.duration}
                      </span>
                      <span
                        className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border ${
                          isDone
                            ? "border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                            : isInProgress
                            ? "border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold"
                            : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>

                  {/* Objective */}
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 font-medium">
                    {step.objective}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-500">
                      Key Deliverables
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {step.keyDeliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-zinc-600 dark:text-zinc-400 p-2.5 rounded border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-start space-x-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Focus Badge */}
                  <div className="flex items-center justify-between text-[11px] pt-3 border-t border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-mono">
                    <span>Technical Focus: {step.technicalFocus}</span>
                    <span className="hidden sm:inline">Milestone verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
