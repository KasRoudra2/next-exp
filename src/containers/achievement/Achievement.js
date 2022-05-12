import React from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { certifications } from "../../portfolio";
import styles from "./Achievement.module.css";

const Achievement = (props) => {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  const theme = props.theme;
  if (!certifications.display){
  	return null;
  }	
  return (
    <div className={styles.main} id="achievements">
      <div className={styles.achievementMainDiv}>
        <div className={styles.achievementHeader}>
          <h1 className={styles.heading + " " + styles.achievementheading} style={{ color: theme.text }}>
            {certifications.title}
          </h1>
          <p className={styles.subTitle + " " + styles.achievementSubtitle} style={{ color: theme.secondaryText }}>
            {certifications.subtitle}
          </p>
        </div>
        <div className={styles.achievementCardsDiv}>
          {certifications.certifications.map((card) => {
            return (
              <AchievementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink,
                }}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
