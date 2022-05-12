import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import styles from "./CertificationCard.module.css";

const CertificationCard = (props) => {
    const { theme, certificate} = props;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className={styles.certCard}>
          <div className={styles.content}>
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.contentOverlay}></div>
              <div
                className={styles.certHeader}
                style={{ backgroundColor: certificate.color_code }}
              >
                <Image
                  className={styles.logoImg}
                  src={require(`../../assets/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
              <div className={styles.contentDetails + " " + styles.fadeInTop}>
                <h3 className={styles.contentTitle} style={{ color: theme.body }}>
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className={styles.certBody}>
            <h2 className={styles.certBodyTitle} style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className={styles.certBodySubtitle}
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
}

export default CertificationCard;
