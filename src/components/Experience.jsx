import { motion } from "framer-motion";

function Experience() {
  const projects = [
    {
      title: "Technology Service Copilot",
      period: "2023 - Present",
      stack:
        "Azure OpenAI • LangChain • Qdrant • FastAPI • AWS • Langfuse • MLflow",

      achievements: [
        "Built a RAG platform supporting 10,000+ internal documents.",
        "Integrated ServiceNow, SharePoint, Confluence and Bitbucket.",
        "Reduced support resolution time by 40%.",
        "Designed a real-time SSE step-streaming architecture.",
        "Built automated embedding pipelines using Qdrant.",
        "Developed AWS S3 ingestion connectors.",
        "Reduced manual ingestion effort by 70%.",
        "Integrated Langfuse and MLflow observability."
      ]
    },

    {
      title: "Knowledge Assistant",
      period: "2023 - 2024",
      stack:
        "Azure OpenAI • Azure Computer Vision • LangChain • Flask • CosmosDB",

      achievements: [
        "Built document and URL ingestion pipelines.",
        "Implemented OCR using Azure Computer Vision.",
        "Created chunking and embedding workflows.",
        "Implemented answer source attribution.",
        "Built feedback collection mechanisms.",
        "Generated product profiles using prompt engineering."
      ]
    },

    {
      title:
        "Explainable AI & Bias Detection System",

      period: "2023",
      stack:
        "Python • Flask • Explainable AI",

      achievements: [
        "Built local and global explainability APIs.",
        "Implemented fairness and bias analysis.",
        "Generated counterfactual explanations.",
        "Added GenAI-powered natural language narration.",
        "Supported .keras and .pkl image classification models."
      ]
    }
  ];

  return (
    <section id="experience">

      <h2 className="section-title">
        Experience
      </h2>

      <div className="company-header glass">

        <div className="company-info">

          <img
            src="/tcs.png"
            alt="TCS"
            className="company-logo"
          />

          <h3>
            Tata Consultancy Services
          </h3>

        </div>

        <p>
          Systems Engineer (GenAI Developer)
        </p>

        <span>
          August 2023 – Present
        </span>

      </div>

      <div className="experience-projects">

        {projects.map(
          (project, index) => (
            <motion.div
              key={index}
              className="glass project-experience-card"
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
            >
              <div className="project-header">

                <div>
                  <h3>
                    {String(index + 1).padStart(2,"0")}
                    {" • "}
                    {project.title}
                  </h3>

                  <p className="project-stack">
                    {project.stack}
                  </p>
                </div>

                <span className="project-period">
                  {project.period}
                </span>

              </div>

              <ul>

                {project.achievements.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </motion.div>
          )
        )}

      </div>

    </section>
  );
}

export default Experience;