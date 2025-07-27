import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CursoTemplate.module.css';
import whatsappIcon from '../assets/img/whatsapp-icon.png';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const CursoResgate = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle(styles.scrolled, window.scrollY > 800);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.cursoPage}>
      <Hero
        title="Cursos para resgate de Voo Livre"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
       <main className={styles.cursoContent}>
      <h2>Curso para Resgate de Voo Livre</h2>
      
      <h3>Conteúdo do Curso</h3>
      <ol className={styles.listaConteudo}>
        {[
          "O papel do Resgate",
          "Equipamentos de voo livre",
          "Comunicação com piloto",
          "Conhecimentos Básicos de Cross Country",
          "Veículo e transporte de pilotos e equipamento",
          "Coordenadas Geográficas e leitura mapas",
          "Rádio Comunicação",
          "Aplicativos de navegação",
          "Sistemas de Rastreamento",
          "Procedimentos em caso de acidentes e primeiros socorros"
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <h3>Habilidades ao final do curso</h3>
      <ol className={styles.listaHabilidades}>
        {[
          "Conhecimento sobre o papel e a importância do resgate no contexto do voo livre.",
          "Familiaridade com os equipamentos utilizados no voo livre e a capacidade de manuseá-los adequadamente durante as operações de resgate.",
          "Conhecimentos básicos sobre o voo de Cross Country, o que permite entender as necessidades e demandas dos pilotos durante o resgate.",
          "Habilidade em operar o veículo de resgate e transportar pilotos e equipamentos com segurança e eficiência.",
          "Competência na leitura de coordenadas geográficas e mapas para orientar-se durante as operações de resgate.",
          "Capacidade de utilizar a comunicação por rádio para se comunicar com os pilotos em voo e coordenar as atividades de resgate.",
          "Familiaridade com aplicativos de navegação utilizados para auxiliar na localização e acompanhamento dos pilotos em voo.",
          "Conhecimento sobre sistemas de rastreamento utilizados para monitorar a localização dos pilotos e garantir a segurança durante o resgate.",
          "Habilidade em estabelecer uma comunicação clara e eficaz com os pilotos, transmitindo informações relevantes e oferecendo suporte adequado.",
          "Conhecimentos sobre os procedimentos em caso de acidentes e primeiros socorros, garantindo uma resposta rápida e adequada em situações de emergência."
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <div className={styles.informacoesFinais}>
        <div>
          <h4>Carga Horária</h4>
          <p>12 horas de curso realizadas em até 3 dias.</p>
        </div>
        <div>
          <h4>Valores</h4>
          <p>R$1.000,00<br />Aceitamos parcelamento no<br />cartão de crédito</p>
          <p>Em caso de contratação para a<br />empresa<br />Esse valor terá abatimento<br />de 50%</p>
        </div>
        <div>
          <h4>Certificados</h4>
          <p>Todos os alunos: Receberão<br />certificado digital<br />do Quixadá Aventura</p>
        </div>
      </div>

        <div className={styles.whatsapp}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <p>Entre em contato via WhatsApp se deseja se matricular no curso.</p>
        </div>
      </main>
    </div>
  );
};

export default CursoResgate;