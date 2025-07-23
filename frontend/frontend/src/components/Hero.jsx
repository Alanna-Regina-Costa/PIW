import React from 'react';
import styles from '../assets/styles/Hero.module.css';

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText, 
  buttonAction,
  className = "" 
}) => {
  return (
    <section 
      className={`${styles.heroSection} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && (
          <button 
            className={styles.heroButton} 
            onClick={buttonAction}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;