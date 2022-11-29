import styles from "../styles/Card.module.css";

export const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{title}</h3>
      </header>

      <section className={styles.body}>{children}</section>
    </div>
  );
};
