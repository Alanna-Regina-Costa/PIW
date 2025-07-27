import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CursoTemplate.module.css';
import whatsappIcon from '../assets/img/whatsapp-icon.png';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const CursoRebocado = () => {
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
        title="Curso de Opereção em Voo Rebocado"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
      <main className={styles.cursoContent}>
        <h2>Curso para Voo de Operação em Voo Rebocado</h2>
        
        <h3>Conteúdo do Curso</h3>
        <ol className={styles.listaConteudo}>
          {[
            "Montagem e manutenção do sistema de reboque, incluindo reboque e linhas.",
            "Tipos de decolagens utilizados no reboque.",
            "Verificações de segurança pré-decolagem para garantir condições ideais.",
            "Definição da pressão ideal durante o reboque.",
            "Protocolos de comunicação entre o operador de reboque e o piloto.",
            "Identificação e aplicação do ângulo ideal para uma decolagem segura.",
            "Técnicas de rebobinamento adequadas para o sistema de reboque.",
            "Verificação e correção de possíveis falhas ou problemas durante a operação de reboque.",
            "Procedimentos de emergência e como lidar com situações inesperadas durante o reboque.",
            "Noções básicas sobre segurança e prevenção de acidentes relacionados ao reboque."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>Habilidades ao final do curso</h3>
        <ol className={styles.listaHabilidades}>
          {[
            "Montagem e manutenção do sistema de reboque: O aluno será capaz de montar e realizar a manutenção adequada do sistema de reboque, garantindo seu funcionamento seguro e eficiente.",
            "Decolagens seguras: O aluno aprenderá os diferentes tipos de decolagens utilizados no reboque e estará apto a realizar decolagens de forma segura, levando em consideração fatores como vento, ângulo ideal e pressão adequada.",
            "Verificações de segurança pré-decolagem: O aluno será capaz de realizar as verificações de segurança necessárias antes da decolagem, garantindo que todas as condições estejam adequadas para uma operação segura.",
            "Controle da pressão ideal: O aluno saberá identificar e ajustar a pressão ideal no sistema de reboque, permitindo uma decolagem suave e controlada.",
            "Comunicação efetiva: O aluno será capaz de estabelecer uma comunicação clara e efetiva com o piloto durante o processo de reboque, garantindo uma coordenação adequada e segurança nas operações.",
            "Identificação e aplicação do ângulo ideal: O aluno terá a habilidade de identificar o ângulo ideal para uma decolagem segura, garantindo uma trajetória correta durante o reboque.",
            "Rebobinamento correto: O aluno será capaz de realizar o rebobinamento adequado das linhas de reboque, garantindo que estejam organizadas e prontas para o próximo uso.",
            "Identificação e correção de falhas: O aluno será capaz de identificar e corrigir possíveis falhas ou problemas que possam ocorrer durante a operação de reboque, garantindo a continuidade segura do voo.",
            "Procedimentos de emergência: O aluno terá conhecimento sobre os procedimentos de emergência e estará preparado para lidar com situações inesperadas durante o reboque, garantindo a segurança de todos os envolvidos.",
            "Conhecimentos de segurança: O aluno terá noções básicas sobre segurança e prevenção de acidentes relacionados ao reboque, estando ciente dos principais cuidados a serem tomados para garantir voos seguros e bem-sucedidos."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className={styles.informacoesFinais}>
          <div>
            <h4>Carga Horária</h4>
            <p>25 horas de curso realizadas em 5 dias.</p>
          </div>
          <div>
            <h4>Valores</h4>
            <p>R$6.000,00<br />Aceitamos parcelamento no<br />cartão de crédito</p>
            <p>Material incluso</p>
            <p>5 dias de aula no qual poderão ser realizadas na cidade do aluno;</p>
            <p>Participação do aluno em uma temporada de reboque no sertão com o time do Quixadá Aventura para ganhar mais experiencia.</p>
          </div>
          <div>
            <h4>Certificados</h4>
            <p>Todos os alunos: Terão o curso registrado no sistema da Confederação Brasileira de Voo Livre, paro o histórico de experiencia.Receberão certificado digital do Quixadá Aventura</p>
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

export default CursoRebocado;