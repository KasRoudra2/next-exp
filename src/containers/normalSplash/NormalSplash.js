import React from "react";
import { splashScreen } from "../../portfolio";
import LoaderLogo from "../../components/loader/LoaderLogo.js";
import styles from "./NormalSplash.module.css";


const NormalSplash = (props) => {
  const theme = props.theme;
  if(splashScreen.useLottie) return null;
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.screen} style={{ backgroundColor: theme.body }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

export default NormalSplash;
