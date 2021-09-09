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

  return (
    <React.Fragment>
      <h3>Contact</h3>
      <form onSubmit={contactHandler}>
        <input
          ref={firstNameRef}
          type="text"
          placeholder="First name"
          required
        />
        <input ref={lastNameRef} type="text" placeholder="Last name" required />
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          ref={phoneNumberRef}
          type="text"
          placeholder="Phone number"
          required
        />
        <input
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
