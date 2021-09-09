import React from "react";
import styles from "./WorkExperienceOutput.module.css";

const WorkExperienceOutput = (props) => {
  return (
    <div className={styles.job}>
      <h5>{props.job.company}</h5>
      <p>
        <em>{props.job.position}</em>
      </p>
      <p>
        {props.job.startDate} - {props.job.endDate}
      </p>
    </div>
  );
};

export default WorkExperienceOutput;
