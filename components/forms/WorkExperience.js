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
    companyRef.current.value = "";
    positionRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
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

  // Customising invalid input prompt

  useEffect(() => {
    const companyInput = document.getElementById("company");
    companyInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a company name!");
    };
    companyInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const positionInput = document.getElementById("position");
    positionInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a position name!");
    };
    positionInput.oninput = (e) => {
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
      <h3>Work Experience</h3>
      <form onSubmit={workExperienceHandler}>
        <input
          id="company"
          ref={companyRef}
          type="text"
          placeholder="Company"
          required
        />
        <input
          id="position"
          ref={positionRef}
          type="text"
          placeholder="Position"
          required
        />
        <input
          id="startDate"
          ref={startDateRef}
          type="text"
          placeholder="Start date"
          required
        />
        <input
          id="endDate"
          ref={endDateRef}
          type="text"
          placeholder="End date"
          required
        />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default WorkExperience;
