import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import Button from "../../components/button/Button";
import FeelingProud from "./FeelingProud";
import styles from "./Greeting.module.css";

const Greeting = (props) => {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className={styles.greetMain} id="greeting">
        <div className={styles.greetingMain}>
          <div className={styles.greetingTextDiv}>
            <div>
              <h1 className={styles.greetingText} style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname!==null &&(
              <h2 className={styles.greetingNickname} style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              )}
              <p
                className={styles.greetingTextP + " " + styles.subTitle}
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className={styles.portfolioRepoBtnDiv}>
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className={styles.portfolioRepoBtn}
                />
              </div>
              {/* <div className={styles.buttonGreetingDiv}>
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className={styles.greetingImageDiv}>
            {/* <Image
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Greeting;
