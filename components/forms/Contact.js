import React, { useState, useRef, useContext, useEffect } from "react";
import CvContext from "../../store/cv-context";

const Contact = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const ctx = useContext(CvContext);

  const contactHandler = (event) => {
    event.preventDefault();
    setContact({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    });
  };

  useEffect(() => {
    if (contact.firstName.length > 0) {
      ctx.addContact(contact);
    }
  }, [contact]);

  return (
    <React.Fragment>
      <h2>Contact</h2>
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
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default Contact;
