import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import WorkHistory from "../components/WorkHistory";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import colors from "../constants/colors";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="Portfolio site by Jones Ogolo" />
        <meta
          name="keywords"
          content="jones, jones ogolo, frontend, frontend engineer, react, reactengineer, jonesogolo, ogolo"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jones Ogolo" />
        <meta name="theme-color" content={colors.brown} />

        <meta property="og:title" content="Jones Ogolo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jonesogolo.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/winter-cake/image/upload/c_fill,h_630,w_1200/v1631170362/jones/IMG_3516_dsw87g.jpg"
          key="ogimage"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video:-1, max-image-preview:large"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Jones Ogolo</title>
      </Head>

      <Hero />
      <About />
      <Projects />
      <WorkHistory />
      <Socials />
      <Footer />
    </div>
  );
}
