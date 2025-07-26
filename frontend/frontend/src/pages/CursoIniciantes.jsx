import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CursoIniciantes.module.css';
import whatsappIcon from '../assets/img/whatsapp-icon.png';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const CursoIniciantes = () => {
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
        title="Curso Para Iniciantes"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      <main className={styles.cursoContent}>
        <h2>Curso para iniciantes no Voo Livre</h2>
        
        <h3>Conteúdo do Curso</h3>
        <ol className={styles.listaConteudo}>
          {[
            "Entenda os principais conceitos de clima e tempo aplicados ao voo livre com foco na interpretação de condições favoráveis para voar com segurança.",
            "Aerologia e Aerodinâmica: Explore os fundamentos do comportamento do ar e a dinâmica que influencia o desempenho do parapente.",
            "Homologação de Equipamentos de Voo Livre: Conheça os padrões e certificações internacionais que garantem a segurança dos equipamentos utilizados.",
            "Conhecimento sobre o Equipamento: Aprenda a identificar, ajustar e manter os componentes essenciais do parapente.",
            "Uso de Aplicativos e Sistemas para Auxílio no Voo: Domine as ferramentas tecnológicas que facilitam o planejamento e a execução de voos eficientes.",
            "Legislação, Organizações e Regras de Tráfego Aéreo: Familiarize-se com as normas, leis e entidades reguladoras do espaço aéreo para voar com responsabilidade.",
            "Compreensão do Espaço Aéreo: Entenda a divisão do espaço aéreo, restrições e permissões para garantir a segurança e conformidade durante os voos.",
            "Teoria e Prática de Manobras no Parapente: Aprenda as técnicas fundamentais para realizar manobras básicas e avançadas, com segurança e controle.",
            "Técnicas de Controle de Vela: Desenvolva habilidades para comandar a vela com precisão em diferentes condições de voo.",
            "Procedimentos de Segurança: Decolagem, Voo e Pouso. Treine os passos críticos para realizar cada fase do voo com confiança e minimizar riscos."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>Habilidades ao final do curso</h3>
        <ol className={styles.listaHabilidades}>
          {[
            "Conhecimento técnico e prático",
            "Meteorologia e Análise Climática: Capacidade de interpretar as condições climáticas e tomar decisões seguras antes do voo.",
            "Aerologia e Aerodinâmica: Compreensão das forças envolvidas no voo para operar com segurança e eficiência.",
            "Homologação de Equipamentos: Entendimento sobre os padrões de certificação e a importância de escolher equipamentos adequados para o voo livre.",
            "Equipamento Parapente: Conhecimento detalhado das partes e funcionalidades do equipamento, garantindo manuseio seguro e eficiente.",
            "Aplicativos e Sistemas: Familiaridade com ferramentas tecnológicas que auxiliam no planejamento, navegação e registro de voos.",
            "Registro e Análise de Voo: Habilidade para registrar oficialmente os voos e analisar os dados, identificando áreas para melhoria.",
            "Legislação e Espaço Aéreo: Domínio das normas de tráfego aéreo, organizações reguladoras e restrições do espaço aéreo, garantindo a conformidade.",
            "Primeiros Socorros: Noções básicas para lidar com emergências médicas durante a prática do voo livre.",
            "Técnicas e Procedimentos de Voo",
            "Checagem Pré-Voo: Capacidade de inspecionar o equipamento e assegurar sua funcionalidade antes da decolagem.",
            "Velocidade e Direção do Vento: Identificação precisa das condições do vento para procedimentos de decolagem e pouso seguros.",
            "Elementos Favoráveis ao Voo: Reconhecimento de fatores que impactam positivamente ou negativamente a decolagem, voo e pouso.",
            "Inflagem da Vela: Habilidade para inflar a vela sem auxílio externo e abortar a decolagem quando necessário, mesmo após a inflagem.",
            "Decolagem Independente: Execução da decolagem sem assistência, de forma segura e eficiente.",
            "Ponto de Stall: Compreensão teórica e prática do ponto de stall e sua implicação na segurança do voo.",
            "Manobras de Controle: Execução e interrupção de pêndulos laterais e frontais, além de orelhas e curvas.",
            "Prática em Colapsos: Experiência prática em lidar com colapsos e controlar giros indesejados.",
            "Planejamento e Pouso: Planejamento e realização de pousos adequados, mesmo em condições desafiadoras."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className={styles.informacoesFinais}>
          <div>
            <h4>Carga Horária</h4>
            <p>70h de aula prática<br />12h de aula teórica<br />20 voos orientados via rádio.<br />Treinos no sertão, na praia e na montanha.</p>
          </div>
          <div>
            <h4>Valores</h4>
            <p>R$4.500,00<br />Aceitamos parcelamento no<br />cartão de crédito</p>
            <p>Material incluso</p>
            <p>Parapente de treino no chão</p>
            <p>Voo duplo de instrução</p>
          </div>
          <div>
            <h4>Certificados</h4>
            <p>Todos os alunos: Habilitação CBVL / Nível - Aluno<br />Cadastro na Agência Nacional<br />de Aviação Civil<br />Alunos aprovados: CBVL / Nível - 1<br />Registro na Federação<br />Aeronáutica Intern</p>
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

export default CursoIniciantes;