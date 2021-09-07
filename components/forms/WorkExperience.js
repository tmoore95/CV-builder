import React, { useState, useContext, useRef, useEffect } from "react";
import CvContext from "../../store/cv-context";

const WorkExperience = (props) => {
  const companyRef = useRef();
  const positionRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const ctx = useContext(CvContext);
  const [workExperience, setWorkExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const workExperienceHandler = (event) => {
    event.preventDefault();
    setWorkExperience({
      company: companyRef.current.value,
      position: positionRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
    });
  };

  useEffect(() => {
    if (workExperience.company.length > 0) {
      ctx.addWorkExperience(workExperience);
    }
  }, [workExperience]);

  return (
    <React.Fragment>
      <h2>Work Experience</h2>
      <form onSubmit={workExperienceHandler}>
        <input ref={companyRef} type="text" placeholder="Company" required />
        <input ref={positionRef} type="text" placeholder="Position" required />
        <input
          ref={startDateRef}
          type="text"
          placeholder="Start date"
          required
        />
        <input ref={endDateRef} type="text" placeholder="End date" required />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default WorkExperience;
