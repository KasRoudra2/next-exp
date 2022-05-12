import React from "react";
import styles from "./Input.module.css";

const Input = ({name, type, placeholder, height, onChange}) => {
  return (
    <div className="mb-1 col-md-12 input-main">
      <div className={styles.formFloating}>
        <textarea
          required
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={type}
          className={styles.formControl + " " + styles.formControlLg}
          style={{height: height}}
        ></textarea>
        <label></label>
      </div>
    </div>
  );
};

export default Input;
