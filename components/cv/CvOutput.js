import React, { useContext } from "react";
import { uuid } from "uuidv4";
import CvContext from "../../store/cv-context";
import EducationOutput from "./EducationOutput";
import WorkExperienceOutput from "./WorkExperienceOutput";

const CvOutput = () => {
  const ctx = useContext(CvContext);

  return (
    <React.Fragment>
      <h1>{ctx.aboutMe}</h1>
      <p>
        {ctx.contact.firstName} {ctx.contact.lastName}
      </p>
      <p>{ctx.contact.email}</p>
      <p>{ctx.contact.phoneNumber}</p>
      {ctx.workExperience.map((job) => (
        <WorkExperienceOutput key={job.id} job={job} />
      ))}
      {ctx.education.map((education) => (
        <EducationOutput key={education.id} education={education} />
      ))}
      {ctx.skill.map((skill) => {
        return <p key={skill.id}>{skill.skill}</p>;
      })}
    </React.Fragment>
  );
};

export default CvOutput;
