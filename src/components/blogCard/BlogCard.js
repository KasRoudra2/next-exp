import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Fade } from "react-reveal";
import styles from "./BlogCard.module.css";

const BlogCard = ({blog, theme}) => {
  const [ show, setShow ] = useState(false);
  function openUrlInNewTab(url, name) {
    if (!url) {
      setShow(true);
    	setTimeout(() => {
          setShow(false);
      }, 4000);
    }
    else {
        var win = window.open(url, "_blank");
        win.focus();
    }
  }
  return (
    <Fade bottom duration={2000}>
     <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={styles.blogContainer} style={{backgroundColor: theme.jacketColor}} align="center">
      <a
          className={styles.blogCard + " " + styles.blogCardShadow}
          href={blog.url}
        >
          <h3 className={styles.blogTitle} style={{ color : theme.text }}>
            {blog.title}
          </h3>
          <p className={styles.small} style={{ color : theme.secondaryText }}>
            {blog.description}
          </p>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
          </a>
      </div>
     </div>
     <Alert show={show} variant="error">
        <Alert.Heading>404| Not Found!</Alert.Heading>
     </Alert>
    </Fade>
  );
}

export default BlogCard;