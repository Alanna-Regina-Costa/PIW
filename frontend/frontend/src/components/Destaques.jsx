import React from 'react';
import styles from '../assets/styles/Destaques.module.css';
import atv1 from '../assets/img/atvdestaq1.png';
import atv2 from '../assets/img/atvdestaq2.png';
import atv3 from '../assets/img/atvdestaq3.png';
import atv4 from '../assets/img/atvdestaq4.png';

const Destaques = () => {
  const atividades = [
    { img: atv1, title: 'Tour para pilotos', link: '/tourpilotos' },
    { img: atv2, title: 'Live tracking', link: '/livetracking' },
    { img: atv3, title: 'Cursos para voo', link: '/cursosparavoo' },
    { img: atv4, title: 'Turismo em Quixadá', link: '/turismoquixada' },
  ];

  return (
    <section id="destaq" className={styles.destaques}>
      <h2>Atividades em destaque</h2>
      <p>Explore quais são as atividades que mais se encaixam com você.</p>
      <div className={styles.cards}>
        {atividades.map((atv, index) => (
          <a href={atv.link} key={index} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={atv.img} alt={atv.title} />
              <h3>{atv.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Destaques;