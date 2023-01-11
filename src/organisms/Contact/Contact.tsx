import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import SendIcon from "@mui/icons-material/Send";

const AboutMe = (): JSX.Element => {
  return (
    <div className="page2" id="page4">
      <div className="text2">
        <h1 id="hi" style={{ color: "#ececec" }}>
          Contact Me
        </h1>
        <body id="subtext" style={{ color: "#ececec" }}>
          ?Wanna chat
        </body>
        <h3 id="highlight" style={{ display: "inline" }}>
          !Send me a Message
        </h3>
        <br />
        <br />
        <body id="subtext">
          Oops! Contact form is still in progress.. Try{" "}
          <a
            id="highlight"
            href="https://www.linkedin.com/in/neha-chawdipande/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>{" "}
          instead
        </body>
      </div>
      <div className="responsiveImg2">
        <img id="dev" src="/15.png" alt="dev" style={{ marginTop: "0" }} />
        {/* <div className="contactForm">
          <TextField label="Name" variant="filled" />

          <TextField label="Email" variant="filled" />
        </div>
        <div className="contactForm">
          <TextField label="Message" variant="filled" />
          <IconButton
            aria-label="linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/neha-chawdipande/",
                "_blank"
              )
            }
          >
            <SendIcon id="highlight" />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};
export default AboutMe;
