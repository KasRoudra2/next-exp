import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./SoftwareSkills.module.css";

const SoftwareSkills = (props) => {
  const { logos } = props;
    return (
      <div>
        <div className={styles.softwareSkillsMainDiv}>
          <ul className={styles.devIcons}>
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className={styles.softwareSkillInline} name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className={styles.softwareSkillInline} name={logo.skillName}>
                    <span
                      className={styles.iconify}
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
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

export default SoftwareSkills;
