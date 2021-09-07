import React from "react";

const WorkExperienceOutput = (props) => {
  return (
    <ul>
      <li>{props.job.company}</li>
      <li>{props.job.position}</li>
      <li>{props.job.startDate}</li>
      <li>{props.job.endDate}</li>
    </ul>
  );
};

export default WorkExperienceOutput;
