import React from "react";
import Logo from "../images/Red Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DraftsIcon from "@mui/icons-material/Drafts";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img className="sidebar-logo" src={Logo} alt="Logo" />
        <ul>
          <a href="/#home" id="home-page">
            <div className="display-icon">
              <HomeIcon />
            </div>
            <span>Home</span>
          </a>

          <a href="/#about" id="about-page">
            <div className="display-icon">
              <PersonIcon />
            </div>
            <span>About</span>
          </a>

          <a href="/#xp" id="experiences-page">
            <div className="display-icon">
              <WorkIcon />
            </div>
            <span>Experiences</span>
          </a>

          <a href="/#edu" id="education-page">
            <div className="display-icon">
              <SchoolIcon />
            </div>
            <span>Education</span>
          </a>

          <a href="/#contact" id="contact-page">
            <div className="display-icon">
              <DraftsIcon />
            </div>
            <span>Contact</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
