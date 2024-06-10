import React from "react";

const AboutMe = (): JSX.Element => {
  return (
    <div className="page2" id="page2">
      <div className="text2" >
        <h3 id="hi" style={{ color: "#343434" }} >
          My Career so far
        </h3>
        <h4 style={{ fontWeight: "lighter", fontSize:"1rem" }}>
          So, I wouldn't call myself a coding whiz or anything, but I've been building custom software for the past 3 years. I'm pretty handy with JavaScript and those fancy frameworks like React and Angular.
          <br />   <br />
          Basically, I can cook up web apps, mobile apps, even a mix of both, all with a focus on making things run smooth and look sharp.Plus, I don't talk tech over people's heads – I can explain things in a way anyone can understand.
          <br />    <br /> Teaming up with others is my jam, so if you need a developer who can code and collaborate, that's me.
        </h4>
      </div>
      <div>
        <img src="/peek.png" alt="peek" className="peek" />
        <div style={{ display: "grid", gridAutoFlow: "column" }}>
          <div className="skill">
            {/* <img id="dev" src="/12.png" alt="dev" /> */}
            <h4>React JS </h4>
            <h4>
              Angular JS
            </h4>
            <h4>
              Vue JS
            </h4>
            <h4>
              Spline
            </h4><h4>
              Webflow
            </h4>
            <h4>
              SASS
              <br />
              CSS
              <br />
            </h4>
          </div>
          <div className="skill">
            <h4>
              Typescript
            </h4>
            <h4>
              Unity Dev
            </h4>
            <h4>
              Canva Design
            </h4>
            <h4>
              JIRA<br /> SonarQube
            </h4><h4>
              Karma <br /> JEST <br /> RTL
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
