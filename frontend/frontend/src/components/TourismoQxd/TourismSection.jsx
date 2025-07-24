import React from 'react';
import styles from './TourismSection.module.css';

const TourismSection = ({ image, title, description, trailInfo }) => {
  return (
    <section className={styles.conteudo}>
      <img src={image} alt={title} className={styles.tourismImage} />
      <div className={styles.texto}>
        <h2>{title}</h2>
        <p>{description}</p>
        
        <div className={styles.infoTrilha}>
          {trailInfo.map((info, index) => (
            <div key={index}>
              <p className={styles.infoTitulo}>{info.title}</p>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
        
        <a href="#" className={styles.botao}>Entre em contato</a>
      </div>
    </section>
  );
};

export default TourismSection;