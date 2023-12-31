import React from "react";
import styles from "../index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const currrentPath = location.pathname;

  return (
    <div className={styles.navbar}>
      <h1 className={styles.navTitle}>
        Gianfranco {"<"}/{">"} Marzulli
      </h1>
      {currrentPath === "/" ? (
        ""
      ) : (
        <div className={styles.navButtons}>
          <div className={styles.mediaRefNav}>
            <a href="/" className="bi bi-house-door fs-2">
              {" "}
            </a>
          </div>
          <div className={styles.mediaRefNav}>
            <a href="/portfolio" className="bi bi-briefcase fs-2">
              {" "}
            </a>
          </div>
          <div className={styles.mediaRefNav}>
            <a href="/resume" className="bi bi-file-earmark-person fs-2">
              {" "}
            </a>
          </div>
          <div className={styles.mediaRefNav}>
            <a href="/about-me" className="bi bi-book fs-2">
              {" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
