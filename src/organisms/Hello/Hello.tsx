import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ReactTypingEffect from "react-typing-effect";
import * as constants from "./Home.constants.js";

const Hello = (): JSX.Element => {
  const knowMore = () => {
    const about = document.getElementById("page2");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };
  return (
      <div className="page1">
        <div className="text">
          <h1 id="hi">
            <ReactTypingEffect
              speed={50}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={1000}
              text={[
                "Hello!",
                "नमस्ते!",
                "Hola!",
                "你好!",
                "Bonjour!",
                "مرحبًا!",
              ]}
            />
          </h1>
          <h5 className="subtext" style={{ display: "inline" }}>
            My name is{" "}
          </h5>
          <h3 className="highlight" style={{ display: "inline" }} >
            Neha Chawdipande.
          </h3>
          <h5 className="subtext">I am a software developer based in India.</h5>
          <br />
          <h5 className="subtext" style={{ display: "inline" }}>
            I specialize in building{" "}
          </h5>
          <h5 className="highlight" style={{ display: "inline" }}>
            seamless and unique
          </h5>
          <h5 className="subtext" style={{ display: "inline" }}>
            {" "}
            web experiences carefully catered to the needs of your client.
          </h5>
          <br />
          <br />
          <div className="knowMoreButton">
            <button className="textButton" onClick={knowMore}>
              <h3 id="knowMore">Want to know more?</h3>
            </button>
          </div>
          <div className="social">
            <h3 className="subtext" style={{ display: "block", marginBottom: "0" }}>
              Let's connect!
            </h3>
            <br />
            <div className="socialList">
              <IconButton
                aria-label="linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/neha-chawdipande/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon className="highlight" />
              </IconButton>
              <IconButton aria-label="mail">
                <ContactMailIcon
                  className="highlight"
                  onClick={() => {
                    const contactForm = document.getElementById("page4");
                    if (contactForm)
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="responsiveImg">
          <img id="dev" src="/14.png" alt="dev" />
        </div>
        
      </div>
  );
};
export default Hello;
