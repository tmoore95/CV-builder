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
    }
  }, [
    education.institution,
    education.qualification,
    education.startDate,
    education.endDate,
  ]);

  // Customising invalid input prompt

  useEffect(() => {
    const institutionInput = document.getElementById("institution");
    institutionInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter an institution name!");
    };
    institutionInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const qualificationInput = document.getElementById("qualification");
    qualificationInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a qualification name!");
    };
    qualificationInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const startDateInput = document.getElementById("startDate");
    startDateInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a starting date!");
    };
    startDateInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const endDateInput = document.getElementById("endDate");
    endDateInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter an ending date!");
    };
    endDateInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
  }, []);

  return (
    <React.Fragment>
      <h3>Education</h3>
      <form onSubmit={educationHandler}>
        <input
          id="institution"
          ref={institutionRef}
          type="text"
          placeholder="Institution"
          required
        />
        <input
          id="qualification"
          ref={qualificationRef}
          type="text"
          placeholder="Qualification"
          required
        />
        <input
          id="startDate"
          ref={startDateRef}
          type="text"
          placeholder="Start Date"
          required
        />
        <input
          id="endDate"
          ref={endDateRef}
          type="text"
          placeholder="End Date"
          required
        />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default Education;
