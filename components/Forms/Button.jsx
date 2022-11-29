import styles from "../../styles/Button.module.css";

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
