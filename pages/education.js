import React from "react";
import { pageEnabled } from "../src/portfolio";
import { Header, TopButton, Footer } from "../src/components";
import { EducationSection, Degrees, Certifications } from "../src/containers";

const Education = (props) => {
     const theme = props.theme;
     if (!pageEnabled.education){
    	return null;
     }
    return (
      <div className="main-page">
        <Header theme={theme} />
        <EducationSection theme={theme} />
        <Degrees theme={theme} />
        <Certifications theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
}

export default Education;
