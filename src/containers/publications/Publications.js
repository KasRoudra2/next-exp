import React from "react";
import {Fade} from "react-reveal";
import { publications } from "../../portfolio.js";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import styles from "./Publications.module.css";

const Publications = (props) => {
//	const pubs= publications.data;
  const theme= props.theme;
  if (!publications.display) {
    return null;
  }
	return(
	<div>
	    <div className={styles.basicProjects}>
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.publicationsHeadingDiv}>
              <div className={styles.publicationsHeadingTextDiv}>
                <h1
                  className={styles.publicationsHeadingText}
                  style={{ color: theme.text }}
                >
                  {publications.title}
                </h1>
                <p
                  className={styles.projectsHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {publications["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className={styles.repoCardsDivMain}>
          {publications.publications.data.map((pubs) => {
            return <PublicationCard publication={pubs} theme={theme} key={pubs.title}/>;
          })}
        </div>
     </div>   
	)	
}	

export default Publications;