import React from "react";
import styles from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import infinity1 from "./images/infinity2.png";
import infinity2 from "./images/infinity3.png";
import infinity3 from "./images/infinity4.png";
import infinity4 from "./images/infinity5.png";
import infinity5 from "./images/infinity6.png";
import infinity6 from "./images/infinity7.png";
import infinity7 from "./images/infinity8.png";
import infinity8 from "./images/infinity-games.png";
import musicApi from "./images/music-api1.png";
import musicApi2 from "./images/music-api2.png";
import musicApi3 from "./images/music-api3.png";
import rick from "./images/rick&morty.png";
import tasksImg from "./images/tasks.png";

const Portfolio = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.portfolioTitle}>PROJECTS</h1>
      <div className={styles.main}>
        <div className={styles.intro}>
          <h2 className={styles.introText}>
            Welcome to my Works page! Here, you'll find a showcase of my MERN
            (MongoDB, Express.js, React.js, Node.js) web development projects.
            Get ready to explore a collection of my creations, crafted with love
            and passion.
          </h2>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel className={styles.carousel}>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Full JavaScript and Bootstrap project</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity2}
                  alt="Slide 2"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Made for the course through my formation</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity3}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Used a lot of JS logic to create the static page</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity4}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Was the first full static page based on JavaScript logic</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity5}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Made in collaboration with some course partners</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity6}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
                <p>Click to see the whole code!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity7}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/voodoochild2712/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={infinity8}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Infinity Games</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.carouselContainer}>
          <Carousel className={styles.carousel}>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/VoodooChild2712/first-fullstack-attempt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={musicApi}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Music Api</h5>
                <p>
                  First FullStack attempt with React.js, Node.js and MongoDB
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/VoodooChild2712/first-fullstack-attempt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={musicApi2}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Music Api</h5>
                <p>
                  DataBase made from the beggining with users/music models, with
                  roles
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/VoodooChild2712/second-backend-attempt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={musicApi3}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Music Api</h5>
                <p>Click to check the back-end logic</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.intro}>
          <h2 className={styles.introText}>
            Experience the enchanting fusion of pixels and code in my
            captivating portfolio. Immerse yourself in a world where innovation
            and creativity thrive, exploring the mesmerizing realm of my MERN
            projects. Witness the magic of web development unfold as you
            discover stunning digital experiences that will leave you
            spellbound.
          </h2>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.intro}>
          <h2 className={styles.introText}>
            So, grab a cup of coffee, sit back, and enjoy the journey. Let's
            make your digital dreams a reality together!
          </h2>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel className={styles.carousel}>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/VoodooChild2712/api-consumer-reactJs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={rick}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Rick & Morty</h5>
                <p>API consumer with react</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://github.com/VoodooChild2712/tasks-reactJs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tasksImg}
                  alt="Slide 2"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Tasks on React</h5>
                <p>Tasks creator with React.js</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className={styles.outro}>
        <h2 className={styles.outroText}>
          As you may see, I haven't been able to dedicate as much time to coding
          as I'd love due to life commitments. Now, I'm eager to embrace new
          coding opportunities and invite you to join me on this coding journey.
          Let's create something extraordinary together!
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
