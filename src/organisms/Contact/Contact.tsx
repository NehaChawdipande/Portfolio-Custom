import React from "react";
import ContactForm from "./ContactForm";


const Contact = (): JSX.Element => {
  return (

    <div className="page3" id="page4">
         
      <div className="responsiveImg2" style={{margin: "0 18px"}}>
      <h1 id="hi" className="highlight" style={{ color: "#C9A730", marginBottom: "12px"}}>
          Contact Me
        </h1>
        <img id="dev" src="/15.png" alt="dev" style={{ marginTop: "0" }} />
      </div>
      <div className="text2">
      {/* <h5 className="highlight" >
          Wanna chat?  Feel free to reach out!
        </h5> */}
        {/* <h3 className="highlight" style={{ display: "inline" }}>
          Let's connect! Feel free to reach out..
        </h3>       */}
       
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
