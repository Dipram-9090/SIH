export interface TechItem {
  name: string;
  category: string;
  version?: string;
  role: string;
  whyUsed: string;
  tag: string;
}

export const TECH_STACK_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Layer",
    description: "Modern, high-performance web interface designed for investigative triage and visualization.",
    items: [
      {
        name: "Next.js",
        category: "Frontend",
        version: "14+ App Router",
        role: "Core Web Framework & Server-Side Rendering",
        whyUsed: "Enables fast page loads, modular routing, and seamless hybrid server/client data streams.",
        tag: "Framework"
      },
      {
        name: "TypeScript",
        category: "Frontend",
        version: "5.6+",
        role: "Strict Type Safety & Contract Integrity",
        whyUsed: "Guarantees robust type contracts between API responses and graph analytics data structures.",
        tag: "Language"
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        version: "3.4+",
        role: "Utility-First Monochrome Design System",
        whyUsed: "Permits precise pixel-level layout control with zero CSS runtime overhead and clean aesthetics.",
        tag: "Styling"
      },
      {
        name: "shadcn/ui",
        category: "Frontend",
        version: "Accessible Primitives",
        role: "Component Architecture",
        whyUsed: "Provides accessible, clean UI primitives customized with monochrome styling and sharp borders.",
        tag: "UI Library"
      },
      {
        name: "Cytoscape.js",
        category: "Frontend",
        version: "3.28+",
        role: "Interactive Graph Visualization Canvas",
        whyUsed: "High-performance canvas/WebGL rendering capable of smoothly manipulating 10,000+ nodes and edges.",
        tag: "Graph Viz"
      },
      {
        name: "Recharts",
        category: "Frontend",
        version: "2.13+",
        role: "Analytical Data Visualizations",
        whyUsed: "Lightweight SVG charting for transaction velocity, country distributions, and risk curves.",
        tag: "Charts"
      },
      {
        name: "React Query",
        category: "Frontend",
        version: "v5",
        role: "Async State & Caching Engine",
        whyUsed: "Optimistic updates, real-time polling, and caching for heavy graph analysis queries.",
        tag: "State Management"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Layer",
    description: "High-throughput asynchronous Python microservices for ingestion and computation.",
    items: [
      {
        name: "FastAPI",
        category: "Backend",
        version: "0.115+",
        role: "High-Performance Asynchronous REST API",
        whyUsed: "Built on Starlette/Uvicorn, delivering near-Go performance for data ingestion endpoints.",
        tag: "API Framework"
      },
      {
        name: "Python",
        category: "Backend",
        version: "3.11+",
        role: "Core Execution Runtime",
        whyUsed: "The industry standard for data science, forensic heuristics, and blockchain ledger decoding.",
        tag: "Core Runtime"
      },
      {
        name: "Pandas",
        category: "Backend",
        version: "2.2+",
        role: "Tabular Ingestion & Fast ETL",
        whyUsed: "Vectorized processing of millions of ledger rows with minimal memory overhead.",
        tag: "Data Processing"
      },
      {
        name: "NumPy",
        category: "Backend",
        version: "1.26+",
        role: "Array Matrix Mathematics",
        whyUsed: "Powers numerical graph metric transformations and feature normalization vectors.",
        tag: "Math Engine"
      },
      {
        name: "Pydantic",
        category: "Backend",
        version: "v2",
        role: "Data Validation & Serialization",
        whyUsed: "Strict schema validation guaranteeing that malformed transaction hashes never reach the graph builder.",
        tag: "Validation"
      },
      {
        name: "SQLAlchemy",
        category: "Backend",
        version: "2.0+",
        role: "Async ORM & Database Layer",
        whyUsed: "Type-safe database abstraction with connection pooling for PostgreSQL.",
        tag: "ORM"
      }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning Layer",
    description: "Unsupervised anomaly detection and entity clustering algorithms tailored for crypto forensics.",
    items: [
      {
        name: "Scikit-learn",
        category: "Machine Learning",
        version: "1.5+",
        role: "Core ML Framework",
        whyUsed: "Production-ready implementations of tree-based outlier isolation and density spatial clustering.",
        tag: "ML Core"
      },
      {
        name: "Isolation Forest",
        category: "Machine Learning",
        version: "Ensemble Algorithm",
        role: "High-Dimensional Anomaly Detection",
        whyUsed: "Identifies outlier wallets based on abnormal transaction velocity, unusual volumes, and hop timings.",
        tag: "Anomaly Detection"
      },
      {
        name: "DBSCAN",
        category: "Machine Learning",
        version: "Density Clustering",
        role: "Criminal Entity & Syndicate Grouping",
        whyUsed: "Groups co-spending wallets without requiring a predetermined number of clusters.",
        tag: "Clustering"
      }
    ]
  },
  {
    id: "graph",
    title: "Graph Analytics Layer",
    description: "Graph topological traversal and community detection engine.",
    items: [
      {
        name: "NetworkX",
        category: "Graph Analytics",
        version: "3.3+",
        role: "Graph Modeling & Centrality Computations",
        whyUsed: "Computes PageRank, Betweenness Centrality, In/Out degree ratios, and shortest path money trails.",
        tag: "Graph Network"
      }
    ]
  },
  {
    id: "database",
    title: "Database Layer",
    description: "Relational persistence and temporal indexing for billions of cryptographic records.",
    items: [
      {
        name: "PostgreSQL",
        category: "Database",
        version: "16+",
        role: "Relational & Graph Metadata Store",
        whyUsed: "ACID compliance, JSONB support for dynamic transaction scripts, and B-tree indexing on wallet hashes.",
        tag: "RDBMS"
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description: "Containerized, reproducible runtime environment built for rapid deployment at SIH.",
    items: [
      {
        name: "Docker",
        category: "Infrastructure",
        version: "Compose v2",
        role: "Multi-Container Orchestration",
        whyUsed: "Packages Frontend, Backend API, ML worker, and PostgreSQL into a single reproducible `docker-compose up`.",
        tag: "Containers"
      },
      {
        name: "Linux",
        category: "Infrastructure",
        version: "Ubuntu 22.04 LTS / Debian",
        role: "Production Host OS",
        whyUsed: "High I/O bandwidth, rock-solid POSIX compliance, and native support for low-latency network sockets.",
        tag: "Operating System"
      }
    ]
  }
];
