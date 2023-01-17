import React from "react";

const AboutMe = (): JSX.Element => {
  return (
    <div className="page2" id="page2">
      <div className="responsiveImg2">
        <img id="dev" src="/11.png" alt="dev" />
      </div>
      <div className="text2">
        <h1 id="hi" style={{ color: "#ececec" }}>
          About me
        </h1>
        <body className="subtext" style={{ color: "#ececec" }}>
          Software Developer
        </body>
        <h3 className="highlight" style={{ display: "inline" }}>
          @Accenture
        </h3>
        <br />
        <br />
        <body className="subtext" style={{ color: "#ececec" }}>
          Solution-oriented and problem solver with{" "}
          <strong className="highlight">1.5+ years</strong> of professional experience{" "}
          <strong className="highlight"> building and maintaining</strong> web
          applications, components and features. Highly skilled in{" "}
          <strong className="highlight">communication, and collaboration</strong>.
          Completed 100+ mid-sized tasks in a span of a year and half and
          <strong className="highlight"> improved </strong>team output by
          <strong className="highlight"> 25%.</strong>
        </body>
      </div>
    </div>
  );
};
export default AboutMe;
