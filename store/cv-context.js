import { createContext, useState } from "react";

const CvContext = createContext();

export const CvContextProvider = (props) => {
  const [aboutMe, setAboutMe] = useState("This is my bio");
  const [contact, setContact] = useState({
    firstName: "Tom",
    lastName: "Moore",
    email: "tom_moore95@hotmail.co.uk",
    phoneNumber: "07476652491",
  });
  const [education, setEducation] = useState([
    {
      institution: "Le Wagon",
      qualification: "Web Development",
      startDate: "April 2020",
      endDate: "June 2020",
      key: 1,
    },
  ]);
  const [skill, setSkill] = useState(["Javascript", "React"]);
  const [workExperience, setWorkExperience] = useState([
    {
      company: "Elder",
      position: "Carer Support Associate",
      startDate: "February 2020",
      endDate: "March 2021",
      key: 1,
    },
  ]);

  const addAboutMe = (aboutMe) => {
    setAboutMe(aboutMe);
  };

  const addContact = (contact) => {
    setContact(contact);
  };

  const addEducation = (education) => {
    setEducation((prev) => [...prev, education].reverse());
  };

  const addSkill = (skill) => {
    setSkill((prev) => [...prev, skill].reverse());
  };

  const addWorkExperience = (workExperience) => {
    setWorkExperience((prev) => [...prev, workExperience].reverse());
  };

  return (
    <CvContext.Provider
      value={{
        aboutMe,
        contact,
        education,
        skill,
        workExperience,
        addAboutMe,
        addContact,
        addEducation,
        addSkill,
        addWorkExperience,
      }}
    >
      {props.children}
    </CvContext.Provider>
  );
};

export default CvContext;
