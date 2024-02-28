import React from "react";
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import IconButton from "@mui/material/IconButton";
import "./Journey.scss";

const Journey = (): JSX.Element => {
  return (
    <div className="page2"    style={{ gridTemplateColumns: "55% 45%"}}>
      <div className="text" >
        <h1 id="hi" style={{ marginBottom: "0"}}>Journey</h1>
        <h3 style={{ marginTop: "0"}}>Still a long way to go..</h3>
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Custom Software Development Analyst @Accenture | Sept 2024 - Preset</h4>
        </div>
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Application Development Analyst  @Accenture | Sept 2022 - Jan 2023</h4>
        </div>

        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Application Development Associate @Accenture| June 2021 - July 2022</h4>
        </div>
        
        <div className="markerLeft">
            <IconButton
                aria-label="checkpoint1">
                <GolfCourseIcon className="markerIcon" />
              </IconButton>
              <h4>Intern @TechMahindra| March 2021 - May 2021</h4>
        </div>
      </div>
      <div className="responsiveImg2">
        <img id="dev" src="/Journey.png" alt="dev" />
      </div>
    </div>
  );
};
export default Journey;
