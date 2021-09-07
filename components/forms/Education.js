import React, { useState, useRef, useEffect, useContext } from "react";
import CvContext from "../../store/cv-context";

import { uuid } from "uuidv4";

const Education = (props) => {
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
      <h2>Education</h2>
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
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default Education;
