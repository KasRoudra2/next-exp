import React from "react";
import { pageEnabled } from "../src/portfolio";
import { Header, ProjectsSection, TopButton, Footer } from "../src/components";
import { Publications } from "../src/containers";


const Projects = (props) => {
    const theme = props.theme;
    if (!pageEnabled.projects){
    	return null;
    }	
    return (
      <div className="main-page">
        <Header theme={theme} />
        <ProjectsSection theme={theme}/>
        <Publications theme={theme}/>
        <Footer theme={theme} onToggle={props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
}

export default Projects;
