import React, { useState, useContext, useEffect, useRef } from "react";
import { uuid } from "uuidv4";
import CvContext from "../../store/cv-context";

const Skill = (props) => {
  // Defining refs, initial state values and context

  const skillRef = useRef();
  const ctx = useContext(CvContext);
  const [skill, setSkill] = useState({ skill: "", id: "" });

  // Update state on form submission

  const skillHandler = (event) => {
    event.preventDefault();
    setSkill({ skill: skillRef.current.value, id: uuid() });
    skillRef.current.value = "";
  };

  // Updating context through useEffect

  useEffect(() => {
    if (skill.skill.length > 0) {
      ctx.addSkill(skill);
    }
  }, [skill.skill]);

  // Customising invalid input prompt

  useEffect(() => {
    const skillInput = document.getElementById("skill");
    skillInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a skill!");
    };
  }, []);

  return (
    <React.Fragment>
      <h3>Skill</h3>
      <form onSubmit={skillHandler}>
        <input
          id="skill"
          ref={skillRef}
          type="text"
          placeholder="Skill"
          required
        />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default Skill;
