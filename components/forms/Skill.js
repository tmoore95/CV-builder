import React, { useState, useContext, useEffect, useRef } from "react";
import CvContext from "../../store/cv-context";

const Skill = (props) => {
  const skillRef = useRef();
  const ctx = useContext(CvContext);
  const [skill, setSkill] = useState("");

  const skillHandler = (event) => {
    event.preventDefault();
    setSkill(skillRef.current.value);
  };

  useEffect(() => {
    if (skill.length > 0) {
      ctx.addSkill(skill);
    }
  }, [skill]);

  return (
    <React.Fragment>
      <h2>Skill</h2>
      <form onSubmit={skillHandler}>
        <input ref={skillRef} type="text" placeholder="Skill" required />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default Skill;
