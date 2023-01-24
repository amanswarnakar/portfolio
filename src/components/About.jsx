import React from "react";
import PageHeader from "./PageHeader";
// import Resume from "../media/Resume.pdf";

const About = () => {
  const date = new Date();
  const dob = new Date("2002-09-04");
  const age = ((date.getTime() - dob.getTime()) / 31536000000).toPrecision(2);
  const personalInfo = [
    {
      name: "Name",
      value: "Aman Swarnakar",
    },
    {
      name: "Email",
      value: "amanswarnakar2002@gmail.com",
    },
    {
      name: "Phone",
      value: "+91 9564829082",
    },
    {
      name: "Languages",
      value: "English, Hindi, Bengali",
    },
    {
      name: "Nationality",
      value: "Indian",
    },
    {
      name: "Age",
      value: age,
    },
  ];

  const skills = [
    {
      title: "C++",
      value: 90,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "HTML",
      value: 75,
    },
    {
      title: "CSS",
      value: 75,
    },
    {
      title: "NodeJS",
      value: 60,
    },
    {
      title: "MySQL ",
      value: 75,
    },
    {
      title: "NextJS",
      value: 70,
    },
    {
      title: "JavaScript",
      value: 80,
    },
    {
      title: "ExpressJS",
      value: 60,
    },
    {
      title: "MongoDB",
      value: 60,
    },
    {
      title: "Python",
      value: 55,
    },
  ];

  const SkillCard = (props) => {
    const { title, value } = props;
    let angle = parseInt(value * 360 / 100);
    if (angle <= 180) angle = angle + 90;
    else angle = angle - 90;
    angle = angle + "deg";
    const customStyle = {
      backgroundImage:
        "linear-gradient(" + angle + ", transparent 50%, #EF0000 50%), linear-gradient(90deg, transparent 50%, #EF0000 50%)",
    };
    return (
      <div className="skill-card">
        <div className="skill-circle">
          <div className="inner-circle bold">{title}</div>
          <div style={customStyle} className="colored-circle"></div>
        </div>
        {/* <div className="skill-title bold">{title}</div> */}
      </div>
    );
  };

  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id="about" className="about page">
      <PageHeader
        frontTitle="ABOUT"
        frontTitleSecondaryColor="ME"
        rearTitle="RESUME"
      />
      <div className="flex">
        <div className="w40">
          <h1 className="heading">PERSONAL INFO</h1>
          <div className="info-container">
            {personalInfo.map((info) => {
              return (
                <div key={info.value} className="info-card">
                  <div className="info-header">{info.name}</div>
                  <div className="info-value">{info.value}</div>
                </div>
              );
            })}
          </div>
          <div target="_blank" href="" className="btn bold">
            Download CV
          </div>
        </div>
        <div className="w60">
          <h1 className="heading">MY SKILLS</h1>
          <div className="skill-container">
            {skills.map((skill) => {
              return (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  value={skill.value}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 
      personal info
      skills
      */}
    </div>
  );
};

export default About;
