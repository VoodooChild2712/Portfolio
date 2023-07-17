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
            <Link
              to="/contact-me"
              className={styles.homelink}
              data-replace="Contact me"
            >
              <span>Contact me</span>
            </Link>
          </li>
        </div>
        <div className={styles.right}>
          <img className={styles.logo} src={foto} alt="logo" />
          <h2 className={styles.intro}>
            Meet Gianfranco Marzulli, a passionate MERN Full Stack Web Developer
            dedicated to crafting exceptional digital experiences. With
            expertise in HTML5, CSS3, JavaScript, React.js, Express.js, Node.js,
            and MongoDB, I bring versatility and creativity to every project.
            <hr />
            Collaboration and open communication are the cornerstones of my
            approach, fostering innovation and delivering delightful user
            experiences. Through a relentless pursuit of excellence, I aim to
            create remarkable web solutions that captivate and inspire.
            <hr />
            Join me on this exciting journey as we push boundaries, overcome
            challenges, and shape the ever-evolving world of web development
            together. Together, we can create wonders and make a lasting impact.
            <hr />
            With a commitment to collaboration and a passion for creating
            outstanding digital experiences, Gianfranco Marzulli invites you to
            embark on a journey of innovation and excellence in the dynamic
            landscape of web development. Let's make a difference together and
            bring your vision to life.
            <hr />
            Apart from my technical skills, what sets me apart is my friendly
            and approachable demeanor. I prioritize building strong
            relationships with colleagues, clients, and users, fostering trust
            and collaboration. This unique blend of professionalism and
            approachability enables me to work effectively within teams and
            consistently deliver outstanding results. Explore my blog to
            discover a collection of my thoughts, insights, and experiences.
            Join me on this exciting journey of discovery as we navigate the
            ever-evolving world of web development together.
            <hr />
            Let's create remarkable experiences and make a lasting impact!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
