import styles from "../../styles/Switch.module.css";

export const Switch = ({ label, name, onSwitch, ...props }) => {
  return (
    <label className={styles.label}>
      <span>{label}</span>

      <div class={styles.switch}>
        <input type="checkbox" name={name} onClick={onSwitch} {...props} />
        <span class={`${styles.slider} ${styles.round}`}></span>
      </div>
    </label>
  );
};
