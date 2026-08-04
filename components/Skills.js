import colors from "../constants/colors";
import Title from "./Title";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "React Native",
    ],
  },
  {
    label: "State & Data",
    skills: ["Redux", "Zustand", "React Query"],
  },
  {
    label: "UI Libraries",
    skills: [
      "Material UI",
      "Semantic UI",
      "PrimeReact",
      "Tailwind CSS",
      "Styled-components",
    ],
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Tooling",
    skills: ["Docker", "Figma", "Vercel", "AWS", "Git"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-main">
          <h2 className="title">Skills</h2>
          <div className="groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="group">
                <h3 className="group-label">{group.label}</h3>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          background-color: ${colors.brown};
          color: ${colors.white};
          padding: 7rem 0;
        }

        .skills-main {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.2rem;
        }

        .group-label {
          font-size: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: ${colors.primary};
          margin: 0 0 1.2rem 0;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tag {
          font-size: 1.3rem;
          font-family: "Roboto Mono", monospace;
          background-color: ${colors.lightBrown};
          color: ${colors.white};
          border: 1px solid rgba(255, 182, 51, 0.3);
          border-radius: 4px;
          padding: 0.4rem 1rem;
          white-space: nowrap;
        }

        .title {
          margin-top: 0;
          font-size: 5rem;
          position: relative;
        }

        .title::before {
          content: "";
          width: 80px;
          height: 10px;
          position: absolute;
          bottom: -10px;
          background-color: ${colors.primary};
          border-radius: 10px;
        }

        @media only screen and (max-width: 800px) {
          .groups {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (max-width: 500px) {
          .groups {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
