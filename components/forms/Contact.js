import React, { useState, useRef, useContext, useEffect } from "react";
import CvContext from "../../store/cv-context";

const Contact = (props) => {
  // Defining refs, initial state values and context

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const professionRef = useRef();

  // Update state on form submission

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profession: "",
  });
  const ctx = useContext(CvContext);

  // Update state on form submission

  const contactHandler = (event) => {
    event.preventDefault();
    setContact({
      firstName: firstNameRef.current.value.toUpperCase(),
      lastName: lastNameRef.current.value.toUpperCase(),
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      profession: professionRef.current.value.toUpperCase(),
    });
  };

  // Updating context through useEffect

  useEffect(() => {
    if (contact.firstName.length > 0) {
      ctx.addContact(contact);
    }
  }, [contact]);

  // Customising invalid input prompt

  useEffect(() => {
    const firstNameInput = document.getElementById("firstName");
    firstNameInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your first name!");
    };
    firstNameInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const lastNameInput = document.getElementById("lastName");
    lastNameInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your last name!");
    };
    lastNameInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const emailInput = document.getElementById("email");
    emailInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your email!");
    };
    emailInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const phoneNumberInput = document.getElementById("phoneNumber");
    phoneNumberInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your phone number!");
    };
    phoneNumberInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
    const professionInput = document.getElementById("profession");
    professionInput.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter your profession!");
    };
    professionInput.oninput = (e) => {
      e.target.setCustomValidity("");
    };
  }, []);

  return (
    <React.Fragment>
      <h3>Contact</h3>
      <form onSubmit={contactHandler}>
        <input
          id="firstName"
          ref={firstNameRef}
          type="text"
          placeholder="First name"
          required
        />
        <input
          id="lastName"
          ref={lastNameRef}
          type="text"
          placeholder="Last name"
          required
        />
        <input
          id="email"
          ref={emailRef}
          type="email"
          placeholder="Email"
          required
        />
        <input
          id="phoneNumber"
          ref={phoneNumberRef}
          type="text"
          placeholder="Phone number"
          required
        />
        <input
          id="profession"
          ref={professionRef}
          type="text"
          placeholder="Profession"
          required
        />
        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
