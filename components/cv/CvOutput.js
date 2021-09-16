import React, { useContext } from "react";
import CvContext from "../../store/cv-context";
import EducationOutput from "./EducationOutput";
import WorkExperienceOutput from "./WorkExperienceOutput";
import styles from "./CvOutput.module.scss";
import { uuid } from "uuidv4";

const CvOutput = () => {
  const ctx = useContext(CvContext);

  const clearCvHandler = () => {
    ctx.clearCv();
  };

  const clearAboutMeHandler = () => {
    ctx.clearAboutMe();
  };

  const removeSkillHandler = (id) => {
    ctx.removeSkill(id);
  };

  const clearContactHandler = () => {
    ctx.clearContact();
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
          <div className={styles.about}>
            <h4>ABOUT ME</h4>
            {ctx.aboutMe && (
              <button
                className={styles.clearAboutMe}
                onClick={clearAboutMeHandler}
              >
                x
              </button>
            )}
          </div>
          <p>{ctx.aboutMe && ctx.aboutMe}</p>
          <h4>SKILLS</h4>
          {ctx.skill &&
            ctx.skill.map((skill) => {
              return (
                <div key={uuid()} className={styles.skill}>
                  <p key={skill.id}>{skill.skill}</p>
                  <button
                    key={uuid()}
                    onClick={() => {
                      removeSkillHandler(skill.id);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          <div className={styles.flex}>
            <h4>CONTACT</h4>
            {ctx.contact && (
              <button
                className={styles.clearContact}
                onClick={clearContactHandler}
              >
                x
              </button>
            )}
          </div>
          <div className={styles.contact}>
            <p>{ctx.contact && ctx.contact.email}</p>
            <p>{ctx.contact && ctx.contact.phoneNumber}</p>
          </div>
        </div>
        <div className={styles.content}>
          <button className={styles.clearCv} onClick={clearCvHandler}>
            Clear CV
          </button>
          <div className={styles.section}>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CvOutput;
