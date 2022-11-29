import { Card } from "./Card";
import styles from "../styles/Footer.module.css";

const list = [
  { label: "Roads", color: "#0066ff" },
  { label: "Lights", color: "#17dd7a" },
];

export const Footer = () => {
  return (
    <Card title="Bottom Bar">
      <div className={styles.wrapper}>
        {list.map((item, idx) => (
          <section className={styles.section} key={idx}>
            <div
              className={styles.block}
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </section>
        ))}
      </div>
    </Card>
  );
};
