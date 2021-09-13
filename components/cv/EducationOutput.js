import React, { useContext } from "react";
import CvContext from "../../store/cv-context";
import styles from "./EducationOutput.module.css";

const EducationOutput = (props) => {
  const ctx = useContext(CvContext);
  const removeEducationHandler = (id) => {
    ctx.removeEducation(id);
  };

  return (
    <React.Fragment>
      <div className={styles.item}>
        <div className={styles.edu}>
          <h5>{props.education.institution}</h5>
          <p>
            <em>{props.education.qualification}</em>
          </p>
          <p>
            {props.education.startDate} - {props.education.endDate}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            removeEducationHandler(props.education.id);
          }}
        >
          x
        </button>
      </div>
    </React.Fragment>
  );
};

export default EducationOutput;
