import { GitHub, Linkedin, Mail, Twitter, FileText } from "react-feather";

const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jones-christopher/",
    icon: Linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/Jay-Topher",
    icon: GitHub,
  },
  // {
  //   name: "Twitter",
  //   link: "https://www.twitter.com/mr_jonce",
  //   icon: Twitter,
  // },
  {
    name: "Email",
    link: "mailto:jones.ogolo@gmail.com",
    icon: Mail,
  },
  {
    name: "CV",
    link: "https://drive.google.com/file/d/13otDL6crlM-QtnVljp8wBWfU7mnY3sso/view?usp=sharing",
    icon: FileText,
  },
];

export default socialLinks;
