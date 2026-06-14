function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>
          Swapnanil Dey
        </h3>

        <p>
          Generative AI Engineer
        </p>

        <p>
          Building Enterprise AI
          Assistants, RAG Systems
          and Production LLM Applications
        </p>

        <div className="footer-divider" />

        <p>
          © {new Date().getFullYear()} •
          All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;