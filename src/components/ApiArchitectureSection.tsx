"use client";

import React, { useState } from "react";
import { API_ENDPOINTS, ApiEndpoint } from "@/data/apiData";
import { Terminal, Copy, Check, Code2, Server, ArrowRight } from "lucide-react";

export function ApiArchitectureSection() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(API_ENDPOINTS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="api-architecture" className="py-20 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900" />
            Section 12 // REST API Contracts
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            API Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Asynchronous FastAPI endpoints powering the forensic pipeline, graph querying, threat alert scoring, and evidentiary dossier exports.
          </p>
        </div>

        {/* 2-Column: API List + Interactive Payload Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Endpoint List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Endpoints ({API_ENDPOINTS.length})
            </div>

            {API_ENDPOINTS.map((endpoint) => {
              const isSelected =
                selectedEndpoint.path === endpoint.path &&
                selectedEndpoint.method === endpoint.method;

              return (
                <div
                  key={`${endpoint.method}-${endpoint.path}`}
                  onClick={() => setSelectedEndpoint(endpoint)}
                  className={`cursor-pointer p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/20 ring-1 ring-blue-600 shadow-sm"
                      : "border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        endpoint.method === "POST"
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-blue-600 text-white border-blue-600"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-900 truncate">
                      {endpoint.path}
                    </span>
                  </div>

                  <span className="text-[10px] text-zinc-400 font-mono shrink-0 ml-2">
                    {endpoint.title.split(" ")[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Endpoint Code & Payload Inspector */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-lg border border-zinc-300 bg-white shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded ${
                      selectedEndpoint.method === "POST"
                        ? "bg-zinc-900 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {selectedEndpoint.method}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-950">
                    {selectedEndpoint.path}
                  </span>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      `${selectedEndpoint.method} ${selectedEndpoint.path}\n\nResponse:\n${selectedEndpoint.responsePayload}`,
                      "endpoint"
                    )
                  }
                  className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  {copiedId === "endpoint" ? (
                    <>
                      <Check className="w-3 h-3 text-green-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-500" />
                      Copy Endpoint
                    </>
                  )}
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">{selectedEndpoint.title}</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {selectedEndpoint.description}
                  </p>
                </div>

                {/* Request details if available */}
                {(selectedEndpoint.requestParams || selectedEndpoint.requestBody) && (
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-400 font-mono mb-1">
                      Request Parameters / Body
                    </div>
                    <pre className="p-3 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-800 overflow-x-auto">
                      <code>
                        {selectedEndpoint.requestBody || selectedEndpoint.requestParams}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Response Payload */}
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-zinc-400 font-mono mb-1">
                    <span>Response Payload (JSON 200 OK)</span>
                    <button
                      onClick={() => handleCopy(selectedEndpoint.responsePayload, "resp")}
                      className="text-blue-600 hover:text-blue-800 lowercase font-normal"
                    >
                      {copiedId === "resp" ? "copied!" : "copy json"}
                    </button>
                  </div>
                  <pre className="p-3.5 rounded border border-zinc-300 bg-zinc-900 text-zinc-100 text-[11px] font-mono overflow-x-auto max-h-64 leading-relaxed">
                    <code>{selectedEndpoint.responsePayload}</code>
                  </pre>
                </div>

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Status Codes: {selectedEndpoint.statusCodes}</span>
                  <span>FastAPI Async Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
