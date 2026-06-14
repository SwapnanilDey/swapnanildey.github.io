import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

function About() {
  return (
    <section id="about">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="section-title">
          About Me
        </h2>

        <div className="glass about-card">

          <p>
            {personalInfo.summary}
          </p>

          <br />

          <p>
            Experienced in Azure OpenAI,
            LangChain, FastAPI, Qdrant,
            Langfuse and MLflow across
            the entire GenAI lifecycle.
          </p>

          <br />

          <p>
            Passionate about building
            enterprise-grade AI systems
            that deliver measurable
            business impact.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default About;