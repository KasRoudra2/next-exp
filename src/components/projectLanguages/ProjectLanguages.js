import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./ProjectLanguages.module.css";

const ProjectLanguages = (props) => {
	const logos = props.logos;
    return (
      <div>
        <div className={styles.softwareSkillsMainDiv}>
          <ul className={styles.devIconsLanguages}>
            {logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className={styles.softwareSkillInlineLanguages}
                    name={logo.skillName}
                  >
                    <span
                      className={styles.iconify}
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default ProjectLanguages;
