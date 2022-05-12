import React from "react";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import styles from "./Certifications.module.css";



const Certifications = (props) => {
    const theme = props.theme;
    const viewCert= certifications.display;

    if (!viewCert){
    	return null;
    }	
    return (
      <div className={styles.main} id="certs">
        <div className={styles.certsHeaderDiv}>
          <Fade bottom duration={2000} distance="20px">
            <h1 className={styles.certsHeader} style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className={styles.certsBodyDiv}>
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} key={cert.title}/>;
          })}
        </div>
      </div>
    );
}

export default Certifications;
