import React from 'react';
import styles from '../assets/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Aventure-se pelo sertão e <br /> viva uma experiência única!</h1>
        <a href="#destaq" className={styles.btn}>
          Descubra a aventura perfeita para você
        </a>
      </div>
    </section>
  );
};

export default Hero;