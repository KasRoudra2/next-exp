import React from "react";
import { Fade } from "react-reveal";
import styles from "./PublicationCard.module.css";

const PublicationCard = (props) => {
  const { theme, publication } = props;
  function openpublicationinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <Fade bottom duration={2000} distance="40px">
        <div
          className={styles.publicationCardDiv}
          key={publication.id}
          onClick={() => openpublicationinNewTab(publication.url)}
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className={styles.publicationNameDiv}>
            <p className={styles.publicationName} style={{ color: theme.text }}>
              {publication.name}
            </p>
          </div>
          <p className={styles.publicationDescription} style={{ color: theme.text }}>
            {publication.description}
          </p>
          <div className={styles.publicationDetails}>
            <p
              className={styles.publicationCreationDate + " " + styles.subTitle}
              style={{ color: theme.secondaryText }}
            >
              Published on {publication.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </Fade>
  );
}

export default PublicationCard;