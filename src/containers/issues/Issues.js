import React from "react";
import { Fade } from "react-reveal";
import {openSource} from "../../portfolio";
import IssueCard from "../../components/issueCard/IssueCard";
import IssuesData from "../../shared/opensource/issues.json";
import styles from "./Issues.module.css";

const Issues = (props) => {
    const theme = props.theme;
    
    if (IssuesData.data.length === 0 || !openSource.issues){
    	return null;
    }  

    return (
      <div>
        <div className={styles.issuesHeaderDiv}>
          <Fade bottom duration={2000} distance="20px">
            <h1 className={styles.issuesHeader} style={{ color: theme.text }}>
              Issues
            </h1>
          </Fade>
        </div>
        <div className={styles.issuesBodyDiv}>
          {IssuesData["data"].map((issue) => {
            return <IssueCard issue={issue}key={issue.id} />;
          })}
        </div>
      </div>
    );
}

export default Issues;
