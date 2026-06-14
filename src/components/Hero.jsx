import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  personalInfo,
  stats,
} from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="hero-left">

          <div className="hero-badge">
            Microsoft Certified • GenAI Engineer • 3 Years Experience
          </div>

          <h1>
            Building
            <span className="gradient-text">
              {" "}Enterprise AI Systems
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Generative AI Engineer",
              1500,
              "Enterprise AI Solutions Builder",
              1500,
              "RAG Specialist",
              1500,
              "LLM Application Developer",
              1500,
              
            ]}
            wrapper="h2"
            repeat={Infinity}
            speed={50}
            className="typing-text"
          />

          <p className="hero-description">
            I'm Swapnanil Dey, a Generative AI Engineer
            specializing in enterprise AI assistants,
            Retrieval-Augmented Generation systems,
            LLM observability and scalable AI platforms.
          </p>

          <div className="hero-buttons">

            <a
              className="btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={28} />
            </a>

            <a href={`mailto:${personalInfo.email}`}>
              <MdEmail size={28} />
            </a>

          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div
                key={item.label}
                className="glass stat-card"
              >
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="hero-right">

          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-image"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;