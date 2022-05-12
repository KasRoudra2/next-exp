import React from "react";
import { Fade } from "react-reveal";
import { openSource } from "../../portfolio";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import styles from "./PullRequests.module.css";

const PullRequests = (props) => {
    const theme = props.theme;
    if (!PullRequestsData.data.length === 0 || !openSource.pull_requests){
    	return null;
    }
    return (
      <div>
        <div className={styles.pullRequestsHeaderDiv}>
          <Fade bottom duration={2000} distance="20px">
            <h1 className={styles.pullRequestsHeader} style={{ color: theme.text }}>
              Pull Requests
            </h1>
          </Fade>
        </div>
        <div className={styles.pullRequestBodyDiv}>
          {PullRequestsData["data"].map((pullRequest) => {
            return <PullRequestCard pullRequest={pullRequest} key={pullRequest.id} />;
          })}
        </div>
      </div>
    );
}

export default PullRequests;
