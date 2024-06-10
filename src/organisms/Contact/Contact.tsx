import React from "react";
import ContactForm from "./ContactForm";


const Contact = (): JSX.Element => {
  return (

    <div className="page3" id="page4" style={{gridTemplateColumns: "45% 55%", minHeight: "80vh"}}>
         
      <div className="responsiveImg2" style={{margin: "0 18px"}}>
      
        <img id="dev" src="/15.png" alt="dev" style={{ marginTop: "0" }} />
      </div>
      <div className="text2">
      <h1 id="hi" style={{ color: "#09211F", marginBottom: "12px"}}>
          Contact Me
        </h1>
        <ContactForm />
      </div>
      
    </div>

  );
};
export default Contact;
