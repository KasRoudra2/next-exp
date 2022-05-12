import Image from "next/image";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./PullRequestCard.module.css";

const PullRequestCard = (props) => {
    const pullRequest = props.pullRequest;
    var iconPR;
    var bgColor;
    if (pullRequest["state"] === "OPEN") {
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#28a745" },
      };
      bgColor = "#dcffe4";
    } else if (pullRequest["state"] === "MERGED") {
      iconPR = {
        iconifyClass: "octicon:git-merge",
        style: { color: "#6f42c1" },
      };
      bgColor = "#f5f0ff";
    } else {
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#d73a49" },
      };
      bgColor = "#ffdce0";
    }

    var subtitleString =
      "#" +
      pullRequest["number"] +
      " opened on " +
      pullRequest["createdAt"].split("T")[0];
    var mergedBy;
    if (pullRequest["mergedBy"] !== null) {
      const name = pullRequest["mergedBy"]["login"];
      mergedBy = (
        <OverlayTrigger
          key={name}
          placement={"top"}
          style={{ marginBottom: "5px" }}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>{`Merged by ${name}`}</strong>
            </Tooltip>
          }
        >
          <a
            href={pullRequest["mergedBy"]["url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.mergeByImg}
              src={pullRequest["mergedBy"]["avatarUrl"]}
              alt=""
            />
          </a>
        </OverlayTrigger>
      );
    } else {
      mergedBy = <noscript></noscript>;
    }

    return (
      <Fade bottom duration={2000} distance="40px">
        <div
          className={styles.pullRequestCard}
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${iconPR.style.color}`,
          }}
        >
          <div className={styles.prTop}>
            <div className={styles.prHeader}>
              <span
                className={styles.iconify + " " + styles.prIcons}
                data-icon={iconPR.iconifyClass}
                style={iconPR.style}
                data-inline="false"
              ></span>
              <div className={styles.prTitleHeader}>
                <p className={styles.prTitle}>
                  <a
                    href={pullRequest["url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pullRequest["title"]}
                  </a>
                </p>
                <p className={styles.prSubtitle}>{subtitleString}</p>
              </div>
            </div>
            <div className={styles.filesChangedHeader}>
              <p
                className={styles.filesChangedText}
                style={{ backgroundColor: iconPR.style.color }}
              >
                {pullRequest["changedFiles"]}
              </p>
              <p className="files-changed-text-2">Files Changed</p>
            </div>
          </div>
          <div className={styles.prDown}>
            <div className={styles.changesRepo}>
              <p className={styles.parentRepo}>
                Repository:{" "}
                <a
                  style={{ color: iconPR.style.color }}
                  href={pullRequest["baseRepository"]["url"]}
                >
                  {pullRequest["baseRepository"]["owner"]["login"]}/
                  {pullRequest["baseRepository"]["name"]}
                </a>
              </p>
              <div className={styles.changesFiles}>
                <p className={styles.additionsFiles}>
                  <strong>{pullRequest["additions"]} + </strong>
                </p>
                <p className={styles.deletionsFiles}>
                  <strong>{pullRequest["deletions"]} - </strong>
                </p>
                {mergedBy}
              </div>
            </div>
            <div className={styles.ownerImgDiv}>
              <a
                href={pullRequest["baseRepository"]["owner"]["url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.ownerImg}
                  src={pullRequest["baseRepository"]["owner"]["avatarUrl"]}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
}

export default PullRequestCard;
