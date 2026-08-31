"use client";

import React, { useState } from "react";
import { List } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";
import { DOCUMENT_SECTIONS } from "@/config/navigation";

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { activeSection, scrollToSection } = useNavigation();

  const currentItem = DOCUMENT_SECTIONS.find((t) => t.id === activeSection) || DOCUMENT_SECTIONS[0];

  return (
    <>
      {/* Desktop & Mobile Floating Table of Contents Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold transition-all hover:scale-105 duration-200 active:scale-95"
            aria-label="Table of Contents"
            aria-expanded={isOpen}
          >
            <List className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="hidden sm:inline">Index ({DOCUMENT_SECTIONS.length})</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
              {currentItem.num}
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
                  className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-1"
                  aria-label="Close Table of Contents"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-0.5">
                {DOCUMENT_SECTIONS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      scrollToSection(item.id, e);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs transition-colors ${
                      activeSection === item.id
                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-60 mr-2">
                      {item.num}
                    </span>
                    <span className="truncate flex-1">{item.name}</span>
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
