import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import {bigProjects} from "../../portfolio";
import styles from "./StartupProjects.module.css";

export default function StartupProjects(props) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  if (!bigProjects.display) {
    return null;
  }
  const theme= props.theme;
  return (
      <div className={styles.startupMain + " " + styles.main} id="projects">
       <Fade bottom duration={1000} distance="20px">
          <h1 className={styles.skillsHeading + " " + styles.projectsTitle} style={{ color: theme.text}}>{bigProjects.title}</h1>
          </Fade>
          <Fade right duration={2000}>
          <p
            className={styles.subTitle + " " + styles.projectSubtitle}
            style={{ color: theme.secondaryText}}
          >
            {bigProjects.subtitle}
          </p>
          </Fade>
          <div className={styles.projectsContainer}>
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={styles.projectCard + " " + styles.projectCardLight}
                  style={{backgroundColor: theme.imageHighlight}}
                >
                  {project.image ? (
                    <div className={styles.projectImage}>
                      <Image
                        src={require(`../../assets/images/${project.image}`)}
                        alt={project.projectName}
                        className={styles.cardImage}
                      ></img>
                    </div>
                  ) : null}
                  <div className={styles.projectDetail}>
                    <h5
                      className={styles.cardTitle}
                      style={{ color: theme.text}}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={styles.cardSubtitle}
                      style={{ color: theme.text}}
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className={styles.projectCardFooter}>
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={styles.projectTag}
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  );
}
