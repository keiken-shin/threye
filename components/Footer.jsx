import { Card } from "./Card";
import styles from "../styles/Footer.module.css";
import { actionList, Context } from "../lib/Context";
import { useContext } from "react";

export const Footer = () => {
  const { setActionType } = useContext(Context);

  return (
    <Card title="Bottom Bar">
      <div className={styles.wrapper}>
        {actionList.map((item, idx) => (
          <section
            className={styles.section}
            key={idx}
            onClick={() => setActionType(item.label)}
          >
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
