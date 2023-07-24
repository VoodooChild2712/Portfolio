import React from "react";
import styles from "../index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.footerTitle}>
        Gianfranco {"<"}/{">"} Marzulli
      </h1>
      <h2 className={styles.footerText}>
        Thanks for taking a look!
      </h2>
    </div>
  );
};

export default Footer;
