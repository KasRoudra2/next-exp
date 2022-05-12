import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import styles from "./HobbiesCard.module.css";

const HobbiesCard = (props) => {
  	const theme = props.theme;
    return (
      <div className={styles.hobbiesCard}>
      <Fade bottom duration={2000} distance="40px">
       <div className={styles.hobbiesCardBodyDiv}>
          {hobbies.hobbies.map((hobbiesdata) => {
            return (
              <div className={styles.hobbiesData} key={hobbiesdata.title}>
              <div className={styles.hobbiesHeading}>
                <Fade left duration={2000}>
                  <div
                    className={styles.hobbiesCardTitle}
                    style={{ color: theme.text }}
                  >
                    {hobbiesdata.title}
                  </div>
                  <div
                    className={styles.hobbiesCardSubtitle}
                    style={{ color: theme.secondaryText }}
                  >
                    {hobbiesdata.description}
                  </div>
                </Fade>
                </div>
                <Fade right duration={2000}>
                <div className={styles.hobbiesCardImg}>
                  <Image
                    className={styles.hobbiesImage}
                    src={require(`../../assets/images/${hobbiesdata["image_path"]}`)}
                    alt={hobbiesdata.title}
                  />
                  </div>
                </Fade>
              </div>
            );
            })}
          </div>
        </Fade>  
      </div>
    );
}

export default HobbiesCard;
