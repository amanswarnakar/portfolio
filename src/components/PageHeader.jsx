import React from "react";

const PageHeader = ({ frontTitle, frontTitleSecondaryColor, rearTitle }) => {
  return (
    <div className="page-header">
      <h1 className="front-title bolder">{frontTitle} <span className="primary-color">{frontTitleSecondaryColor}</span></h1>
      <h1 className="rear-title bolder">{rearTitle}</h1>
    </div>
  );
};

export default PageHeader;
