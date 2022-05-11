import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        className={styles.checkbox}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className={styles.slider + styles.round}></span>
    </label>
  );
};
export default ToggleSwitch;
