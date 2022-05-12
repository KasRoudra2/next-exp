import Image from "next/image";
import React from "react";
import styles from "./AchievementCard.module.css";

const AchivementCard = (props) => {
  const { theme, cardInfo } = props;
  function openUrlInNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
  }
  return (
    <div className={styles.certificateCard}>
      <div className={styles.certificateImageDiv}>
        <Image src={cardInfo.image} alt="PWA" className={styles.cardImage}></img>
      </div>
      <div className={styles.certificateDetailDiv}>
        <h5 className={styles.cardTitle} style={{ color: theme.text }}>{cardInfo.title}</h5>
        <p className={styles.cardSubtitle} style={{ color: theme.secondaryText }}>{cardInfo.description}</p>
      </div>
      <div className={styles.certificateCardFooter}>
        {cardInfo.footer.map((v, i) => {
          return <p onClick={() => openUrlInNewTab(v.url)} key={v.url}>{v.name}</p>;
        })}
      </div>
    </div>
  );
}

export default AchivementCard;