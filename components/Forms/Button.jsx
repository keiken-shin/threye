import styles from "../../styles/Form.module.css";

export const Button = ({
  name,
  type = "button",
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      name={name}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
