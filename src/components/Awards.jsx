import { motion } from "framer-motion";
import { awards } from "../data/portfolioData";

function Awards() {
  return (
    <section id="awards">

      <h2 className="section-title">
        Awards & Recognition
      </h2>

      <div className="card-grid">

        {awards.map((award) => (

          <motion.a
            key={
              award.title +
              award.year
            }
            href={award.link}
            target="_blank"
            rel="noreferrer"
            className="glass award-card"
            whileHover={{
              scale: 1.03
            }}
          >

            <div className="award-year">
              {award.year}
            </div>

            <h3>
              {award.title}
            </h3>

            <p className="award-description">
              {award.description}
            </p>

            <div className="award-link">
              View Certificate →
            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}

export default Awards;