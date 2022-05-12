import Image from "next/image";
import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard";
import { Fade } from "react-reveal";
import {projects} from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import ProjectsImg from "./ProjectsImg";
import styles from "./ProjectsSection.module.css";


const ProjectsSection = (props) => {
    const theme = props.theme;
    
    if(ProjectsData.data.length===0 || !projects.display){
    	return null;
    }

    return (
        <div>
        <div className={styles.basicProjects}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.projectsHeadingDiv}>
              <div className={styles.projectsHeadingImgDiv}>
                {/* <Image
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className={styles.projectsHeadingTextDiv}>
                <h1
                  className={styles.projectsHeadingText}
                  style={{ color: theme.text }}
                >
                  {projects.title}
                </h1>
                <p
                  className={styles.projectsHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {projects["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className={styles.repoCardsDivMain}>
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        </div>
    );
}

export default ProjectsSection;
