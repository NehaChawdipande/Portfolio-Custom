import React from "react";
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import IconButton from "@mui/material/IconButton";
import "./Journey.scss";

const Journey = (): JSX.Element => {
  return (
    <div className="page2" style={{ gridTemplateColumns: "45% 55%"}}>
       <div className="responsiveImg2">
        <img id="dev" src="/journey.png" alt="dev" />
      </div>
      <div className="text" >
        <h1 id="hi" style={{ marginBottom: "0"}}>Journey</h1>
        <h3 style={{ marginTop: "0", color:"#7a887b"}}>Still a long way to go..</h3>
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Custom Software Development Analyst @Accenture
              <br/>
              <strong style={{color:"#7a887b"}}>Feb 2023 - Present</strong>
              </h4>
        </div>
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Application Development Analyst @Accenture <br/>
             <strong style={{color:"#7a887b"}}> Sep 2022 - Jan 2023 </strong>
              </h4>
        </div>

        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Application Development Associate @Accenture
                <br/>
                <strong style={{color:"#7a887b"}}> Jun 2021 - Jul 2022 </strong>
              </h4>
        </div>
        
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Intern @TechMahindra
                <br />
                <strong style={{color:"#7a887b"}}> March 2021 - May 2021</strong>
              </h4>
        </div>
      </div>
    </div>
  );
};
export default Journey;
