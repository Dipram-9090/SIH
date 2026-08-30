"use client";

import React, { useState, useEffect } from "react";
import { Binary, Menu, X, Terminal, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation pills
      const sections = [
        "architecture",
        "pipeline",
        "ai-detection",
        "explainability",
        "dashboard-mockup",
        "roadmap"
      ];
      
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-zinc-200 dark:border-zinc-800 shadow-xs"
          : "bg-white dark:bg-zinc-950 border-zinc-200/80 dark:border-zinc-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center space-x-2.5 focus:outline-none"
            aria-label="Bitcoin Investigation System Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-950 font-mono font-bold text-sm shadow-sm">
              <Binary className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                BTC INVESTIGATION <span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">SIH 2026</span>
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:inline">
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
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                {link.isDashboard && <LayoutDashboard className="w-3.5 h-3.5" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Theme Switcher */}
        <div className="flex items-center space-x-2.5">
          {/* Theme Switcher */}
          <ThemeToggle />

          <a
            href="#dashboard-mockup"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            Live Mockup
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-2">
          <div className="flex flex-col space-y-1 text-xs">
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              System Architecture
            </a>
            <a
              href="#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              Data Pipeline Stages
            </a>
            <a
              href="#graph-analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              Graph Analytics Theory
            </a>
            <a
              href="#ai-detection"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              AI Detection Engine
            </a>
            <a
              href="#explainability"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              Explainable AI (XAI)
            </a>
            <a
              href="#dashboard-mockup"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/40"
            >
              Investigation Dashboard
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            >
              Implementation Roadmap
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
