"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  num: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "hero", title: "Hero Section", num: "01" },
  { id: "problem-statement", title: "Problem Statement", num: "02" },
  { id: "problem-solving", title: "What Problem Are We Solving?", num: "03" },
  { id: "architecture", title: "System Architecture", num: "04" },
  { id: "pipeline", title: "Full Data Pipeline", num: "05" },
  { id: "tech-stack", title: "Tech Stack", num: "06" },
  { id: "roadmap", title: "Implementation Roadmap", num: "07" },
  { id: "graph-analytics", title: "Graph Analytics", num: "08" },
  { id: "ai-detection", title: "AI Detection Models", num: "09" },
  { id: "explainability", title: "Explainable AI (XAI)", num: "10" },
  { id: "dashboard-mockup", title: "Investigation Dashboard", num: "11" },
  { id: "api-architecture", title: "API Architecture", num: "12" },
  { id: "database-schema", title: "Database Schema (ERD)", num: "13" },
  { id: "user-workflow", title: "User Workflow", num: "14" },
  { id: "future-enhancements", title: "Future Enhancements", num: "15" },
  { id: "summary", title: "Final Summary", num: "16" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TOC_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(TOC_ITEMS[i].id);
          break;
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
<<<<<<< HEAD
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold transition-all"
            aria-label="Table of Contents"
          >
            <List className="w-4 h-4 text-blue-600 dark:text-blue-400" />
=======
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-zinc-300 bg-white text-zinc-900 shadow-md hover:border-zinc-500 hover:bg-zinc-50 text-xs font-bold transition-all hover:scale-105 duration-200 active:scale-95"
            aria-label="Table of Contents"
          >
            <List className="w-4 h-4 text-blue-600 animate-pulse" />
>>>>>>> 0abf518ad88d2cb15eea599a10a445d340e1a7f3
            <span className="hidden sm:inline">Index ({TOC_ITEMS.length})</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
              {TOC_ITEMS.find((t) => t.id === activeId)?.num || "01"}
            </span>
          </button>

          {isOpen && (
<<<<<<< HEAD
            <div className="absolute bottom-12 right-0 w-80 max-h-[70vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-xl p-3 space-y-1 animate-fade-in text-zinc-900 dark:text-zinc-100">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
=======
            <div className="absolute bottom-14 right-0 w-80 max-h-[70vh] overflow-y-auto bg-white border border-zinc-300 rounded-lg shadow-xl p-3 space-y-1 animate-slide-up">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
>>>>>>> 0abf518ad88d2cb15eea599a10a445d340e1a7f3
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
                        ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 font-bold border-l-2 border-blue-600 dark:border-blue-400"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">{item.num}</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    {activeId === item.id && (
                      <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    )}
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
