import React from 'react';
import Hero from '../components/Hero'; // Componente existente
import TourismSection from '../components//TourismoQxd/TourismSection'; // Novo componente
import styles from './TurismoQuixada.module.css';
import bannerImage from '../assets/img/banner1.png';
import turismo1 from '../assets/img/turismo1.png';
import turismo2 from '../assets/img/turismo2.png';
import turismo3 from '../assets/img/turismo3.png';

const TurismoQuixada = () => {
  const tourismData = [
    {
      image: turismo1,
      title: "Trilha da Galinha Choca",
      description: "Descubra a beleza única de Quixadá, Ceará, através da Pedra da Galinha Choca e do Açude do Cedro. A Pedra da Galinha Choca, um destaque entre os monolitos da cidade. Sua forma peculiar, semelhante a uma galinha choca, deu origem ao nome desse monumento geológico. A pedra está localizada a 5 km do centro da cidade, em um terreno cristalino com rochas antigas",
      trailInfo: [
        { title: "Início", value: "Estacionamento principal do Açude do Cedro" },
        { title: "Distância", value: "1,8km" },
        { title: "Desnível", value: "197 metros" },
        { title: "Dificuldade", value: "Moderada" },
        { title: "Tempo", value: "1 hora" },
        { title: "Valor", value: "R$70,00 por pessoa (Valor mínimo R$140,00)" }
      ]
    },
    {
      image: turismo2,
      title: "Pedra do Cruzeiro",
      description: "A Pedra do Cruzeiro, um monólito com aproximadamente 190 metros de altura, está localizada no centro da cidade de Quixadá. Originalmente chamada 'Pedra Grande da Lagoa', seu nome atual deriva da cruz de concreto erguida no topo em 1934. Atualmente, a Pedra do Cruzeiro é visitada por turistas e moradores locais, com uma subida de dificuldade média, proporcionando uma vista panorâmica da cidade.",
      trailInfo: [
        { title: "Início", value: "Praça José Linhares Páscoa (Praça da Catedral)" },
        { title: "Distância", value: "0,5km" },
        { title: "Desnível", value: "170 metros" },
        { title: "Dificuldade", value: "Moderada" },
        { title: "Tempo", value: "30 minutos" },
        { title: "Valor", value: "R$60,00 por pessoa (Valor mínimo R$120,00)" }
      ]
    },
    {
      image: turismo3,
      title: "Trilha da Barriguda",
      description: "É uma trilha onde é possível ver de perto as mais fortes características de Quixadá, os monólitos esculpidos pela erosão e a vegetação de grande porte. O caminho contorna a Pedra do Magé, e ao chegar nela os visitantes entram em um túnel escavado na rocha de dez metros até uma clareira. No meio existe uma enorme paineira, a 'Barriguda' - que dá nome à trilha -, árvore que precisa de cinco pessoas para abraçá-la.",
      trailInfo: [
        { title: "Início", value: "Praça José Linhares Páscoa (Praça da Catedral)" },
        { title: "Distância", value: "0,5km" },
        { title: "Desnível", value: "170 metros" },
        { title: "Dificuldade", value: "Moderada" },
        { title: "Tempo", value: "30 minutos" },
        { title: "Valor", value: "R$60,00 por pessoa (Valor mínimo R$120,00)" }
      ]
    }
  ];

  return (
    <div className={styles.turismoPage}>
      <Hero
        title="Turismo em Quixadá"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
      <main className={styles.tourismContainer}>
        {tourismData.map((item, index) => (
          <TourismSection
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            trailInfo={item.trailInfo}
          />
        ))}
      </main>
    </div>
  );
};

export default TurismoQuixada;