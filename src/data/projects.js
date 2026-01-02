export const projects = [
    {
      id: "longevai",
      title: "LongevAI Healthcare Platform",
      summary: "AI-powered healthcare analytics with RAG pipelines and personalized recommendations",
      period: "Sep 2025 – present",
      details: {
        description: "A comprehensive healthcare analytics platform that uses RAG pipelines, OCR technology, and AI to provide personalized case recommendations and insights.",
        features: [
          "RAG pipeline implementation for intelligent document retrieval",
          "OCR integration for automated document parsing",
          "Real-time patient and financial dashboards",
          "Automated ETL workflows for multi-format data ingestion"
        ],
        impact: "45% reduction in retrieval latency, 70% decrease in manual preprocessing, sub-3s dashboard rendering",
        techStack: ["FastAPI", "React", "D3.js", "Supabase", "pgvector", "Docker", "Python"],
        github: null,
        demo: null
      }
    },
    {
      id: "employee-attrition",
      title: "Employee Attrition Prediction",
      summary: "ML pipeline predicting employee attrition with 92% accuracy",
      period: "Mar 2025 – May 2025",
      details: {
        description: "Built an end-to-end machine learning pipeline to predict employee attrition using IBM HR dataset with 11K+ records and 25 features.",
        features: [
          "Random Forest model with 92% accuracy",
          "Feature importance analysis to identify top attrition drivers",
          "Automated preprocessing (encoding, normalization, imputation)",
          "Reusable model packaging with automated report generation"
        ],
        impact: "30% improvement in model robustness through automated preprocessing",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
        github: "your-github-link",
        demo: null
      }
    },
    {
      id: "landslide-analysis",
      title: "Global Landslide Risk Analysis",
      summary: "Unsupervised learning for landslide risk classification using NASA data",
      period: "Jan 2025 – Apr 2025",
      details: {
        description: "Analyzed NASA's Global Landslide Catalog (20K+ records) using unsupervised learning to classify high-risk zones and identify patterns.",
        features: [
          "t-SNE and Gaussian Mixture Models for risk zone clustering",
          "Interactive Power BI dashboards for global trend visualization",
          "Rainfall pattern analysis for landslide prediction",
          "Seasonal trigger identification"
        ],
        impact: "Revealed rainfall-driven patterns and seasonal triggers for landslide events",
        techStack: ["R", "GMM", "t-SNE", "ggplot2", "Leaflet", "Power BI"],
        github: "your-github-link",
        demo: null
      }
    }
  ];