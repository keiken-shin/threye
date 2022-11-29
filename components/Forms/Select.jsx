import styles from "../../styles/Select.module.css";

export const Select = ({ label, options = [], ...props }) => {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <select className={styles.select} {...props}>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
