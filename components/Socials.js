import socialLinks from "../constants/socialLinks";

function Socials() {
  return (
    <aside className="socials">
      <div className="link-container">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            <item.icon color="#fff" />
          </a>
        ))}
      </div>

      <style jsx>{`
        .socials {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .link-container {
          background-color: #000000aa;
          border-radius: 10px 0 0 10px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          /* justify-content: space-between; */
        }

        .link-item {
          transition: all 0.3s ease-in;
        }

        .link-item:not(:last-child) {
          margin-bottom: 10px;
        }

        .link-item:hover {
          transform: scale(1.3);
        }

        /* @media only screen and (max-width: 800px) {
          .socials {
            display: none;
          }
        } */
      `}</style>
    </aside>
  );
}

export default Socials;
