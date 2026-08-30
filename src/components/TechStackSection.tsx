"use client";

import React, { useState } from "react";
import { TECH_STACK_CATEGORIES, TechItem } from "@/data/techStackData";
import { Layers, Terminal, Cpu, Network, Database, Server, CheckCircle2 } from "lucide-react";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Layers className="w-4 h-4" />,
    backend: <Terminal className="w-4 h-4" />,
    ml: <Cpu className="w-4 h-4" />,
    graph: <Network className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    infrastructure: <Server className="w-4 h-4" />
  };

  const displayedCategories =
    activeCategory === "all"
      ? TECH_STACK_CATEGORIES
      : TECH_STACK_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="tech-stack" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 06 // Technology Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Curated, battle-tested technologies engineered for high-throughput forensic graph computation, sub-second machine learning inference, and interactive visualization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-zinc-900 text-white"
                : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            All Technologies (18)
          </button>
          {TECH_STACK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {categoryIcons[cat.id]}
              {cat.title.replace(" Layer", "")}
            </button>
          ))}
        </div>

        {/* Category Sections & Cards Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1 rounded bg-zinc-100 border border-zinc-300 text-zinc-800">
                    {categoryIcons[category.id]}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs text-zinc-500 hidden sm:inline">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 rounded-lg border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-zinc-950">
                          {tech.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-700">
                          {tech.tag}
                        </span>
                      </div>

                      <div className="text-[11px] font-semibold text-blue-600 mb-2">
                        {tech.role}
                      </div>

                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {tech.whyUsed}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Category: {tech.category}</span>
                      {tech.version && <span>{tech.version}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
