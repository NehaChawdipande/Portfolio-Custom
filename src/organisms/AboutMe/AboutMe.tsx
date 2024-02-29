import React from "react";

const AboutMe = (): JSX.Element => {
  return (
    <div className="page2" id="page2">
      <div className="responsiveImg2">
        <img id="dev" src="/12.png" alt="dev" />
      </div>
      <div className="text2" >
        <h1 id="hi" style={{ color: "#ececec" , marginBottom: "0"}} >
          About me
        </h1>
        <h5 className="subtext" style={{ color: "#ececec" , marginBottom: "0"}}>
         Custom Software Developer Analyst
        </h5>
        <h3 className="highlight" style={{ display: "inline" }}>
          @Accenture Solutions Pvt. Ltd.
        </h3>
        <br />
       <h5 className="subtext" style={{ color: "#ececec", fontWeight: "100", fontSize:"14px"}}>
        I'm a passionate software developer with <strong className="highlight"> over 2.5 years </strong> of experience building apps, components and features that work across different devices (web, mobile, and hybrid). With strong skills in <strong className="highlight">JavaScript</strong>  and have solid understanding of frameworks and libraries like <strong className="highlight"> React.js, Angular, and Vue.js; </strong> I have a strong personal brand known for  <strong className="highlight">  high quality </strong> and for creating smooth-running and user-friendly experiences along with writing clean code and making sure the app adapts to different screens.
        </h5>
        <h5 className="subtext" style={{ color: "#ececec", fontWeight: "100", fontSize:"14px"}}>
        I love working with all kinds of teams and can explain technical stuff in a way everyone can understand. I'm also a problem solver and always on the lookout for new and cool things in web development.
        </h5>
      </div>
    </div>
  );
};
export default AboutMe;
