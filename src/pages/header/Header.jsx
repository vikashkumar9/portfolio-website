import React, { useState } from "react";
import "./header.css";
import logoImage from "../../assets/logo.png";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logoImage} alt="logo" height="50px" width="50px" />
        </div>
        <div>
          <ul className={isMenuOpen ? "list" : "notList"}>
            <li className="header_list">
              <a href="#about">ABOUT</a>
            </li>

            <li className="header_list">
              <a href="#skills">SKILLS</a>
            </li>

            <li className="header_list">
              <a href="#projects"> PROJECTS</a>
            </li>

            <li className="header_list">
              <a href="#contact">CONTACT ME</a>
            </li>
          </ul>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 /> : <IoMdMenu />}
        </button>
      </header>
    </div>
  );
};
