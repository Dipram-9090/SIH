"use client";

import React, { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  num: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "hero", num: "01", label: "Overview & Visual Graph" },
  { id: "problem-statement", num: "02", label: "Problem Narrative" },
  { id: "problem-solving", num: "03", label: "Solution Paradigm" },
  { id: "architecture", num: "04", label: "System Architecture" },
  { id: "pipeline", num: "05", label: "Data Pipeline" },
  { id: "tech-stack", num: "06", label: "Tech Stack" },
  { id: "roadmap", num: "07", label: "Implementation Roadmap" },
  { id: "graph-analytics", num: "08", label: "Graph Analytics" },
  { id: "ai-detection", num: "09", label: "AI Detection Engine" },
  { id: "explainability", num: "10", label: "Explainable AI (XAI)" },
  { id: "dashboard-mockup", num: "11", label: "Dashboard Mockup" },
  { id: "api-architecture", num: "12", label: "API Architecture" },
  { id: "database-schema", num: "13", label: "Database Schema" },
  { id: "user-workflow", num: "14", label: "User Workflow" },
  { id: "future-enhancements", num: "15", label: "Future Enhancements" },
  { id: "summary", num: "16", label: "Final Summary" }
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of TOC_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sticky Side TOC in Right Rail or Collapsible Floating Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold transition-all hover:scale-105 duration-200 active:scale-95"
            aria-label="Table of Contents"
          >
            <List className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="hidden sm:inline">Index ({TOC_ITEMS.length})</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
              {TOC_ITEMS.find((t) => t.id === activeId)?.num || "01"}
            </span>
          </button>

          {isOpen && (
            <div className="absolute bottom-14 right-0 w-80 max-w-[calc(100vw-3rem)] max-h-[70vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-xl p-3 space-y-1 animate-slide-up text-zinc-900 dark:text-zinc-100">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Document Index
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-0.5">
                {TOC_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs transition-colors ${
                      activeId === item.id
                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-60 mr-2">
                      {item.num}
                    </span>
                    <span className="truncate flex-1">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
