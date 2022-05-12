import Image from "next/image";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./IssueCard.module.css";

const IssueCard = (props) => {
    const issue = props.issue;
    var iconPR;
    var bgColor;
    if (issue["closed"] === false) {
      iconPR = {
        iconifyClass: "octicon:issue-opened",
        style: { color: "#28a745" },
      };
      bgColor = "#dcffe4";
    } else {
      iconPR = {
        iconifyClass: "octicon:issue-closed",
        style: { color: "#d73a49" },
      };
      bgColor = "#ffdce0";
    }

    var subtitleString =
      "#" + issue["number"] + " opened on " + issue["createdAt"].split("T")[0];
    var assignee;
    if (issue["assignees"]["nodes"].length > 0) {
      const name = issue["assignees"]["nodes"][0]["name"];
      assignee = (
        <OverlayTrigger
          key={name}
          placement={"top"}
          style={{ marginBottom: "5px" }}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>{`Assigned to ${name}`}</strong>
            </Tooltip>
          }
        >
          <a
            href={issue["assignees"]["nodes"][0]["url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.assignedToImg}
              src={issue["assignees"]["nodes"][0]["avatarUrl"]}
              alt=""
            />
          </a>
        </OverlayTrigger>
      );
    } else {
      assignee = <noscript></noscript>;
    }

    return (
      <Fade bottom duration={2000} distance="40px">
        <div
          className={styles.issueCard}
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${iconPR.style.color}`,
          }}
        >
          <div className={styles.issueTop}>
            <div className={styles.issueHeader}>
              <span
                className={styles.iconify + " " + styles.issueIcons}
                data-icon={iconPR.iconifyClass}
                style={iconPR.style}
                data-inline="false"
              ></span>
              <div className={styles.issueTitleHeader}>
                <p className={styles.issueTitle}>
                  <a
                    href={issue["url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue["title"]}
                  </a>
                </p>
                <p className={styles.issueSubtitle}>{subtitleString}</p>
              </div>
            </div>
            {/* <div className={styles.filesChangedHeader}>
							<p
								className={styles.filesChangedText}
								style={{ backgroundColor: iconPR.style.color }}
							>
								{pullRequest["changedFiles"]}
							</p>
							<p className="files-changed-text-2">Files Changed</p>
						</div> */}
          </div>
          <div className={styles.issueDown}>
            <div className={styles.assigneeRepo}>
              <p className={styles.parentRepo}>
                Repository:{" "}
                <a
                  style={{ color: iconPR.style.color }}
                  href={issue["repository"]["url"]}
                >
                  {issue["repository"]["owner"]["login"]}/
                  {issue["repository"]["name"]}
                </a>
              </p>
              <div className={styles.assigneeInfo}>
                {/* <p className={styles.additionsFiles}>
									<strong>{pullRequest["additions"]} + </strong>
								</p>
								<p className={styles.deletionsFiles}>
									<strong>{pullRequest["deletions"]} - </strong>
								</p> */}
                {assignee}
              </div>
            </div>
            <div className={styles.ownerImgDiv}>
              <a
                href={issue["repository"]["owner"]["url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.ownerImg}
                  src={issue["repository"]["owner"]["avatarUrl"]}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
}

export default IssueCard;
