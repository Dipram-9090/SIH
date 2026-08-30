"use client";

import React, { useState } from "react";
import { DB_TABLES, SchemaTable } from "@/data/dbSchemaData";
import { Database, Table2, Link2 } from "lucide-react";

export function DbSchemaSection() {
  const [selectedTable, setSelectedTable] = useState<SchemaTable>(DB_TABLES[0]);

  return (
    <section id="database-schema" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Section 13 // Relational & Graph Persistence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
            Database Schema (ER Diagram)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            PostgreSQL relational database schema designed for high-concurrency ledger lookups, temporal transaction indexing, and forensic alert trails.
          </p>
        </div>

        {/* Visual ER Map */}
        <div className="mb-10 p-6 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-x-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
            Entity Relationship Topology (6 Core Tables)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 min-w-[650px]">
            {DB_TABLES.map((tbl) => {
              const isSelected = selectedTable.id === tbl.id;
              return (
                <div
                  key={tbl.id}
                  onClick={() => setSelectedTable(tbl)}
                  className={`cursor-pointer p-3.5 rounded-lg border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-blue-600 dark:border-blue-500 bg-white dark:bg-zinc-900 ring-2 ring-blue-600 dark:ring-blue-500 shadow-sm"
                      : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-500"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-zinc-950 dark:text-zinc-100 font-mono">
                        {tbl.name}
                      </span>
                      <Table2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {tbl.fields.length} Fields
                    </span>
                  </div>

                  <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[9px] font-mono text-zinc-400 dark:text-zinc-500 truncate">
                    PK: {tbl.fields.find((f) => f.isPk)?.name || "id"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Table Deep Dive Inspector */}
        <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 font-mono">
                Table: {selectedTable.name}
              </h3>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
              {selectedTable.description}
            </span>
          </div>

          {/* Fields Table */}
          <div className="p-4 sm:p-6 space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Column Name</th>
                    <th className="py-2.5 px-3">Data Type</th>
                    <th className="py-2.5 px-3">Key Type</th>
                    <th className="py-2.5 px-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {selectedTable.fields.map((field) => (
                    <tr key={field.name} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50">
                      <td className="py-2.5 px-3 font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                        {field.name}
                        {field.isPk && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950">
                            PK
                          </span>
                        )}
                        {field.isFk && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            FK
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-blue-600 dark:text-blue-400 font-bold">
                        {field.type}
                      </td>
                      <td className="py-2.5 px-3 text-zinc-500 dark:text-zinc-400">
                        {field.isPk
                          ? "Primary Key"
                          : field.isFk
                          ? `FK → ${field.fkTarget}`
                          : "Attribute"}
                      </td>
                      <td className="py-2.5 px-3 text-zinc-600 dark:text-zinc-400">{field.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Foreign Key Relationships */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Active Entity Relationships
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedTable.relationships.map((rel, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-mono p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300"
                  >
                    • {rel}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
