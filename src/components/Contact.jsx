import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import {
  personalInfo,
} from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact">

      <h2 className="section-title">
        Let's Connect
      </h2>

      <div className="glass contact-card">

        <div className="contact-grid">

          <div className="contact-left">

            <h3>
              Open To GenAI Opportunities
            </h3>

            <p>
              Interested in discussing
              Generative AI, LLM Engineering,
              RAG Systems, AI Platforms,
              Agentic AI or enterprise AI
              transformation?
            </p>

            <p>
              I'm always open to connecting
              with recruiters, hiring managers,
              fellow engineers and AI enthusiasts.
            </p>

          </div>

          <div className="contact-right">

            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-link"
            >
              <MdEmail size={22} />
              <span>
                {personalInfo.email}
              </span>
            </a>

            <div className="contact-link">
              <MdLocationOn size={22} />
              <span>
                {personalInfo.location}
              </span>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;