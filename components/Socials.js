import { GitHub, Linkedin, Mail, Twitter } from "react-feather";
import socialLinks from "../constants/socialLinks";

function Socials() {
  return (
    <aside className="socials">
      <GitHub color="#fff" />

      <style jsx>{`
        .socials {
          background-color: #000000aa;
          padding: 15px;
          position: fixed;
          top: 50%;
          right:0;
        }
      `}</style>
    </aside>
  );
}

export default Socials;
