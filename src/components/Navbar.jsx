import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Awards",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        SD
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </div>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-nav">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;