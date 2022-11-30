import styles from "../../styles/Form.module.css";

export const Input = ({
  label,
  type = "text",
  placeholder = "",
  onChange,
  ...props
}) => {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
