import * as React from "react";
import AboutMe from "../organisms/AboutMe/AboutMe";
import Hello from "../organisms/Hello/Hello";
import Skills from "../organisms/Skills/Skills";
import Journey from "../organisms/Journey/Journey";

const Home = () => {
  return (
    <>
      <br />
      <Hello />
      <AboutMe />
       <Skills />
       <Journey/>
      <footer className="myFooter">
        <a
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
