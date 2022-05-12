import Image from "next/image";
import React from "react";
import { Fade, Flip } from "react-reveal";
import styles from "./DegreeCard.module.css";

const DegreeCard = (props) => {
    const { degree, theme } = props;
    return (
      <div className={styles.degreeCard}>
        <Flip left duration={2000}>
          <div className={styles.degreeCardImg}>
            <Image
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assets/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className={styles.cardBody}>
            <div
              className={styles.bodyHeader}
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className={styles.bodyHeaderTitle}>
                <h2 className={styles.cardTitle} style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className={styles.cardSubtitle} style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className={styles.bodyHeaderDuration}>
                <h3 className={styles.duration} style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className={styles.bodyContent}>
              {degree.descriptions.map((sentence) => {
                return (
                  <p className={styles.contentList} style={{ color: theme.text }} key={sentence} >
                    {sentence}
                  </p>
                );
              })}
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={styles.visitBtn}
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className={styles.btnText} style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
}

export default DegreeCard;
