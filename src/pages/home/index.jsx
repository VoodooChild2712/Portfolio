import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import foto from "../../images/logo2.png";

const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.left}>
          <li className={styles.list}>
            <Link
              to="/portfolio"
              className={styles.homelink}
              data-replace="Work"
            >
              <span>Work</span>
            </Link>
            <Link
              to="/resume"
              className={styles.homelink}
              data-replace="Resume"
            >
              <span>Resume</span>
            </Link>
            <Link
              to="/about-me"
              className={styles.homelink}
              data-replace="About me"
            >
              <span>About me</span>
            </Link>
          </li>
        </div>
        <div className={styles.right}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={foto} alt="logo" />
            <h2 className={styles.slogan}>WEB DEVELOPMENT</h2>
          </div>
          <h2 className={styles.intro}>
            Welcome to my world of web development! I'm Gianfranco Marzulli, a
            passionate MERN Full Stack Web Developer specializing in crafting
            exceptional digital experiences. With expertise in HTML5, CSS3,
            JavaScript, React.js, and more, I bring versatility and creativity
            to every project
          </h2>
          <h2 className={styles.intro}>
            Let's collaborate to create remarkable web solutions that make a
            lasting impact. Explore my portfolio and get in touch to bring your
            vision to life!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
