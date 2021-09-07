import React from "react";

const EducationOutput = (props) => {
  return (
    <ul>
      <li>{props.education.institution}</li>
      <li>{props.education.qualification}</li>
      <li>{props.education.startDate}</li>
      <li>{props.education.endDate}</li>
    </ul>
  );
};

export default EducationOutput;
