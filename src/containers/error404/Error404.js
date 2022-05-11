import React from "react";
import { Fade } from "react-reveal";
import NavLink from "../../components/navLink/NavLink";
import styles from "./Error404.module.css";

const Error404 = (props) => {
    const theme = props.theme;
    return (
      <div className={styles.errorMain}>
        <div className={styles.errorClass}>
          <Fade bottom duration={2000} distance="40px">
            <h1 style={{color: theme.text }}>Woops</h1>
            <h1 className={styles.error404} style={{color: theme.secondaryText }}>404</h1>
            <p style={{color: theme.text }}>The requested page is unavailable at the moment!</p>
            <NavLink
              className={styles.mainButton}
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </NavLink>
          </Fade>
      </div>
      </div>
    );
}
export default Error404;