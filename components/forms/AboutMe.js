import React, { useState, useRef, useContext, useEffect } from "react";
import CvContext from "../../store/cv-context";

const AboutMe = (props) => {
  // Defining refs, initial state values and context

  const aboutMeRef = useRef();
  const ctx = useContext(CvContext);
  const [aboutMe, setAboutMe] = useState("");

  // Update state on form submission

  const aboutMeHandler = (event) => {
    event.preventDefault();
    setAboutMe(aboutMeRef.current.value);
  };

  // Updating context through useEffect

  useEffect(() => {
    if (aboutMe.length > 0) {
      ctx.addAboutMe(aboutMe);
    }
  }, [aboutMe]);

  // Customising invalid input prompt

  useEffect(() => {
    const aboutMeInput = document.getElementById("aboutMe");
    aboutMeInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your bio!");
    };
  }, []);

  return (
    <React.Fragment>
      <h3>About Me</h3>
      <form onSubmit={aboutMeHandler}>
        <textarea
          id="aboutMe"
          ref={aboutMeRef}
          placeholder="Sell yourself!"
          required
        />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default AboutMe;
