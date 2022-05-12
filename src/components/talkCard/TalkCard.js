import React from "react";
import styles from "./TalkCard.module.css";

const TalkCard = (props) => {
  const { theme, talkDetails } = props;
  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.rectangle}
        >
          <div className={styles.diagonalFill}></div>
          <div className={styles.talkCardTitle} style={{ color: theme.text }}>{talkDetails.title}</div>
          <p className={styles.talkCardSubtitle} style={{ color: theme.secondaryText }}>{talkDetails.subtitle}</p>
          <div className={styles.cardFooterButtonDiv}>
            <a href={talkDetails.slides_url} target="_" className={styles.talkButton}>
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className={styles.talkButton}>
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkCard;