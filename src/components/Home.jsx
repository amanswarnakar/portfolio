import React from "react";
import Portfolio_Photo from "../images/Portfolio_Photo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = (props) => {
  const { setSelected } = props;
  return (
    <div>
      <div className="home" id="home">
        <div className="bg-color"></div>
        <div className="home-content">
          <img className="portfolio-photo" src={Portfolio_Photo} alt="" />
          <div className="home-about">
            <div className="primary-color bold">Hi! I'm Aman Swarnakar.</div>
            <div className="bolder more-spread">REACT DEVELOPER</div>
            <div className="small">
              I am a front-end developer from Pune. Focused on crafting clean &
              user-friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </div>
            <a href="/#about" onClick={() => setSelected(2)} className="btn bold">
              More about me <KeyboardArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
