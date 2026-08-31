export interface SectionItem {
  id: string;
  num: string;
  name: string;
  shortName: string;
  mobileName: string;
  isDashboard?: boolean;
}

export const DOCUMENT_SECTIONS: SectionItem[] = [
  { id: "hero", num: "01", name: "Overview & Visual Graph", shortName: "Overview", mobileName: "Overview & Visual Graph" },
  { id: "problem-statement", num: "02", name: "Problem Statement", shortName: "Problem", mobileName: "Problem Statement" },
  { id: "problem-solving", num: "03", name: "What Problem Are We Solving?", shortName: "Solution", mobileName: "What Problem Are We Solving?" },
  { id: "architecture", num: "04", name: "Complete System Architecture", shortName: "Architecture", mobileName: "System Architecture" },
  { id: "pipeline", num: "05", name: "Full Data Pipeline", shortName: "Pipeline", mobileName: "Data Pipeline Stages" },
  { id: "tech-stack", num: "06", name: "Tech Stack", shortName: "Tech Stack", mobileName: "Technology Stack" },
  { id: "roadmap", num: "07", name: "Implementation Roadmap", shortName: "Roadmap", mobileName: "Implementation Roadmap" },
  { id: "graph-analytics", num: "08", name: "Graph Analytics", shortName: "Graph Analytics", mobileName: "Graph Analytics Theory" },
  { id: "ai-detection", num: "09", name: "AI Detection Engine", shortName: "AI Models", mobileName: "AI Detection Engine" },
  { id: "explainability", num: "10", name: "Explainable AI (XAI)", shortName: "XAI Alert", mobileName: "Explainable AI (XAI)" },
  { id: "dashboard-mockup", num: "11", name: "Investigation Dashboard", shortName: "Dashboard", mobileName: "Investigation Dashboard", isDashboard: true },
  { id: "api-architecture", num: "12", name: "API Architecture", shortName: "API", mobileName: "API Architecture" },
  { id: "database-schema", num: "13", name: "Database Schema", shortName: "DB Schema", mobileName: "Database Schema" },
  { id: "user-workflow", num: "14", name: "User Workflow", shortName: "Workflow", mobileName: "User Workflow" },
  { id: "future-enhancements", num: "15", name: "Future Enhancements", shortName: "Enhancements", mobileName: "Future Enhancements" },
  { id: "summary", num: "16", name: "Final Summary", shortName: "Summary", mobileName: "Final Summary" },
];

export interface DesktopNavLink {
  name: string;
  href: string;
  id: string;
  isDashboard?: boolean;
}

export const DESKTOP_NAV_LINKS: DesktopNavLink[] = [
  { name: "Architecture", href: "#architecture", id: "architecture" },
  { name: "Pipeline", href: "#pipeline", id: "pipeline" },
  { name: "Roadmap", href: "#roadmap", id: "roadmap" },
  { name: "AI Models", href: "#ai-detection", id: "ai-detection" },
  { name: "XAI Alert", href: "#explainability", id: "explainability" },
  { name: "Dashboard", href: "#dashboard-mockup", id: "dashboard-mockup", isDashboard: true },
];

/**
 * Maps the currently visible section ID to the active desktop navigation pill.
 */
export function getActiveDesktopNavId(activeSectionId: string): string {
  switch (activeSectionId) {
    case "hero":
    case "problem-statement":
    case "problem-solving":
    case "architecture":
      return activeSectionId === "architecture" ? "architecture" : "";
    case "pipeline":
      return "pipeline";
    case "tech-stack":
    case "roadmap":
      return "roadmap";
    case "graph-analytics":
    case "ai-detection":
      return "ai-detection";
    case "explainability":
      return "explainability";
    case "dashboard-mockup":
    case "api-architecture":
    case "database-schema":
    case "user-workflow":
    case "future-enhancements":
    case "summary":
      return activeSectionId === "dashboard-mockup" ? "dashboard-mockup" : "";
    default:
      return "";
  }
}
