import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CursoTemplate.module.css';
import whatsappIcon from '../assets/img/whatsapp-icon.png';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const CursoVooTermicas = () => {
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
        title="Curso de Voo em Térmicas"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
      <main className={styles.cursoContent}>
        <h2>Curso de Voo em Térmicas</h2>
        
        <h3>Conteúdo do Curso</h3>
        <ol className={styles.listaConteudo}>
          {[
            "Meteorologia Aplicada: Entenda como as condições climáticas influenciam a formação e o comportamento das térmicas.",
            "Geografia: Aprenda a interpretar o relevo e as características do terreno para identificar zonas propensas à formação de térmicas.",
            "Aerologia: Explore o comportamento do ar em movimento e como ele interage com o ambiente para criar correntes ascendentes.",
            "Aerodinâmica: Compreenda os princípios que regem o comportamento do equipamento em diferentes condições de voo.",
            "Reações do Equipamento na Turbulência: Conheça as respostas do parapente em condições de turbulência e como gerenciá-las.",
            "Pilotagem Ativa: Desenvolva técnicas para manter o controle do equipamento em ambientes turbulentos e em térmicas desafiadoras.",
            "Leitura de Térmicas: Aprenda a identificar os sinais no solo, nas nuvens e no ar que indicam a presença de térmicas.",
            "Estratégias de Voo em Térmicas: Descubra como otimizar sua subida em correntes ascendentes e conectar térmicas para prolongar o voo.",
            "Segurança em Voo em Térmicas: Conheça práticas seguras para operar em térmicas, reduzindo riscos e aumentando a eficiência.",
            "Análise Pós-Voo em Térmicas: Domine a avaliação dos dados do voo para identificar oportunidades de melhoria e refinar sua técnica."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>Habilidades ao final do curso</h3>
        <ol className={styles.listaHabilidades}>
          {[
            "Origem e Formação: Entendimento profundo sobre como e onde as térmicas se formam.",
            "Direção e Deslocamento: Capacidade de identificar a direção de movimento e o deslocamento das térmicas no ar.",
            "Características Visuais: Habilidade para reconhecer o formato, potência, intensidade e possíveis turbulências associadas às térmicas.",
            "Horário Ideal de Decolagem: Conhecimento para determinar o momento mais adequado para decolar, baseado nas condições térmicas do dia.",
            "Centralização e Aproveitamento de Térmicas: Habilidade para posicionar-se corretamente na térmica e maximizar as correntes ascendentes.",
            "Subida em Diferentes Condições: Competência para subir em térmicas fortes ou fracas, aplicando técnicas apropriadas a cada situação.",
            "Prevenção e Recuperação de Colapsos: Habilidade para evitar colapsos da asa e saber como recuperar rapidamente o controle em caso de ocorrências.",
            "Voo em Conjunto: Capacidade de compartilhar térmicas com outros parapentes, mantendo a segurança e o espaço necessário para todos os pilotos.",
            "Identificação de Locais de Pouso: Habilidade para avaliar e escolher locais seguros para pouso durante o período térmico.",
            "Voos Altos, Longos e Seguros: Competência para realizar voos mais altos e duradouros, aproveitando de forma eficiente as correntes térmicas e otimizando o desempenho."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className={styles.informacoesFinais}>
          <div>
            <h4>Carga Horária</h4>
            <p>15h de aulas práticas, realizadas em até 4 dias.</p>
          </div>
          <div>
            <h4>Valores</h4>
            <p>R$1.900,00<br />Aceitamos parcelamento no<br />cartão de crédito</p>
            <p>Material incluso</p>
            <p>Material teórico;</p>
            <p>Resgate até o km 10 da decolagem;</p>
            <p>Subida para a decolagem;</p>
            <p>2 voos por dia</p>
          </div>
          <div>
            <h4>Certificados</h4>
            <p>Todos os alunos: Terão o curso registrado no sistema da Confederação<br />Brasileira de Voo Livre, para<br />o histórico de experiencia.<br />Receberão certificado digital<br />do Quixadá Aventura</p>
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

export default CursoVooTermicas;