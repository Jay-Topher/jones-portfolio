import { useState } from "react";
import { Menu, X } from "react-feather";
import colors from "../constants/colors";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work-history" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}>
          Jones Ogolo
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="mailto:jones.ogolo@gmail.com" className="cta">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown — always mounted so CSS transition works both ways */}
      <ul className={`mobile-menu${isOpen ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={close}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:jones.ogolo@gmail.com"
            className="cta"
            onClick={close}
          >
            Hire Me
          </a>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(44, 44, 44, 0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 182, 51, 0.2);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 6rem;
        }

        .brand {
          font-family: "DM Serif Display", sans-serif;
          font-size: 2rem;
          color: ${colors.primary};
          text-decoration: none;
          letter-spacing: 0.04em;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 3.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 1.5rem;
          color: ${colors.white};
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: ${colors.primary};
        }

        .nav-links .cta {
          background-color: ${colors.primary};
          color: ${colors.brown};
          padding: 0.8rem 2rem;
          border-radius: 4px;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .nav-links .cta:hover {
          opacity: 0.85;
        }

        /* Hamburger — hidden on desktop */
        .hamburger {
          display: none;
          background: none;
          border: none;
          color: ${colors.white};
          cursor: pointer;
          padding: 0.4rem;
          line-height: 0;
        }

        /* Mobile dropdown */
        .mobile-menu {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: max-height 0.3s ease, opacity 0.25s ease,
            transform 0.25s ease;
        }

        .mobile-menu.open {
          max-height: 40rem;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          padding: 1.2rem 0 1.6rem;
          border-top: 1px solid rgba(255, 182, 51, 0.15);
        }

        .mobile-menu li a {
          display: block;
          padding: 1.2rem 2.4rem;
          font-size: 1.6rem;
          color: ${colors.white};
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }

        .mobile-menu li a:hover {
          color: ${colors.primary};
          background-color: rgba(255, 182, 51, 0.06);
        }

        .mobile-menu .cta {
          margin: 0.8rem 2.4rem 0;
          display: inline-block;
          padding: 1rem 2rem;
          background-color: ${colors.primary};
          color: ${colors.brown};
          border-radius: 4px;
          font-weight: 600;
          font-size: 1.5rem;
          text-decoration: none;
        }

        @media only screen and (max-width: 640px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
