import styles from "../../styles/Input.module.css";

export const Input = ({ label, type = "text", placeholder = "", ...props }) => {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};
