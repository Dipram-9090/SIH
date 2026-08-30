"use client";

import React, { useState } from "react";
import { UploadCloud, Cpu, Network, ShieldAlert, Bell, LayoutDashboard, Search, FileDown, ArrowDown, CheckCircle2 } from "lucide-react";

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
    <section id="user-workflow" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 14 // End-To-End Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            User Workflow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            How law enforcement officers and cyber forensic investigators interact with the system from initial seizure ingestion to statutory courtroom report generation.
          </p>
        </div>

        {/* 8-Step Interactive Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Step Cards */}
          <div className="lg:col-span-7 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStep === step.step;
              const isOfficer = step.actor === "Investigator";

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`cursor-pointer p-4 rounded-lg border transition-all ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/20 ring-1 ring-blue-600 shadow-sm"
                      : "border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold border ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600"
                            : isOfficer
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-zinc-100 text-zinc-700 border-zinc-300"
                        }`}
                      >
                        {step.step}
                      </div>

                      <div>
                        <h3 className="text-xs font-bold text-zinc-950 flex items-center gap-2">
                          {step.title}
                          <span
                            className={`text-[9px] px-2 py-0.2 rounded font-mono font-normal border ${
                              isOfficer
                                ? "border-zinc-300 bg-zinc-100 text-zinc-800"
                                : "border-blue-200 bg-blue-50 text-blue-800"
                            }`}
                          >
                            {step.actor}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400">
                      {step.timeEstimate}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 mt-2 pl-10 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Step Deep Dive Preview Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-800">
                  Step {activeStep} Detail Inspector
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-300 bg-white text-zinc-600">
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
                      <div className="p-2.5 rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-900">
                        {current.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                          Action by {current.actor}
                        </span>
                        <h4 className="text-sm font-bold text-zinc-950">
                          {current.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-700 leading-relaxed pt-2 border-t border-zinc-100">
                      {current.description}
                    </p>

                    <div className="p-3.5 rounded border border-zinc-200 bg-zinc-50 space-y-1">
                      <div className="text-[10px] font-bold uppercase text-zinc-500 font-mono">
                        Generated Artifact / Output
                      </div>
                      <div className="text-xs font-bold text-zinc-900">
                        {current.actionOutput}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 font-mono">
                      <span>Duration: {current.timeEstimate}</span>
                      <span className="text-blue-600 font-bold">Step {current.step} / 8</span>
                    </div>
                  </div>
                );
              })()}

              {/* Progress Stepper Footer */}
              <div className="p-3 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="text-xs font-bold px-3 py-1.5 rounded border border-zinc-300 bg-white text-zinc-800 disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(8, prev + 1))}
                  disabled={activeStep === 8}
                  className="text-xs font-bold px-3 py-1.5 rounded bg-blue-600 text-white disabled:opacity-40"
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
