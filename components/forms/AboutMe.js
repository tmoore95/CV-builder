import React, { useState, useRef, useContext, useEffect } from "react";
import CvContext from "../../store/cv-context";

const AboutMe = (props) => {
  const aboutMeRef = useRef();
  const ctx = useContext(CvContext);
  const [aboutMe, setAboutMe] = useState("");

  const aboutMeHandler = (event) => {
    event.preventDefault();
    setAboutMe(aboutMeRef.current.value);
  };

  useEffect(() => {
    if (aboutMe.length > 0) {
      ctx.addAboutMe(aboutMe);
    }
  }, [aboutMe]);

  return (
    <React.Fragment>
      <h2>About Me</h2>
      <form onSubmit={aboutMeHandler}>
        <textarea ref={aboutMeRef} placeholder="Sell yourself" required />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default AboutMe;
