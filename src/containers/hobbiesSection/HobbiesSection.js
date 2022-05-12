import React from "react";
import { Fade } from "react-reveal";
import {hobbies} from "../../portfolio";
import styles from "./HobbiesSection.module.css";

const HobbiesSection = (props) => {
	const theme = props.theme;
    return (
        <div className={styles.basicHobbies}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.hobbiesHeadingDiv}>
              <div className={styles.hobbiesHeadingTextDiv}>
                <h1
                  className={styles.hobbiesHeadingText}
                  style={{ color: theme.text }}
                >
                  {hobbies.title}
                </h1>
                <h2 
                  className={styles.hobbiesSubTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {hobbies.subTitle}
                </h2>
              </div>
            </div>
          </Fade>
     </div>
    );
}

export default HobbiesSection;