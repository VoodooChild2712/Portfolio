import React from "react";
import styles from "../index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.mediaRef}>
        <a
          href="https://www.linkedin.com/in/gianfranco-marzulli-929713230"
          className="bi bi-linkedin text-dark fs-1"
          target="blank"
        > </a>
      </div>
      <div className={styles.mediaRef}>
        <a
          href="https://github.com/VoodooChild2712"
          className="bi bi-github text-dark fs-1"
          target="blank"
        > </a>
      </div>
      <div className={styles.mediaRef}>
        <a
          href="mailto:marzulligianfranco@gmail.com"
          className="bi bi-envelope text-dark fs-1"
        > </a>
      </div>
    </div>
  );
};

export default Sidebar;
