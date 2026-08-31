"use client";

import React from "react";
import { NavigationProvider } from "@/context/NavigationContext";
import { Navbar } from "@/components/Navbar";
import { TableOfContents } from "@/components/TableOfContents";
import { HeroSection } from "@/components/HeroSection";
import { ProblemStatementSection } from "@/components/ProblemStatementSection";
import { ProblemSolvingSection } from "@/components/ProblemSolvingSection";
import { SystemArchitectureSection } from "@/components/SystemArchitectureSection";
import { DataPipelineSection } from "@/components/DataPipelineSection";
import { TechStackSection } from "@/components/TechStackSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { GraphAnalyticsSection } from "@/components/GraphAnalyticsSection";
import { AiDetectionSection } from "@/components/AiDetectionSection";
import { ExplainableAiSection } from "@/components/ExplainableAiSection";
import { InvestigationDashboardMockup } from "@/components/InvestigationDashboardMockup";
import { ApiArchitectureSection } from "@/components/ApiArchitectureSection";
import { DbSchemaSection } from "@/components/DbSchemaSection";
import { UserWorkflowSection } from "@/components/UserWorkflowSection";
import { FutureEnhancementsSection } from "@/components/FutureEnhancementsSection";
import { FinalSummarySection } from "@/components/FinalSummarySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <NavigationProvider>
      <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
        {/* Sticky Header */}
        <Navbar />

        {/* Floating Index / Table of Contents */}
        <TableOfContents />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problem Statement */}
        <ProblemStatementSection />

        {/* 3. What Problem Are We Solving? */}
        <ProblemSolvingSection />

        {/* 4. Complete System Architecture */}
        <SystemArchitectureSection />

        {/* 5. Full Data Pipeline */}
        <DataPipelineSection />

        {/* 6. Tech Stack */}
        <TechStackSection />

        {/* 7. Step-by-Step Implementation Roadmap */}
        <RoadmapSection />

        {/* 8. Graph Analytics Section */}
        <GraphAnalyticsSection />

        {/* 9. AI Detection Section */}
        <AiDetectionSection />

        {/* 10. Explainable AI */}
        <ExplainableAiSection />

        {/* 11. Investigation Dashboard Mockup */}
        <InvestigationDashboardMockup />

        {/* 12. API Architecture */}
        <ApiArchitectureSection />

        {/* 13. Database Schema */}
        <DbSchemaSection />

        {/* 14. User Workflow */}
        <UserWorkflowSection />

        {/* 15. Future Enhancements */}
        <FutureEnhancementsSection />

        {/* 16. Final Summary */}
        <FinalSummarySection />

        {/* Footer */}
        <Footer />
      </main>
    </NavigationProvider>
  );
}
