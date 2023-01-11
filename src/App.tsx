// import React, { useEffect, useState } from "react";
import React from "react";
// import ReactTypingEffect from "react-typing-effect";
// import { motion } from "framer-motion";

import "./App.css";
import AboutMe from "./organisms/AboutMe/AboutMe";
import Contact from "./organisms/Contact/Contact";
import Hello from "./organisms/Hello/Hello";
import Skills from "./organisms/Skills/Skills";

function App() {
  // const [offsetY, setOffsetY] = useState(0);
  // const [rotate, setRotate] = useState(false);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="App">
      <div id="nav">
        <a
          href="/"
          target="_self"
          style={{ marginLeft: "4%" }}
          className="scaleOnHover"
        >
          <img
            src="/logoLight.png"
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <ul id="navigation">
          <li className="scaleOnHover">
            <button className="textOnly">Home</button>
          </li>
          <li className="scaleOnHover">
            <button className="textOnly">Skills</button>
          </li>
          <li className="scaleOnHover">
            <button className="textOnly">Contact</button>
          </li>
        </ul>
      </div>
      <br />
      <Hello />
      <AboutMe />
      <Skills />
      <Contact />

      {/* <motion.img
        src="/me.png"
        id="me"
        // animate={{
        //   scale: 1,
        //   y: [0, 35, 20, 0],
        // }}
        transition={{ type: "tween", duration: 10, repeat: Infinity }}
      ></motion.img> */}
      {/*  */}

      {/* <motion.h2
        id="react"
        animate={{
          scale: 1,
        }}
        initial={{ scale: 0 }}
        transition={{ type: "tween", duration: 5, repeat: Infinity }}
      >
        React
      </motion.h2> */}
      {/* <motion.h2
        id="vue"
        drag
        whileDrag={{ scale: 1 }}
        animate={{
          scale: scale ? 1.5 : 1,
        }}
        onClick={() => setScale(!scale)}
        dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}

        // initial={{ scale: 0 }}
      >
        vue.js
      </motion.h2> */}
      <footer>
        <a
          id="highlight"
          href="https://www.freepik.com/author/stories"
          target="_blank"
          rel="noreferrer"
        >
          Illustrations by storyset
        </a>
      </footer>
    </div>
  );
}

export default App;
