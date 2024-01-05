import React from "react";
import "./skills.css";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import javascriptImage from "../../assets/javascript.png";
import reactjsImage from "../../assets/ReactJS.png";
import MongoDBImage from "../../assets/MongoDB.png";
import bootstrapImage from "../../assets/bootstrap.jpg";

export const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading"> SKILLS</h2>
      <div className="skills_container">
        <div className="skillcard">
          <img src={htmlImage} alt="HTML Logo" className="skills_image" />
          <span>HTML</span>
        </div>
        <div className="skillcard">
          <img src={cssImage} alt="css Logo" className="skills_image" />
          <span>CSS</span>
        </div>
        <div className="skillcard">
          <img
            src={javascriptImage}
            alt="javascript Logo"
            className="skills_image"
          />
          <span>JAVASCRIPT</span>
        </div>
        <div className="skillcard">
          <img src={reactjsImage} alt="reactjs Logo" className="skills_image" />
          <span>REACTJS</span>
        </div>
        <div className="skillcard">
          <img src={MongoDBImage} alt="mongodb Logo" className="skills_image" />
          <span>MONGODB</span>
        </div>
        <div className="skillcard">
          <img
            src={bootstrapImage}
            alt="bootstrap Logo"
            className="skills_image"
          />
          <span>Bootstrap</span>
        </div>
      </div>
    </section>
  );
};
