import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CursoTemplate.module.css';
import whatsappIcon from '../assets/img/whatsapp-icon.png';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const CursoVooDistancia = () => {
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
        title="Cursos para Voo de Longas Distâncias"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
      <main className={styles.cursoContent}>
        <h2>Curso para Voo de Longas Distâncias</h2>
        
        <h3>Conteúdo do Curso</h3>
        <ol className={styles.listaConteudo}>
          {[
            "Sites e Aplicativos para Voos de XC: Ferramentas indispensáveis para planejamento, navegação e análise de voos de cross country.",
            "Meteorologia Aplicada ao Voo Livre: Entenda como interpretar as condições climáticas para tomar decisões seguras antes e durante o voo.",
            "Térmicas e o Vento: Aprenda a identificar, interpretar e utilizar térmicas e ventos para ganhar altitude e prolongar o voo.",
            "Leitura dos Ciclos Térmicos: Reconheça os melhores momentos para decolagem e exploração de térmicas.",
            "Leitura do Solo e das Nuvens: Utilize as características do terreno e formações de nuvens como guias para encontrar melhores condições de voo.",
            "Voo em Linhas: Técnicas para escolher as rotas mais eficientes e seguir linhas de voo favoráveis.",
            "Pilotagem Ativa: Domine técnicas para manter o controle da vela em diferentes condições de turbulência.",
            "Aumento da Velocidade Média de Voo: Estratégias para otimizar o desempenho e reduzir o tempo gasto em longas distâncias.",
            "Identificação de Pousos Seguros no Horário Térmico: Saiba como avaliar locais de pouso adequados, mesmo em condições de maior atividade térmica.",
            "Procedimentos para Pousar com Vento Forte: Técnicas práticas para garantir uma aterrissagem segura em condições desafiadoras de vento."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>Habilidades ao final do curso</h3>
        <ol className={styles.listaHabilidades}>
          {[
            "Planejamento de Voos: Capacidade de planejar voos de cross country, levando em conta distâncias, condições meteorológicas e objetivos pessoais.",
            "Criação e Importação de Rotas: Habilidade para criar rotas detalhadas e importá-las para o GPS, facilitando a navegação em voo.",
            "Leitura de Ciclos Térmicos: Competência para interpretar ciclos térmicos e identificar os momentos ideais para decolar.",
            "Identificação de Térmicas: Habilidade para localizar pontos de surgimento de térmicas, compreender seu formato e direção de deriva.",
            "Centralização e Subida em Térmicas: Técnica para centralizar e subir em térmicas, adaptando-se a condições fortes ou fracas.",
            "Técnicas de Controle e Segurança",
            "Prevenção e Recuperação de Colapsos: Competência para evitar colapsos da asa e realizar a recuperação mantendo o controle do parapente.",
            "Recuperação sem Riscos: Habilidade para retomar o voo sem a necessidade de se arriscar em térmicas de baixa altura, utilizando estratégias alternativas.",
            "Identificação de Pousos Seguros: Capacidade de avaliar condições locais e variações de vento para pousar com segurança, mesmo em horários térmicos.",
            "Pouso com Vento Forte: Competência para realizar pousos controlados em condições de vento forte, garantindo segurança e precisão."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className={styles.informacoesFinais}>
          <div>
            <h4>Carga Horária</h4>
            <p>Prepare-se para elevar seu voo<br />ao próximo nível com 3 dias<br />intensos de voos, realizados<br />durante os 4 dias de curso,<br />onde você terá acesso a<br />hospedagem, resgate e todo<br />o suporte necessário.</p>
          </div>
          <div>
            <h4>Valores</h4>
            <p>R$2.500,00<br />Aceitamos parcelamento no<br />cartão de crédito</p>
            <p>Material incluso</p>
            <p>Material teórico;</p>
            <p>Subida para a decolagem;</p>
            <p>Resgate até o km 100 da decolagem</p>
            <p>3 diárias em pousada ou hotel<br />em Quixadá, a hospedagem poderá ser<br />em quarto duplo com outros<br />participantes.</p>
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

export default CursoVooDistancia;