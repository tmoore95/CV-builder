import React from "react";
import styles from "./EducationOutput.module.css";

const EducationOutput = (props) => {
  return (
    <div className={styles.edu}>
      <h5>{props.education.institution}</h5>
      <p>
        <em>{props.education.qualification}</em>
      </p>
      <p>
        {props.education.startDate} - {props.education.endDate}
      </p>
    </div>
  );
};

export default EducationOutput;
