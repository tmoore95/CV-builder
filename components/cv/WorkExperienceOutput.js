import React, { useContext } from "react";
import CvContext from "../../store/cv-context";
import styles from "./WorkExperienceOutput.module.scss";

const WorkExperienceOutput = (props) => {
  const ctx = useContext(CvContext);

  const removeWorkExperienceHandler = (id) => {
    ctx.removeWorkExperience(id);
  };

  return (
    <React.Fragment>
      <div className={styles.item}>
        <div className={styles.job}>
          <h5>{props.job.company}</h5>
          <p>
            <em>{props.job.position}</em>
          </p>
          <p>
            {props.job.startDate} - {props.job.endDate}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            removeWorkExperienceHandler(props.job.id);
          }}
        >
          x
        </button>
      </div>
    </React.Fragment>
  );
};

export default WorkExperienceOutput;
