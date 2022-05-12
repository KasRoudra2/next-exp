import Image from "next/image";
import React from "react";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = (props) => {
    const { theme, experience } = props;
    return (
      <div
        className={styles.experienceCard}
        style={{ border: `1px solid ${experience["color"]}`, backgroundColor: theme.headerColor }}
      >
        <div className={styles.experienceCardLogoDiv}>
          <Image
            className={styles.experienceCardLogo}
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className={styles.experienceCardBodyDiv}>
          <div className={styles.experienceCardHeaderDiv}>
            <div className={styles.experienceCardHeadingLeft}>
              <h3
                className={styles.experienceCardTitle}
                style={{ color: theme.body }}
              >
                {experience["title"]}
              </h3>
              <p
                className={styles.experienceCardCompany}
                style={{ color: theme.dark }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className={styles.experienceCardHeadingRight}>
              <p
                className={styles.experienceCardDuration}
                style={{ color: theme.body }}
              >
                {experience["duration"]}
              </p>
              <p
                className={styles.experienceCardLocation}
                style={{ color: theme.dark }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className={styles.experienceCardDescription}
            style={{ color: theme.body }}
          >
            {experience["description"]}
          </p>
        </div>
      </div>
    );
}

export default ExperienceCard;
