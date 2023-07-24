import React from "react";
import styles from "./index.module.css";

const AboutMe = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.background}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={styles.textContainer1}>
        <h2 className={styles.text1}>
          Greetings! I'm Gianfranco Marzulli, a Web Developer on a captivating
          journey. Born on December 27, 2000, in Bahia Blanca, Argentina, my
          life took me to Miami, Florida, during my early years, and then in
          2006 back to Tornquist, Buenos Aires, Argentina, where I lived 3 years
          before moving to Rawson, Chubut, Argentina.
        </h2>
      </div>
      <div className={styles.textContainer2}>
        <h2 className={styles.text2}>
          In 2021, my web development odyssey began with independent research,
          and I later embarked on a MERN Full Stack bootcamp. An exciting twist
          brought me to Italy in 2022 to secure my Italian citizenship.
        </h2>
      </div>
      <div className={styles.textContainer3}>
        <h2 className={styles.text3}>
          When I'm not coding, you'll find me immersed in the mesmerizing tunes
          of Guns n' Roses, Pink Floyd, Led Zeppelin and Hendrix, indulging in
          anime, or strumming my guitar.
        </h2>
      </div>
      <div className={styles.textContainer4}>
        <h2 className={styles.text4}>
          While I devoted myself to learning code, life demanded some detours. I
          toiled hard to fulfill my dream of traveling to Italy, and even here,
          I had to persevere to make a living.
        </h2>
      </div>
      <div className={styles.textContainer5}>
        <h2 className={styles.text5}>
          Now, I'm on a quest to dedicate myself entirely to Web Development and
          turn my passion into a thriving career. I'm excited about the
          possibilities ahead and eagerly seek opportunities to work as a Web
          Developer.
        </h2>
      </div>
      <div className={styles.textContainer6}>
        <h2 className={styles.text6}>
          Let's connect, collaborate, and craft something extraordinary
          together!
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
