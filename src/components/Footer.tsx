"use client";

import React from "react";
import { Binary } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 text-xs font-mono text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          {/* Brand */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center text-white">
                <Binary className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                BTC INVESTIGATION // SIH 2026
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-[11px]">
              An educational architectural platform explaining how AI, Graph Analytics (NetworkX), Isolation Forests, and Explainable AI (XAI) detect Bitcoin money laundering for Smart India Hackathon 2026.
            </p>
            <div className="text-[10px] text-zinc-400 dark:text-zinc-500">
              Monochrome Design System • Space Mono • Zero Gradients
            </div>
          </div>

          {/* Architecture Sections */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-zinc-900 dark:text-zinc-100 uppercase text-[10px] tracking-wider">
              Core Architecture
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  System Architecture (10 Blocks)
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Full Data Pipeline (10 Stages)
                </a>
              </li>
              <li>
                <a href="#graph-analytics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Graph Analytics & Nodes
                </a>
              </li>
              <li>
                <a href="#ai-detection" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Isolation Forest & DBSCAN
                </a>
              </li>
              <li>
                <a href="#database-schema" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Database Schema (ERD)
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Modules */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-zinc-900 dark:text-zinc-100 uppercase text-[10px] tracking-wider">
              Interactive Demos
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Live Subgraph Sandbox
                </a>
              </li>
              <li>
                <a href="#problem-statement" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Laundering Hop Flow
                </a>
              </li>
              <li>
                <a href="#explainability" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Explainable AI Alert Card (92%)
                </a>
              </li>
              <li>
                <a href="#dashboard-mockup" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Investigation Dashboard Mockup
                </a>
              </li>
              <li>
                <a href="#api-architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  REST API Explorer
                </a>
              </li>
            </ul>
          </div>

          {/* Team / Hackathon Context */}
          <div className="md:col-span-2 space-y-2">
            <div className="font-bold text-zinc-900 dark:text-zinc-100 uppercase text-[10px] tracking-wider">
              Hackathon
            </div>
            <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 space-y-1 text-[10px]">
              <div className="font-bold text-zinc-900 dark:text-zinc-100">SIH 2026 Edition</div>
              <div className="text-zinc-500 dark:text-zinc-400">Cyber Crime Forensics</div>
              <div className="text-blue-600 dark:text-blue-400 font-bold">Team Innovation</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div>
            © 2026 Bitcoin Investigation System. Built for Smart India Hackathon.
          </div>
          <div className="flex items-center space-x-4">
            <span>Next.js App Router</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>next-themes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
