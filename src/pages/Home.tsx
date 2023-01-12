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
    </>
  );
};
export default Home;
