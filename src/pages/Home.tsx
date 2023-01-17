import * as React from "react";
import AboutMe from "../organisms/AboutMe/AboutMe";
import Contact from "../organisms/Contact/Contact";
import Hello from "../organisms/Hello/Hello";
import Skills from "../organisms/Skills/Skills";

const Home = () => {
  return (
    <>
      <br />
      <Hello />
      <AboutMe />
      <Skills />
      <Contact />
      <footer>
        <a
          id="highlight"
          href="https://www.storyset.com/"
          target="_blank"
          rel="noreferrer"
        >
          Illustrations by storyset
        </a>
      </footer>
    </>
  );
};
export default Home;
