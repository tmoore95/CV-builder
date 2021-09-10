import React, { useContext } from "react";
import CvContext from "../../store/cv-context";
import EducationOutput from "./EducationOutput";
import WorkExperienceOutput from "./WorkExperienceOutput";
import styles from "./CvOutput.module.css";

const CvOutput = () => {
  const ctx = useContext(CvContext);

  const clearCvHandler = () => {
    ctx.clearCv();
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        <h1>
          {ctx.contact && ctx.contact.firstName}{" "}
          {ctx.contact && ctx.contact.lastName}
        </h1>
        <p>{ctx.contact && ctx.contact.profession}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <h4>ABOUT ME</h4>
          <p>{ctx.aboutMe && ctx.aboutMe}</p>
          <h4>SKILLS</h4>
          {ctx.skill &&
            ctx.skill.map((skill) => {
              return <p key={skill.id}>{skill.skill}</p>;
            })}
          <h4>CONTACT</h4>
          <p>{ctx.contact && ctx.contact.email}</p>
          <p>{ctx.contact && ctx.contact.phoneNumber}</p>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>EMPLOYMENT HISTORY</h3>
          </div>
          {ctx.workExperience &&
            ctx.workExperience.map((job) => (
              <WorkExperienceOutput key={job.id} job={job} />
            ))}
          <div className={styles.title}>
            <h3>EDUCATION</h3>
          </div>
          {ctx.education &&
            ctx.education.map((education) => (
              <EducationOutput key={education.id} education={education} />
            ))}
          <button onClick={clearCvHandler}>Clear CV</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CvOutput;
