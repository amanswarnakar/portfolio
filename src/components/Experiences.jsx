import React from "react";
import PageHeader from "./PageHeader";
import WorkIcon from "@mui/icons-material/Work";

const Experiences = () => {
  let job1join = new Date("01-02-2022");

  const works = [
    {
      id: 1,
      startDate: new Date("2022-08-01"),
      endDate: new Date("2022-10-31"),
      title: "Software Development Intern",
      company: "Studio137 Digital Media Solutions",
      details:
        "Building and working on multiple ReactJS, NextJS projects, working on the APIs in NodeJS and managing MySQL databases related to them.",
      link: "https://drive.google.com/file/d/1tCGFgdLDqtdqvAAxD1E7g-yC5QV7kEBR/view",
    },
    {
      id: 2,
      startDate: new Date("2022-02-01"),
      endDate: new Date("2022-03-31"),
      title: "Software Development Intern",
      company: "Trainity",
      details: `Hands-on experience in HTML, CSS while building the frontend of multiple websites along with building the backend with NodeJS, ExpressJS, MongoDB.`,
      link: "https://drive.google.com/file/d/1EOgRnOX1TKI8FcfpUJ1WqGIR9Dbqy4kV/view",
    },
  ];

  const WorkCard = ({ details }) => {
    return (
      <div className="work-card">
        <div className="circle">
          <WorkIcon />
        </div>
        <div className="time-duration">
          <span className="time-duration-chip less-spread">
            {details.startDate.toLocaleDateString("en-US", { month: "short" }) +
              " '" +
              details.startDate.toLocaleDateString("en-US", {
                year: "2-digit",
              })}
            {" - "}
            {details.endDate.toLocaleDateString("en-US", { month: "short" }) +
              " '" +
              details.endDate.toLocaleDateString("en-US", { year: "2-digit" })}
          </span>
        </div>
        <a target="_blank" href={details.link}>
          <div className="name less-spread bolder">{details.title}</div>
        </a>
        <div className="company-name bold">{details.company}</div>
        <div className="details">{details.details}</div>
      </div>
    );
  };

  const projects = [
    {
      id: 1,
      startDate: new Date("2022-02-01"),
      endDate: new Date("2022-03-31"),
      title: "FunStudy",
      company: "Trainity",
      details: `A Learning Management System with user authentication that allows user to manage their daily tasks efficiently 
      and focus on their academic courses`,
      link: "",
    },
  ];

  const Project = ({ details }) => {
    return (
      <div className="work-card">
        <div className="circle">
          <WorkIcon />
        </div>
        <div className="time-duration">
          <span className="time-duration-chip less-spread">
            {details.startDate.toLocaleDateString("en-US", { month: "short" }) +
              " '" +
              details.startDate.toLocaleDateString("en-US", {
                year: "2-digit",
              })}
            {" - "}
            {details.endDate.toLocaleDateString("en-US", { month: "short" }) +
              " '" +
              details.endDate.toLocaleDateString("en-US", { year: "2-digit" })}
          </span>
        </div>
        <a target="_blank" href={details.link}>
          <div className="name less-spread bolder">{details.title}</div>
        </a>
        <div className="details">{details.details}</div>
      </div>
    );
  };

  return (
    <div id="xp" className="xp page">
      <PageHeader frontTitle="WORK" rearTitle="EXPERIENCES" />

      {/* 
      work exp
      projects
      */}

      <div className="work-xp-container">
        {works.map((e) => (
          <WorkCard key={e.id} details={e} />
        ))}
      </div>
      <div style={{ marginTop: "-125px" }}>
        <PageHeader frontTitle="PROJECTS" rearTitle="PROJECTS" />
      </div>
      <div className="projects-container">
        {projects.map((e) => (
          <Project key={e.id} details={e} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
