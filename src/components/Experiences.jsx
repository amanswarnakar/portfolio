import React from "react";
import PageHeader from "./PageHeader";
import WorkIcon from "@mui/icons-material/Work";

const Experiences = (props) => {
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
      startDate: new Date("2023-06-02"),
      endDate: new Date("2023-06-16"),
      title: "Twitter Clone",
      details: `A full-stack project with user authentication, featuring comprehensive functionality of tweeting, 
      commenting, liking, and following users. Implementation of real-time notification system using SWR.`,
      link: "https://gliitter.vercel.app/",
    },
    {
      id: 2,
      startDate: new Date("2022-02-01"),
      endDate: new Date("2022-03-31"),
      title: "FunStudy",
      details: `A Learning Management System with user authentication that allows user to manage their daily tasks efficiently 
      and focus on their academic courses.`,
      link: "https://funstudy.onrender.com/",
    },
    {
      id: 3,
      startDate: new Date("2022-05-01"),
      endDate: new Date("2022-05-20"),
      title: "ChatApp",
      details: `Real-time web chat application, enabling users to engage in instant communication and exchange messages in
      a dynamic and interactive manner.`,
      link: "https://amanswarnakar.github.io/ChatApp/frontend/",
    },
    {
      id: 4,
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-02-25"),
      title: "Steganography",
      details: `Unlocking secrets with the power of concealment: Discover the world of Steganography. Send secret messages to your friends via images.`,
      link: "https://steganograaphy.web.app/",
    },
    {
      id:5,
      startDate: new Date("2022-07-15"),
      endDate: new Date("2022-07-18"),
      title: "Quiz App",
      details: `Through these quizzes, people test their knowledge level, and also daily, they will examine themselves and grow regarding their knowledge and that they examine more if there's a competitor out there to beat them up!`,
      link: "https://sample-quizzery.web.app/",
    },
    {
      id: 6,
      startDate: new Date("2023-01-20"),
      endDate: new Date("2023-01-25"),
      title: "Pokédex",
      details: `The Pokédex keeps track of the Pokémon you've seen and caught. Use the Pokédex to learn more about the different species of Pokémon and their Evolutions.`,
      link: "https://pokedex-by-aman.web.app/",
    },
    {
      id: 7,
      startDate: new Date("2022-06-04"),
      endDate: new Date("2022-06-06"),
      title: "Real Estate E-Commerce",
      details: `Unlocking secrets with the power of concealment: Discover the world of Steganography. Send secret messages to your friends via images.`,
      link: "https://real-estatery.web.app/",
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
    <section id="experiences-page">
      <div id="xp" className="xp page">
        <PageHeader frontTitle="WORK" rearTitle="EXPERIENCES" />

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
    </section>
  );
};

export default Experiences;
