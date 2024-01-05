import React from "react";
import "./about.css";
import profileImage from "../../assets/profileimage.jpg";
import { SocialMedia } from "../../components/SocialmediaIcons/SocialMedia";
export const About = () => {
  return (
    <>
      <section id="about" className="about_container">
        <div className="info-img">
          <div className="information">
            <p className="para">THIS IS ME</p>
            <h1>VIKASH</h1>
            <h1>TECHNICAL </h1>
            <p className="para">I,m Vikash. A Front-End Web Developer</p>

            <div className="d-grid  d-grid gap-2 d-md-blockcol-6">
              <button className="btn btn-warning " type="button">
                {" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1MYZ0fHAmAD026l_5F7m67zhpq3MJg7wq"
                  download
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
          <div className="picture">
            <img src={profileImage} className="image" alt="heroimg"></img>
          </div>
        </div>
        <div className="icons">
          {" "}
          <SocialMedia />
        </div>
      </section>
    </>
  );
};
