import { ClientOnlyPortal } from "./ClientOnlyPortal";
import { useEffect } from "react";
import styles from "../styles/Modal.module.css";

export const Modal = ({ open, onClose, children, ...props }) => {
  useEffect(() => {
    if (!open) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <ClientOnlyPortal selector="#modal-container">
      <div
        className={`${styles["modal-wrapper"]} ${
          open ? styles.visible : styles.invisible
        }`}
        {...props}
      >
        <div
          className={`${styles.overlay} ${
            open ? styles["opacity-50"] : styles["invisible-overlay"]
          }`}
          onClick={onClose}
        />

        <div
          className={`${styles.body} ${
            open ? styles["opacity-100"] : styles["invisible-overlay"]
          }`}
        >
          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};
