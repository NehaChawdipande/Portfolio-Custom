import React from "react";

const Skills = (): JSX.Element => {
  return (
    <div className="page3">
      <div className="text">
        <h1 id="hi">Skills</h1>
        <body className="subtext" style={{ display: "inline" }}>
          Here are some of the{" "}
        </body>
        <h3 className="highlight" style={{ display: "inline" }}>
          frameworks, libraries, ect.
        </h3>
        <body className="subtext" style={{ display: "inline" }}>
          {" "}
          that I have experience with:
        </body>
        <br />
        <br />
        <div className="skills1">
          <h3>JavaScript</h3>
          <h5>TypeScript</h5>
          <h4 style={{ margin: 0 }}>Vue.js</h4>
        </div>
        <div className="skills1">
          <h5>Node.js</h5>
          <h3 style={{ margin: 0 }}>React.js</h3>
          <h4>Sass/scss</h4>
        </div>
        <div className="skills1">
          <h3>Nuxt.js</h3>
          <h5 style={{ margin: 0 }}>SLDS</h5>
          <h4>CSS</h4>
        </div>
        <div className="skills1">
          <h5>Jest & RTL</h5>
          <h3 style={{ margin: 0 }}>Bootstrap</h3>
          <h4>MUI</h4>
        </div>
      </div>
      <div className="responsiveImg2">
        <img id="dev" src="/12.png" alt="dev" />
      </div>
    </div>
  );
};
export default Skills;
