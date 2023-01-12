import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { motion } from "framer-motion";

import "./App.css";
import Home from "./pages/Home";
import MyJourney from "./pages/MyJourney";
import MyProjects from "./pages/MyProjects";

function App() {
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
          <li className="scaleOnHoverRed">
            <div>
              <Link className="navLink" to="/">
                My Home
              </Link>
            </div>
          </li>
          <li className="scaleOnHoverRed">
            <div>
              <Link className="navLink" to="/my-projects">
                My Projects
              </Link>
            </div>
          </li>
          <li className="scaleOnHoverRed">
            <div>
              <Link className="navLink" to="/my-journey">
                My Journey
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="my-journey" element={<MyJourney />} />
      </Routes>

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
          href="https://www.storyset.com/"
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
