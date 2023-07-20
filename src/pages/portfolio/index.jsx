import React from "react";
import styles from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "./images/infinity-games.png";

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
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 2"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 2</h5>
                <p>Some description for Project 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 3</h5>
                <p>Some description for Project 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
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
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 2"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 2</h5>
                <p>Some description for Project 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 3</h5>
                <p>Some description for Project 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
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
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 2"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 2</h5>
                <p>Some description for Project 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 3"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 3</h5>
                <p>Some description for Project 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <a
                href="https://voodoochild2712.github.io/Infinity-Games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image1}
                  alt="Slide 1"
                  className={styles.carouselImage}
                />
              </a>
              <Carousel.Caption className={styles.carouselDescription}>
                <h5>Project 1</h5>
                <p>Some description for Project 1</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
