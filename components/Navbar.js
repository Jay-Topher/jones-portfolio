import colors from "../constants/colors";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#" className="brand">
          Jones Ogolo
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#work-history">Experience</a>
          </li>
          <li>
            <a href="mailto:jones.ogolo@gmail.com" className="cta">
              Hire Me
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(44, 44, 44, 0.92);
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
          color: ${colors.brown};
          opacity: 0.85;
        }

        @media only screen and (max-width: 600px) {
          .nav-links {
            gap: 2rem;
          }

          .nav-links li:nth-child(2),
          .nav-links li:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
