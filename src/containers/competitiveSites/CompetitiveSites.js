import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {competitiveSites} from "../../portfolio";
import styles from "./CompetitiveSites.module.css";

const CompetitiveSites = (props) => {
    const theme = props.theme;
    if (!competitiveSites.display){
    	return null;
    }	
    return (
      <div className={styles.competitiveSitesMainDiv}>
          <h3 className={styles.headingSubText} style={{ color: theme.secondaryText }}>
                  Basic Qualification and Certifcations
          </h3>
        <ul className={styles.devIcons}>
          {competitiveSites.competitiveSites.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className={styles.competitiveSitesInline} name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={styles.iconify}
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
}

export default CompetitiveSites;
