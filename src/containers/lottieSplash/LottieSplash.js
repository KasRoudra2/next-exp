import React from "react";
import { Fade } from "react-reveal";
import { greeting, splashScreen } from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import styles from "./LottieSplash.module.css";


const LottieSplash = (props) => {
  const theme = props.theme;
  const  animData =  require(`../../assets/lottie/${splashScreen.animationFile}.json`);
  if(!splashScreen.useLottie) return null;
  return (
   <Fade big>
    <div className={styles.splashContainer + " " + styles.mainPage} style={{ backgroundColor: theme.dark }}>
      <div className={styles.splashAnimationContainer}>
        <DisplayLottie animationData={animData} />
      </div>
      <div className={styles.splashTitleContainer}>
        <span className={styles.greyColor} style={{ color: theme.secondaryText }}> &lt;</span>
        <span className={styles.splashTitle} style={{ color: theme.highlight }}>{greeting.title}</span>
        <span className={styles.greyColor} style={{ color: theme.secondaryText }}>/&gt;</span>
      </div>
    </div>
   </Fade>
  );
}

export default LottieSplash;
