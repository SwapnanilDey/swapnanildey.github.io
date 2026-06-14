import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaSearch,
} from "react-icons/fa";

import { projects } from "../data/portfolioData";

const icons = [
  <FaRobot size={35} />,
  <FaSearch size={35} />,
  <FaBrain size={35} />,
];

function Projects() {
  return (
    <section id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="card-grid">

        {projects.map(
          (project, index) => (
            <motion.div
              key={project.title}
              className="glass project-card"
              whileHover={{
                y: -10,
              }}
            >

              <div className="project-icon">
                {icons[index]}
              </div>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-highlights">

                {project.highlights.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

              <div className="skills-container">

                {project.technologies.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

            </motion.div>
          )
        )}

      </div>

    </section>
  );
}

export default Projects;