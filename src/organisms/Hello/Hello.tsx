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
    <>
    <div className="name">
    <h2>NEHA CHAWDIPANDE</h2>
    <div style={{color: "grey"}}>Web developer</div>
    </div>
      <div className="page1">
                <div className="responsiveImg">
          <img id="dev" src="/14.png" alt="dev" />
        </div>
        <div className="text">
          <h1 id="hi">
            <ReactTypingEffect
              speed={150}
              eraseSpeed={70}
              eraseDelay={3000}
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
          <h2  >
          Hey there! I’m Neha, A creative Graphic, Ui and web developer based in India.
          </h2>
         <br/>
          {/* <div className="knowMoreButton">
            <button className="textButton" onClick={knowMore}>
              <h3 id="knowMore">Want to know more?</h3>
            </button>
          </div> */}
          <div className="social">
            {/* <h3 className="subtext" style={{ display: "block", marginBottom: "0" }}>
              Let's connect!
            </h3> */}
            <div className="socialList">
              <IconButton
              size="large"
                aria-label="linkedin"  className="socialButtons"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/neha-chawdipande/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon  className="socialButtons" />
              </IconButton>
              <IconButton aria-label="mail" className="socialButtons" size="large">
                <ContactMailIcon   className="socialButtons"
                  onClick={() => {
                    window.location.replace("/contact");
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>        
      </div>
    </>

  );
};
export default Hello;
