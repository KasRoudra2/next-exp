import Image from "next/image";
import React from "react";
import {Fade} from "react-reveal";
import { greeting, contactPageData } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import styles from "./ContactSection.module.css";

const ContactSection = (props) => {
     const theme = props.theme;
     const contactSection = contactPageData.contactSection;
     return(
        <div className={styles.basicContact}>
          <Fade bottom duration={1000} distance="40px">
            <div className={styles.contactHeadingDiv}>
              <div className={styles.contactHeadingImgDiv}>
                <Image
                  src={require(`../../assets/images/${contactSection["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className={styles.contactHeadingTextDiv}>
                <h1
                  className={styles.contactHeadingText}
                  style={{ color: theme.text }}
                >
                  {contactSection["title"]}
                </h1>
                <p
                  className={styles.contactHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {contactSection["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className={styles.resumeBtnDiv}>
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
    );
}
export default ContactSection;