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

  const addEducation = (newEducation) => {
    if (education) {
      setEducation((prev) => [newEducation, ...prev]);
    } else {
      setEducation([newEducation]);
    }
  };

  const addSkill = (newSkill) => {
    if (skill) {
      setSkill((prev) => [newSkill, ...prev]);
    } else {
      setSkill([newSkill]);
    }
  };

  const addWorkExperience = (newWorkExperience) => {
    if (workExperience) {
      setWorkExperience((prev) => [newWorkExperience, ...prev]);
    } else {
      setWorkExperience([newWorkExperience]);
    }
  };

  const clearCv = () => {
    setAboutMe();
    setContact();
    setEducation();
    setSkill();
    setWorkExperience();
  };

  const clearAboutMe = () => {
    setAboutMe();
  };

  const removeSkill = (id) => {
    setSkill((prev) => [...prev.filter((skill) => skill.id !== id)]);
  };

  const removeEducation = (id) => {
    setEducation((prev) => [
      ...prev.filter((education) => education.id !== id),
    ]);
  };

  const removeWorkExperience = (id) => {
    setWorkExperience((prev) => [...prev.filter((job) => job.id !== id)]);
  };

  const clearContact = () => {
    setContact();
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
        clearCv,
        clearAboutMe,
        removeSkill,
        removeEducation,
        removeWorkExperience,
        setContact,
        clearContact,
      }}
    >
      {props.children}
    </CvContext.Provider>
  );
};

export default CvContext;
