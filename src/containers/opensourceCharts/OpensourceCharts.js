import React from "react";
import "chart.js/auto";
import { Fade } from "react-reveal";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import styles from "./OpensourceCharts.module.css";


const OpensourceCharts = (props) => {
    const theme = props.theme;
    return (
      <div>
        <div className={styles.osChartsHeaderDiv}>
          <Fade bottom duration={2000} distance="20px">
            <h1 className={styles.osChartsHeader} style={{ color: theme.text }}>
              Contributions
            </h1>
          </Fade>
        </div>
        <div className={styles.osChartsBodyDiv}>
          <PullRequestChart theme={theme} />
          <IssueChart theme={theme} />
        </div>
      </div>
    );
}

export default OpensourceCharts;
