import styles from "../../styles/Form.module.css";

export const Switch = ({ label, name, onSwitch, checked, ...props }) => {
  return (
    <label className={`${styles.label} ${styles["switch-wrapper"]}`}>
      <span>{label}</span>

      <div className={styles.switch}>
        <input
          type="checkbox"
          name={name}
          onClick={onSwitch}
          checked={checked}
          {...props}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </div>
    </label>
  );
};
