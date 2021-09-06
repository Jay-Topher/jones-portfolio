import colors from "../constants/colors";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <p className="footer-text">
          Created by Jones Ogolo &copy; {new Date().getFullYear()}, All Rights
          Reserved.
        </p>
      </div>
      <style jsx>{`
        .footer {
          padding: 1.5rem;
          font-size: 1.4rem;
          text-align: center;
          background-color: ${colors.brown};
          color: ${colors.white};
        }
      `}</style>
    </footer>
  );
}

export default Footer;
