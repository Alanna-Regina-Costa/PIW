import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseSection.module.css';

const CourseSection = ({ image, title, description, link }) => {
  return (
    <section className={styles.conteudo}>
      <img src={image} alt={title} className={styles.courseImage} />
      <div className={styles.texto}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link} className={styles.botao}>Saiba mais</Link>
      </div>
    </section>
  );
};

export default CourseSection;