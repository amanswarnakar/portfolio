import React from "react";
import PageHeader from "./PageHeader";
import School from "@mui/icons-material/School";
const Education = () => {
  const Edu = [
    {
      id: 1,
      startDate: new Date("2020-09-01"),
      endDate: new Date("2024-06-31"),
      title: "Army Institute of Technology, Pune",
      course: "Bachelor of Engineering, Electronics and Telecommunication",
      grade: "9.30 (Till 4th Sem)",
    },
    {
      id: 2,
      startDate: new Date("2018-04-01"),
      endDate: new Date("2020-03-31"),
      title: "Army Public School, Barrackpore",
      course: "12th CBSE (PCM)",
      grade: "94%",
    },
    {
      id: 3,
      startDate: new Date("2016-04-01"),
      endDate: new Date("2018-03-31"),
      title: "Army Public School, Barrackpore",
      course: "10th CBSE",
      grade: "92.6%",
    },
  ];

  const EduCard = ({ details }) => {
    return (
      <div className="edu-card">
        <div className="circle">
          <School />
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
        <div className="name less-spread bolder">{details.title}</div>
        <div className="company-name bold">{details.course}</div>
        <div className="details">Grade: {details.grade}</div>
      </div>
    );
  };

  return (
    <div>
      <div id="edu" className="edu page">
        <PageHeader frontTitle="EDUCATION" rearTitle="EDUCATION" />

        <div className="edu-container">
          {Edu.map((e) => (
            <EduCard key={e.id} details={e} />
          ))}
        </div>

        {/* 
      Education
    */}
      </div>
    </div>
  );
};

export default Education;
