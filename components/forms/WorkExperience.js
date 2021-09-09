import React, { useState, useContext, useRef, useEffect } from "react";
import { uuid } from "uuidv4";
import CvContext from "../../store/cv-context";

const WorkExperience = (props) => {
  // Defining refs, initial state values and context

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
    id: "",
  });

  // Update state on form submission

  const workExperienceHandler = (event) => {
    event.preventDefault();
    setWorkExperience({
      company: companyRef.current.value,
      position: positionRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      id: Math.random() * 1000,
    });
  };

  // Updating context through useEffect

  useEffect(() => {
    if (workExperience.company.length > 0) {
      ctx.addWorkExperience(workExperience);
      console.log(workExperience);
    }
  }, [
    workExperience.company,
    workExperience.position,
    workExperience.startDate,
    workExperience.endDate,
  ]);

  return (
    <React.Fragment>
      <h3>Work Experience</h3>
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
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default WorkExperience;
