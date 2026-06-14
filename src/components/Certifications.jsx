import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section id="certifications">

      <h2 className="section-title">
        Certifications
      </h2>

      <div className="card-grid">

        {certifications.map((cert) => (

          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="glass cert-card"
          >

            <div className="cert-badge">
              CERTIFIED
            </div>

            <h3>
              {cert.title}
            </h3>

            <p>
              View Credential →
            </p>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Certifications;