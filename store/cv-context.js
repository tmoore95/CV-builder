import { createContext, useState } from "react";

const CvContext = createContext();

export const CvContextProvider = (props) => {
  // Initial setting of state

  const [aboutMe, setAboutMe] = useState(
    "Creative and motivated developer with a drive to create effective web applications that can make life easier."
  );
  const [contact, setContact] = useState({
    firstName: "TOM",
    lastName: "MOORE",
    email: "tom_moore95@hotmail.co.uk",
    phoneNumber: "07476652491",
    profession: "FULL STACK DEVELOPER",
  });
  const [education, setEducation] = useState([
    {
      institution: "Le Wagon",
      qualification: "Web Development",
      startDate: "April 2020",
      endDate: "June 2020",
      id: 1,
    },
  ]);
  const [skill, setSkill] = useState([
    { skill: "Javascript", id: 1 },
    { skill: "React", id: 2 },
    { skill: "Ruby", id: 3 },
    { skill: "HTML", id: 4 },
    { skill: "CSS", id: 5 },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      company: "Elder",
      position: "Carer Support Associate",
      startDate: "February 2020",
      endDate: "March 2021",
      id: 1,
    },
  ]);

  // Methods to update the state from each component

  const addAboutMe = (aboutMe) => {
    setAboutMe(aboutMe);
  };

  const addContact = (contact) => {
    setContact(contact);
  };

  const addEducation = (education) => {
    setEducation((prev) => [education, ...prev]);
  };

  const addSkill = (skill) => {
    setSkill((prev) => [skill, ...prev]);
  };

  const addWorkExperience = (workExperience) => {
    setWorkExperience((prev) => [workExperience, ...prev]);
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
