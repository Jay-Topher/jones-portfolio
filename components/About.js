import colors from "../constants/colors";
import Button from "./Button";
import Image from "next/image";
import JonesSit from "../public/jones-sit.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-main">
          <div className="about-img" data-aos="flip-down">
            <div className="img-container">
              <Image
                alt="jones"
                src={JonesSit}
                width={375}
                height={500}
                className="image"
                placeholder="blur"
                // layout="responsive"
              />
            </div>
          </div>
          <div className="text-container" data-aos="flip-up">
            <h2 className="title">About Me</h2>
            <p className="about-text">
              I&apos;m a frontend engineer with a passion for making dynamic,
              accessible and fully responsive user interfaces. In my career,
              I&apos;ve worked with remote companies and collaborated with dev
              teams to bring prototyped designs to life and achieve maximum user
              satisfaction.
              <span className="d-block">
                Feel free to contact me if you&apos;d ever like to make some
                magic. ✨
              </span>
            </p>
            <div className="btn-container">
              <Button
                to="mailto:jones.ogolo@gmail.com"
                variant="filled"
                className="hire-btn"
                isLink={true}
              >
                Hire Me
              </Button>
              <Button
                to="https://drive.google.com/file/d/1-cuDVLjtNDovQDHPdtmawMoG0N_a23ty/view?usp=sharing"
                variant="outlined"
                isLink={true}
                target="_blank"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          height: 60vh;
          background-color: ${colors.lightBrown};
        }

        .about-main {
          color: ${colors.white};
          display: flex;
          align-items: center;
          height: 100%;
        }

        .title {
          margin-top: 0;
          font-size: 5rem;
          position: relative;
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

        .about-text {
          font-size: 1.6rem;
        }

        .btn-container {
          margin-top: 2rem;
        }

        .about-img {
          flex: 1;
        }

        .text-container {
          flex: 1;
          font-size: 1.6rem;
        }

        @media only screen and (max-width: 800px) {
          .about {
            height: auto;
            padding: 3rem 0;
          }

          .about-img {
            display: none;
          }
        }

        .img-container {
          border: 4px solid ${colors.primary};
          max-width: 30rem;
          max-height: 30rem;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }

        .d-block {
          display: block;
        }
      `}</style>
    </section>
  );
}

export default About;
