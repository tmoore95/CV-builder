import React, { useState, useRef, useEffect, useContext } from "react";
import CvContext from "../../store/cv-context";

import { uuid } from "uuidv4";

const Education = (props) => {
  // Defining refs, initial state values and context

  const institutionRef = useRef();
  const qualificationRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const ctx = useContext(CvContext);
  const [education, setEducation] = useState({
    institution: "",
    qualification: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  // Update state on form submission

  const educationHandler = (event) => {
    event.preventDefault();
    setEducation({
      institution: institutionRef.current.value,
      qualification: qualificationRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      id: Math.random() * 1000,
    });
  };

  // Updating context through useEffect

  useEffect(() => {
    if (education.institution.length > 0) {
      ctx.addEducation(education);
      console.log(education);
    }
  }, [
    education.institution,
    education.qualification,
    education.startDate,
    education.endDate,
  ]);

  return (
    <React.Fragment>
      <h3>Education</h3>
      <form onSubmit={educationHandler}>
        <input
          ref={institutionRef}
          type="text"
          placeholder="Institution"
          required
        />
        <input
          ref={qualificationRef}
          type="text"
          placeholder="Qualification"
          required
        />
        <input
          ref={startDateRef}
          type="text"
          placeholder="Start Date"
          required
        />
        <input ref={endDateRef} type="text" placeholder="End Date" required />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default Education;
