import styles from "../../styles/Form.module.css";

export const Select = ({ label, options = [], onChange, ...props }) => {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <select className={styles.select} onChange={onChange} {...props}>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
