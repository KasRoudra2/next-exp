import Image from "next/image";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./OrganizationList.module.css";

const OrganizationList = (props) => {
  const logos = props.logos;
    return (
      <div className={styles.organizationsMainDiv}>
        <ul className={styles.devIconsOrgs}>
          {logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className={styles.organizationsInline} name={logo["login"]}>
                  <Fade bottom duration={2000} distance="40px">
                    <Image
                      className={styles.organizationsImg}
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                  </Fade>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
}

export default OrganizationList;
