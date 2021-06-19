import colors from "../constants/colors";
import ProjectItem from "./ProjectItem";
import projects from "../constants/projects";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-main">
          <h2 className="title">Projects</h2>
          <div>
            {projects.map((project) => (
              <ProjectItem
                src={project.imgSrc}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                direction={project.direction}
                link={project.link}
                key={project.title}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects {
          min-height: 100vh;
          background-color: ${colors.brown};
          color: ${colors.white};
        }

        .projects-main {
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 5rem 0;
        }

        .title {
          font-size: 5rem;
          position: relative;
          margin-top: 0;
          align-self: flex-start;
          margin-bottom: 7rem;
        }

        .title::before {
          content: "";
          width: 170px;
          height: 10px;
          position: absolute;
          bottom: -10px;
          background-color: ${colors.primary};
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

export default Projects;
