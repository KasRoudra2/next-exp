import Image from "next/image";
import React from "react";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { contactPageData } from "../../portfolio.js";
import styles from "./AddressSection.module.css";

const AddressSection = (props) => {
     const theme = props.theme;
     const addressSection = contactPageData.addressSection;
     const phoneSection = contactPageData.phoneSection;
     return(
        <div className={styles.basicContact}>
          <Fade bottom duration={1000} distance="40px">
            <div className={styles.addressHeadingDiv}>
              <div className={styles.contactHeadingImgDiv}>
                {/* <Image
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>
              <div className={styles.addressHeadingTextDiv}>
                <h1
                  className={styles.addressHeadingText}
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className={styles.contactHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className={styles.addressHeadingText}
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className={styles.contactHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className={styles.addressBtnDiv}>
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
    );
}
export default AddressSection;