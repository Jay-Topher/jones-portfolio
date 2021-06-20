import Image from "next/image";
import colors from "../constants/colors";
import Link from "next/link";

function ProjectItem({
  src,
  title,
  description,
  technologies,
  direction,
  link,
}) {
  return (
    <div className="item">
      {/* <div className="image"> */}
        <a href={link} target="_blank" rel="noreferrer" className="image">
          <Image alt="project site" src={src} width={840} height={488} />
        </a>
      {/* </div> */}
      <div className="text">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <div>
          {technologies.map((tech) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .item {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          margin-bottom: 5rem;
        }
        .image {
          flex: 1;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 3px 5px 10px 0px rgba(109, 235, 109, 0.41);
          -webkit-box-shadow: 3px 5px 10px 0px rgba(109, 235, 109, 0.41);
          -moz-box-shadow: 3px 5px 10px 0px rgba(109, 235, 109, 0.41);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: ${direction === "ltr" ? "2rem" : 0};
          margin-left: ${direction === "ltr" ? 0 : "2rem"};
          order: ${direction === "ltr" ? 1 : 2};
          text-decoration: none;
        }
        .text {
          flex: 1;
          order: ${direction === "ltr" ? 2 : 1};
          text-align: ${direction === "ltr" ? "left" : "right"};
          margin-left: ${direction === "ltr" ? "2rem" : 0};
          margin-right: ${direction === "ltr" ? 0 : "2rem"};
        }

        .tech {
          border-radius: 3px;
          background-color: ${colors.primary};
          color: ${colors.brown};
          padding: 3px 10px;
          font-family: "Roboto Mono", monospace;
          margin-right: ${direction === "ltr" ? "1rem" : 0};
          margin-left: ${direction === "ltr" ? 0 : "1rem"};
        }

        .title {
          position: relative;
          display: inline-block;
        }

        .title::before {
          content: "";
          width: 60%;
          height: 6px;
          position: absolute;
          bottom: -6px;
          background-color: ${colors.primary};
          border-radius: 10px;
          right: ${direction === "rtl" ? 0 : null};
        }
      `}</style>
    </div>
  );
}

export default ProjectItem;
