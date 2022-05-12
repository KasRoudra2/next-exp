import React from "react";
import { Fade } from "react-reveal";
import TechStack from "../../components/techStack/TechStack";
import SkillSection from "./SkillSection";
import styles from "./Skills.module.css";


export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className={styles.main} id="skills">
      <div className={styles.skillsHeaderDiv}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles.skillsHeader} style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
      <TechStack theme={theme} /> 
    </div>
  );
}
