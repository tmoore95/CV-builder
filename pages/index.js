// our-domain.com/
import React from "react";
import AboutMe from "../components/forms/AboutMe";
import Skill from "../components/forms/Skill";
import Contact from "../components/forms/Contact";
import WorkExperience from "../components/forms/WorkExperience";
import FormLayout from "../components/UI/FormLayout";
import Education from "../components/forms/Education";
import CvOutput from "../components/cv/CvOutput";
import CvLayout from "../components/UI/CvLayout";
import PageLayout from "../components/UI/PageLayout";

function HomePage() {
  return (
    <React.Fragment>
      <PageLayout>
        <FormLayout>
          <Contact />
          <AboutMe />
          <WorkExperience />
          <Education />
          <Skill />
        </FormLayout>
        <CvLayout>
          <CvOutput />
        </CvLayout>
      </PageLayout>
    </React.Fragment>
  );
}

export default HomePage;
