"use client";

import React, { useState } from "react";
import { UploadCloud, Cpu, Network, ShieldAlert, Bell, LayoutDashboard, Search, FileDown } from "lucide-react";

interface WorkflowStep {
  step: number;
  title: string;
  actor: "Investigator" | "System AI Engine";
  description: string;
  actionOutput: string;
  timeEstimate: string;
  icon: React.ReactNode;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Upload Dataset",
    actor: "Investigator",
    description: "Cybercrime investigator drags and drops raw CSV ledger or seizure dump into the console.",
    actionOutput: "SHA-256 evidence integrity hash created and recorded.",
    timeEstimate: "10 seconds",
    icon: <UploadCloud className="w-4 h-4" />
  },
  {
    step: 2,
    title: "System Processes Data",
    actor: "System AI Engine",
    description: "Asynchronous backend parses UTXOs, cleans noise, and enriches relay broadcaster IPs with GeoIP.",
    actionOutput: "142k records normalized into relational tables.",
    timeEstimate: "45 seconds",
    icon: <Cpu className="w-4 h-4" />
  },
  {
    step: 3,
    title: "Graph Built",
    actor: "System AI Engine",
    description: "NetworkX creates directed multi-graph nodes (wallets) and edges (transactions), computing PageRank.",
    actionOutput: "Multi-hop graph network constructed with 3,840 vertices.",
    timeEstimate: "30 seconds",
    icon: <Network className="w-4 h-4" />
  },
  {
    step: 4,
    title: "AI Detects Suspicious Activity",
    actor: "System AI Engine",
    description: "Isolation Forest discovers velocity outliers; DBSCAN clusters money laundering syndicates.",
    actionOutput: "Anomaly scores and 14 distinct criminal clusters identified.",
    timeEstimate: "20 seconds",
    icon: <ShieldAlert className="w-4 h-4" />
  },
  {
    step: 5,
    title: "Generate Alerts",
    actor: "System AI Engine",
    description: "System computes 0-100% composite risk scores and prioritizes threats into triage queues.",
    actionOutput: "72 Critical Risk Alerts generated with explainable reason checklists.",
    timeEstimate: "5 seconds",
    icon: <Bell className="w-4 h-4" />
  },
  {
    step: 6,
    title: "Investigator Opens Dashboard",
    actor: "Investigator",
    description: "Investigator logs in and views prioritized alert feed, temporal anomaly spikes, and risk breakdown.",
    actionOutput: "Instant situational awareness across all high-risk wallets.",
    timeEstimate: "Immediate",
    icon: <LayoutDashboard className="w-4 h-4" />
  },
  {
    step: 7,
    title: "Investigates Wallet",
    actor: "Investigator",
    description: "Clicks into top alert (3J98... 92% risk), expands 3-hop visual graph, and inspects peel chain hops.",
    actionOutput: "Traces money from victim wallet through mixers to KYC exchange off-ramp.",
    timeEstimate: "2-3 minutes",
    icon: <Search className="w-4 h-4" />
  },
  {
    step: 8,
    title: "Exports Report",
    actor: "Investigator",
    description: "One-click export of court-ready forensic PDF case dossier with SHA-256 chain of custody.",
    actionOutput: "Official statutory evidence report ready for legal summons/freezing order.",
    timeEstimate: "5 seconds",
    icon: <FileDown className="w-4 h-4" />
  }
];

export function UserWorkflowSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="user-workflow" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 14 // End-To-End Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            User Workflow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            How law enforcement officers and cyber forensic investigators interact with the system from initial seizure ingestion to statutory courtroom report generation.
          </p>
        </div>

        {/* 8-Step Interactive Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Step Cards */}
          <div className="lg:col-span-7 space-y-3">
            {WORKFLOW_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              const isOfficer = step.actor === "Investigator";

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`cursor-pointer p-4 rounded-lg border transition-all ${
                    isSelected
                      ? "border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/30 ring-1 ring-blue-600 dark:ring-blue-500 shadow-sm"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold border ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600"
                            : isOfficer
                            ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700"
                        }`}
                      >
                        {step.step}
                      </div>

                      <div>
                        <h3 className="text-xs font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                          {step.title}
                          <span
                            className={`text-[9px] px-2 py-0.2 rounded font-mono font-normal border ${
                              isOfficer
                                ? "border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                                : "border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300"
                            }`}
                          >
                            {step.actor}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      {step.timeEstimate}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 pl-10 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Step Deep Dive Preview Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  Step {activeStep} Detail Inspector
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Workflow Simulation
                </span>
              </div>

              {/* Inspector Content */}
              {(() => {
                const current =
                  WORKFLOW_STEPS.find((s) => s.step === activeStep) || WORKFLOW_STEPS[0];
                return (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                        {current.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
                          Action by {current.actor}
                        </span>
                        <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                          {current.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      {current.description}
                    </p>

                    <div className="p-3.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 space-y-1">
                      <div className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                        Generated Artifact / Output
                      </div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {current.actionOutput}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      <span>Duration: {current.timeEstimate}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Step {current.step} / 8</span>
                    </div>
                  </div>
                );
              })()}

              {/* Progress Stepper Footer */}
              <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="text-xs font-bold px-3 py-1.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 disabled:opacity-40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(8, prev + 1))}
                  disabled={activeStep === 8}
                  className="text-xs font-bold px-3 py-1.5 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
