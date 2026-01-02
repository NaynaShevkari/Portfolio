export const experiences = [
    {
      id: "aosenuma",
      company: "Aosenuma",
      role: "AI Developer Intern",
      period: "Sep 2025 – present",
      location: "Boston, USA",
      summary: "Building healthcare analytics with RAG pipelines and AI-powered recommendations",
      details: {
        description: "Engineered LongevAI, a healthcare analytics platform integrating RAG pipelines, OCR, and personalized AI-based case recommendations.",
        achievements: [
          "Implemented FastAPI microservices for document parsing and embedding search using Supabase pgvector, cutting retrieval latency by 45%",
          "Designed and deployed ETL workflows for structured data ingestion (CSV, PDF, Excel), automating validation and reducing manual preprocessing by 70%",
          "Built dashboards using React and D3.js for patient and financial insights, supporting sub-3s data rendering",
          "Streamlined CI/CD pipelines using GitHub Actions, Docker, and Zeabur achieving 3x faster release cycles"
        ],
        techStack: ["Python", "FastAPI", "React", "D3.js", "Supabase", "Docker", "GitHub Actions", "RAG", "OCR"]
      }
    },
    {
      id: "saintgobain",
      company: "Saint Gobain",
      role: "Consultant",
      period: "Sep 2022 – Dec 2023",
      location: "Mumbai, India",
      summary: "Led SAP-Salesforce integration and optimized backend processing",
      details: {
        description: "Led SAP-Salesforce integration for real-time sales order and BOM automation.",
        achievements: [
          "Reduced manual efforts by 60% through automation of sales order processing",
          "Optimized backend logic and SQL queries, boosting large-scale data processing efficiency by 93%",
          "Built reusable UI components and internal reporting tools, standardizing reporting across 3+ business modules"
        ],
        techStack: ["SAP", "Salesforce", "SQL", "Backend Development"]
      }
    },
    {
      id: "capgemini",
      company: "Capgemini",
      role: "Associate Consultant",
      period: "Sep 2018 – Sep 2022",
      location: "Mumbai, India",
      summary: "Developed ETL frameworks and SAP integrations for enterprise systems",
      details: {
        description: "Developed ETL automation frameworks for cross-module data migration and integrated SAP with external systems.",
        achievements: [
          "Achieved 73% higher efficiency through ETL automation frameworks",
          "Integrated SAP with external systems via APIs and IDocs for real-time production synchronization",
          "Built performance-tuned backend modules improving data pipeline reliability and load speed by 90%",
          "Supported multiple end-to-end project lifecycles, ensuring seamless deployment and post-go-live stability"
        ],
        techStack: ["SAP ABAP", "APIs", "IDocs", "ETL", "Backend Development"]
      }
    }
  ];