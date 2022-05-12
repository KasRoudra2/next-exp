import React from "react";
import styles from "./LoaderLogo.module.css";

const LoaderLogo = (props) => {
    const theme = props.theme;
    return (
      <div className={styles.loaderWrapper} style={{ color: theme.body}}><div className={styles.loader}></div></div>
    );
}

export default LoaderLogo;
