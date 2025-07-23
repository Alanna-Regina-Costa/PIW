import React from 'react';
import styles from '../assets/styles/Destaques.module.css';
import atv1 from '../assets/img/atvdestaq1.png';
import atv2 from '../assets/img/atvdestaq2.png';
import atv3 from '../assets/img/atvdestaq3.png';
import atv4 from '../assets/img/atvdestaq4.png';
import { Link } from 'react-router-dom';
const Destaques = () => {
  return (
    <section className={styles.destaques}>
      <h2>Atividades em destaque</h2>
      
      <div className={styles.cards}>
        
        <Link to="/tourpilotos" className={styles.cardLink}>
          <div className={styles.card}>
            <img src={atv1} alt="Tour para pilotos" />
            <h3>Tour para pilotos</h3>
          </div>
        </Link>

        <Link to="/livetracking" className={styles.cardLink}>
          <div className={styles.card}>
            <img src={atv2} alt="Live tracking" />
            <h3>Live tracking</h3>
          </div>
        </Link>

        <Link to="/cursosparavoo" className={styles.cardLink}>
          <div className={styles.card}>
            <img src={atv3} alt="Cursos para voo" />
            <h3>Cursos para voo</h3>
          </div>
        </Link>

        <Link to="/turismoquixada" className={styles.cardLink}>
          <div className={styles.card}>
            <img src={atv4} alt="Turismo em Quixadá" />
            <h3>Turismo em Quixadá</h3>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Destaques;