import colors from "../constants/colors";
import Button from "./Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero-main">
      <section className="container">
        <div className="flexed">
          <div className="flexed-text">
            <p className="greeting">Hello</p>
            <h1>I&apos;m Jones</h1>
            <p className="desc">Frontend Engineer</p>
            <div className="btn-container">
              <Button
                to="mailto:jones.ogolo@gmail.com"
                variant="filled"
                className="hire-btn"
              >
                Hire Me
              </Button>
              <Button to="#about" variant="outlined">
                Learn More
              </Button>
            </div>
          </div>
          <div className="image-container">
            <Image
              alt="jones"
              src="/jones-hero.webp"
              width={612}
              height={918}
              className="image"
              // layout="responsive"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-main {
          height: 100vh;
          background-color: #2c2c2c;
          background-image: linear-gradient(to right, #2c2c2c 70%, #ffb633 30%);
          color: #fff;
          display: flex;
          align-items: center;
          font-size: 1.6rem;
        }
        .flexed {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100vh;
        }

        h1 {
          font-family: "DM Serif Display", sans-serif;
          font-size: 10rem;
          margin: 0;
          color: ${colors.primary};
        }

        .greeting {
          margin-bottom: -15px;
          font-size: 2rem;
        }

        .desc {
          margin-top: -15px;
          font-size: 2.5rem;
        }

        .image-container {
          align-self: flex-end;
          max-height: 918px;
        }

        @media only screen and (max-width: 540px) {
          .hero-main {
            background-image: linear-gradient(
              to bottom,
              #2c2c2c 70%,
              #ffb633 30%
            );
            overflow: hidden;
          }

          .flexed {
            flex-direction: column;
            padding-top: 2rem;
          }

          h1 {
            line-height: 10rem;
            margin: 1rem 0;
            font-size: 6rem;
          }

          .flexed-text {
            align-self: flex-start;
          }

          .image-container {
            align-self: auto;
          }
        }
      `}</style>
      {/* <style jsx global>{`
        .image {
          filter: drop-shadow(2px 4px 4px #585858);
        }
      `}</style> */}
    </section>
  );
}

export default Hero;
