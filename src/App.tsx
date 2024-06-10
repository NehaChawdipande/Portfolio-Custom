import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { motion } from "framer-motion";
import Contact from "./organisms/Contact/Contact";

import "./App.scss";
import Home from "./pages/Home";
import MyJourney from "./pages/MyJourney";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <div className="App">
      <div id="nav">
        <h2  className="logotext"
        >Portfolio</h2>
        <ul id="navigation">
          <li className="scaleOnHoverGold">
            <div>
              <Link className="navLink" to="/">
                Home
              </Link>
            </div>
          </li>
          <li className="scaleOnHoverGold">
            <div>
              <Link className="navLink" to="/my-work">
                Work
              </Link>
            </div>
          </li>
          <li className="scaleOnHoverGold">
            <div>
              <Link className="navLink" to="/contact">
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="my-work" element={<MyJourney />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <footer className="myFooter">
        
        <div style={{display: "flex", alignItems: "center"}}>
        <img src="/logoLight.png" alt="logo" style={{width:"3rem", height:"3rem"}} />
          <div> Neha Chawdipande</div>
        </div>
        <div style={{display: "flex", alignItems: "center", width: "40vw", maxWidth:"50vw", justifyContent:"space-around"}}>
          <a href="https://www.linkedin.com/in/neha-chawdipande/">Linkedin</a>
          <a href="https://github.com/NehaChawdipande">Github</a>
          <a href="https://medium.com/@nehachawdipande10">Medium</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
