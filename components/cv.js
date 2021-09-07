import React, { useContext } from "react";
import CvContext from "../store/cv-context";
import Skill from "./forms/Skill";

const Cv = () => {
  const ctx = useContext(CvContext);

  return (
    <React.Fragment>
      <h1>{ctx.aboutMe}</h1>
      <p>
        {ctx.contact.firstName} {ctx.contact.lastName}
      </p>
      <p>{ctx.contact.email}</p>
      <p>{ctx.contact.phoneNumber}</p>
      {ctx.workExperience.map((job) => {
        return (
          <div>
            <p>{job.company}</p>
            <p>{job.position}</p>
            <p>{job.startDate}</p>
            <p>{job.endDate}</p>
          </div>
        );
      })}
      {ctx.education.map((education) => {
        return (
          <div>
            <p>{education.institution}</p>
            <p>{education.qualification}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
          </div>
        );
      })}
      {ctx.skill.map((skill) => {
        return <p>{skill}</p>;
      })}
    </React.Fragment>
  );
};

export default Cv;
