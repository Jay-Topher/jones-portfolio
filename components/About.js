import colors from "../constants/colors";
import Button from "./Button";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-main">
          <div className="about-img"></div>
          <div className="text-container">
            <h2 className="title">About Me</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              mi eros. Donec non eleifend sapien, ac fermentum justo. Quisque
              purus neque, fermentum sed ex ut, luctus tincidunt metus. Proin
              dictum blandit velit nec finibus. Vivamus dictum volutpat nulla,
              ut dapibus quam ullamcorper a. Mauris sed ante ac nisi molestie
              vulputate eget ut dolor. Proin semper pellentesque mi, et dictum
              nisi lobortis ac. Nullam eleifend euismod lectus non blandit.
              Suspendisse potenti. Donec congue est eros, eu lobortis nisi
              volutpat nec. In hac habitasse platea dictumst. Nulla facilisi.
              Morbi id porta dui. Proin lectus ligula, commodo sit amet ipsum
              ut, efficitur efficitur purus. Donec iaculis, lorem vehicula
              lobortis mattis, purus purus viverra mauris, eu egestas orci
              lectus sed urna. Vivamus commodo sapien lectus, eget sollicitudin
              odio porta sed.
            </p>
            <div className="btn-container">
              <Button to="/" variant="filled" className="hire-btn">
                Hire Me
              </Button>
              <Button to="/" variant="outlined">
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
      `}</style>
    </section>
  );
}

export default About;
