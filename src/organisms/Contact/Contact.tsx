import React from "react";
import ContactForm from "./ContactForm";


const Contact = (): JSX.Element => {
  return (
    <div className="page2" id="page4">
      <div className="responsiveImg2">
        <img id="dev" src="/15.png" alt="dev" style={{ marginTop: "0" }} />
      </div>
      <div className="text2">
        <h1 id="hi" style={{ color: "#ececec" }}>
          Contact Me
        </h1>
        <body className="subtext" style={{ color: "#ececec" }}>
          Wanna chat?
        </body>
        <h3 className="highlight" style={{ display: "inline" }}>
          Send me a Message!
        </h3>
        <br />
        <br />
        {/* <body className="subtext">
          Oops! Contact form is still in progress.. Try{" "}
          <a
            className="highlight"
            href="https://www.linkedin.com/in/neha-chawdipande/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>{" "}
          instead
        </body> */}
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
