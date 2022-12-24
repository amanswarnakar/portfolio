import React, { useEffect, useState } from "react";
import Logo from "../images/Red Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DraftsIcon from "@mui/icons-material/Drafts";

const Sidebar = (props) => {
  const { selected, setSelected } = props;
  const [tabs, setTabs] = useState([
    {
      id: 1,
      link: "/#home",
      icon: <HomeIcon />,
      name: "Home",
      active: true,
    },
    {
      id: 2,
      link: "/#about",
      icon: <PersonIcon />,
      name: "About",
      active: false,
    },
    {
      id: 3,
      link: "/#xp",
      icon: <WorkIcon />,
      name: "Experience",
      active: false,
    },
    {
      id: 4,
      link: "/#edu",
      icon: <SchoolIcon />,
      name: "Education",
      active: false,
    },
    {
      id: 5,
      link: "/#contact",
      icon: <DraftsIcon />,
      name: "Contact",
      active: false,
    },
  ]);


  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img className="sidebar-logo" src={Logo} alt="Logo" />
        <ul>
          {tabs.map((tab) => {
            return (
              <a
                key={tab.id}
                onClick={() => {
                  setSelected(tab.id);
                }}
                href={tab.link}
                // className="nav-item"
              >
                <li className={tab.id == selected ? "active" : null}>
                  <div className="display-icon">{tab.icon}</div>
                  <span>{tab.name}</span>
                </li>
              </a>
            );
          })}
          {/* <a href="/#home">
            <li className="active">
              <div className="display-icon">
                <HomeIcon />
              </div>
              <span>Home</span>
            </li>
          </a>
          
          <a href="/#about">
            <li>
              <div className="display-icon">
                <PersonIcon />
              </div>
              <span>About</span>
            </li>
          </a>

          <a href="/#xp">
            <li>
              <div className="display-icon">
                <WorkIcon />
              </div>
              <span>Experiences</span>
            </li>
          </a>

          <a href="/#edu">
            <li>
              <div className="display-icon">
                <SchoolIcon />
              </div>
              <span>Education</span>
            </li>
          </a>

          <a href="/#contact">
            <li>
              <div className="display-icon">
                <DraftsIcon />
              </div>
              <span>Contact</span>
            </li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
