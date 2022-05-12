import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { competitiveSites } from "../../portfolio";
import EducationImg from "./EducationImg";
import CompetitiveSites from "../../containers/competitiveSites/CompetitiveSites";
import styles from "./EducationSection.module.css";

const EducationSection = (props) => {
    const theme = props.theme;
    return (
        <div className={styles.basicEducation}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.headingDiv}>
              <div className={styles.headingImgDiv}>
                {/* <Image
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className={styles.headingTextDiv}>
                <h1 className={styles.headingText} style={{ color: theme.text }}>
                  Education
                </h1>
                {competitiveSites.display && (<CompetitiveSites theme={theme} />)}
              </div>
            </div>
          </Fade>
      </div>
    );
}

export default EducationSection;
