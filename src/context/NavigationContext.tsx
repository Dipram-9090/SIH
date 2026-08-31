"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { DOCUMENT_SECTIONS, getActiveDesktopNavId } from "@/config/navigation";

interface NavigationContextType {
  activeSection: string;
  activeDesktopNavId: string;
  scrollToSection: (id: string, e?: React.MouseEvent) => void;
  isScrolled: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isLockedRef = useRef<boolean>(false);
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Smooth scroll with instant UI feedback and lock
  const scrollToSection = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    // 1. Immediately update active state so the UI highlights without lag
    setActiveSection(id);

    // 2. Lock scroll spy updates during the smooth scroll transition
    isLockedRef.current = true;
    if (lockTimeoutRef.current) {
      clearTimeout(lockTimeoutRef.current);
    }

    // 3. Scroll to target element (honors scroll-margin-top from CSS)
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // 4. Update browser URL hash cleanly without instant jump
    if (typeof window !== "undefined" && window.history?.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }

    // 5. Unlock once scrolling finishes
    const handleScrollEnd = () => {
      isLockedRef.current = false;
      setActiveSection(id);
      window.removeEventListener("scrollend", handleScrollEnd);
    };

    if (typeof window !== "undefined" && "onscrollend" in window) {
      window.addEventListener("scrollend", handleScrollEnd, { once: true });
    }

    // Safety timeout in case scrollend doesn't trigger
    lockTimeoutRef.current = setTimeout(() => {
      isLockedRef.current = false;
      setActiveSection(id);
    }, 850);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const computeActiveSection = () => {
      const scrollY = window.scrollY;

      // Update header sticky style
      setIsScrolled(scrollY > 20);

      // If user clicked a navigation button and smooth scroll is running, do not overwrite
      if (isLockedRef.current) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Edge case 1: Top of page
      if (scrollY < 60) {
        setActiveSection(DOCUMENT_SECTIONS[0].id);
        return;
      }

      // Edge case 2: Near bottom of page (highlight last section)
      if (viewportHeight + scrollY >= documentHeight - 40) {
        setActiveSection(DOCUMENT_SECTIONS[DOCUMENT_SECTIONS.length - 1].id);
        return;
      }

      // Detection threshold line (120px from viewport top, just below the 64px header and 80px scroll-margin)
      const DETECTION_LINE = 120;

      let matchedSectionId = "";

      for (let i = 0; i < DOCUMENT_SECTIONS.length; i++) {
        const item = DOCUMENT_SECTIONS[i];
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        
        // If the top of the section is at or above the detection line,
        // and its bottom is still below the detection line, it is the primary visible section.
        if (rect.top <= DETECTION_LINE && rect.bottom > DETECTION_LINE) {
          matchedSectionId = item.id;
          break;
        }
      }

      // Fallback: If in between, take the section whose top is closest above or at DETECTION_LINE
      if (!matchedSectionId) {
        for (let i = DOCUMENT_SECTIONS.length - 1; i >= 0; i--) {
          const item = DOCUMENT_SECTIONS[i];
          const el = document.getElementById(item.id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= DETECTION_LINE) {
            matchedSectionId = item.id;
            break;
          }
        }
      }

      if (matchedSectionId) {
        setActiveSection(matchedSectionId);
      }
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(computeActiveSection);
    };

    // Initial check
    computeActiveSection();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const activeDesktopNavId = getActiveDesktopNavId(activeSection);

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        activeDesktopNavId,
        scrollToSection,
        isScrolled,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
