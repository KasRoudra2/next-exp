import Image from "next/image";
import React from "react";
import { contactPageData } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.main + " " + styles.contactMarginTop} id="contact">
      <div className={styles.contactDivMain}>
        <div className={styles.contactHeader}>
          <h1 className={styles.heading + " " + styles.contactTitle}>{contactPageData.title}</h1>
          <p className={styles.subTitle + " " + styles.contactSubtitle}>{contactPageData.subtitle}</p>

          <div className={styles.contactTextDiv}>
            <a className={styles.contactDetail} href={"tel:" + contactPageData.number}>
              {contactPageData.number}
            </a>
            <br />
            <br />
            <a
              className={styles.contactDetailEmail}
              href={"mailto:" + contactPageData.email_address}
            >
              {contactPageData.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className={styles.contactImageDiv}>
          <Image
            alt="Working"
            src={require("../../assets/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;