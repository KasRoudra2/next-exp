import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio.js";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = (props) => {
    const theme= props.theme;
    return (
      <div className={styles.basicExperience}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.experienceHeadingDiv}>
              <div className={styles.experienceHeadingImgDiv}>
                {/* <Image
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className={styles.experienceHeadingTextDiv}>
                <h1
                  className={styles.experienceHeadingText}
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className={styles.experienceHeadingSubText}
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className={styles.experienceHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
    );
}

export default ExperienceSection;
