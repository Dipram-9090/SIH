"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, Menu, X, ChevronRight, Binary, Terminal, LayoutDashboard } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  number: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Hero", href: "#hero", number: "01" },
  { name: "Problem Statement", href: "#problem-statement", number: "02" },
  { name: "Problem Solving", href: "#problem-solving", number: "03" },
  { name: "System Architecture", href: "#architecture", number: "04" },
  { name: "Data Pipeline", href: "#pipeline", number: "05" },
  { name: "Tech Stack", href: "#tech-stack", number: "06" },
  { name: "Roadmap", href: "#roadmap", number: "07" },
  { name: "Graph Analytics", href: "#graph-analytics", number: "08" },
  { name: "AI Detection", href: "#ai-detection", number: "09" },
  { name: "Explainable AI", href: "#explainability", number: "10" },
  { name: "Dashboard Mockup", href: "#dashboard-mockup", number: "11" },
  { name: "API Architecture", href: "#api-architecture", number: "12" },
  { name: "Database Schema", href: "#database-schema", number: "13" },
  { name: "User Workflow", href: "#user-workflow", number: "14" },
  { name: "Future Enhancements", href: "#future-enhancements", number: "15" },
  { name: "Summary", href: "#summary", number: "16" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-zinc-200 shadow-sm"
          : "bg-white border-b border-zinc-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            className="flex items-center space-x-2 text-zinc-900 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white">
              <Binary className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 flex items-center gap-1.5">
                BTC INVESTIGATION <span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-300 bg-zinc-100 text-zinc-700">SIH 2026</span>
              </span>
              <span className="text-[11px] text-zinc-500 hidden sm:inline">
                AI Cyber Forensic Architecture
              </span>
            </div>
          </a>
        </div>

        {/* Quick Section Navigator Dropdown (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs">
          {[
            { name: "Architecture", href: "#architecture" },
            { name: "Pipeline", href: "#pipeline" },
            { name: "AI Models", href: "#ai-detection" },
            { name: "XAI Alert", href: "#explainability" },
            { name: "Dashboard", href: "#dashboard-mockup", isDashboard: true },
            { name: "Roadmap", href: "#roadmap" }
          ].map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded relative transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1 ${
                  isActive
                    ? "bg-zinc-900 text-white font-bold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {link.isDashboard && <LayoutDashboard className="w-3.5 h-3.5" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center space-x-3">
          <a
            href="#dashboard-mockup"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            Live Mockup
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-zinc-200 text-zinc-700 hover:bg-zinc-100 lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white max-h-[80vh] overflow-y-auto px-4 py-4 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-3 py-1">
            Table of Contents (16 Sections)
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2 text-xs rounded transition-colors ${
                activeSection === item.href.substring(1)
                  ? "bg-zinc-100 text-blue-600 font-bold"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-zinc-400">{item.number}</span>
                <span>{item.name}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
