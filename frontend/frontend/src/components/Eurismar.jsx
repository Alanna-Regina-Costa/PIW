import React from 'react';
import './Eurismar.css'; // Opcional: para estilização externa
import eurifoto1 from '../assets/img/eurifoto1.png';
import eurifoto2 from '../assets/img/eurifoto2.png';
import eurifoto3 from '../assets/img/eurifoto3.png';


const Eurismar = () => {
  return (
    <section className="eurismar">
      <div className="eurismar-container">
        <div className="fotos">
          <div
            className="fotinha img-1"
            style={{ backgroundImage: `url(${eurifoto1})` }}
          ></div>
          <div
            className="fotinha img-2"
            style={{ backgroundImage: `url(${eurifoto2})` }}
          ></div>
          <div
            className="fotinha img-3"
            style={{ backgroundImage: `url(${eurifoto3})` }}
          ></div>
        </div>
        <div className="texto-eurismar">
          <h2>Eurismar Júnior</h2>
          <p><strong>Founder Quixadá Aventura</strong></p>
          <p>
            Piloto nativo de Quixadá, atualmente possui o nível 4 monitor/instrutor da Confederação Brasileira de Voo Livre em paraglider e é aluno de asa delta. É o piloto com mais registros de voo na marca de Quixadá nos últimos 3 anos e está entre os 3 melhores pilotos de cross country do estado do Ceará. Possui o recorde Cearense da categoria EN C com um voo de 317km.
          </p>
          <p>
            Eurismar é graduado em Administração de empresas e viu a necessidade de capacitar a educação do voo livre de sua cidade. Por isso, por muitos anos, dá início à formação de diversos pilotos locais, dedicando-se a ensinar não apenas a técnica, mas também valores como disciplina, humildade, respeito e segurança. 
          </p>
          <p>
            Criador da Quixadá Aventura em 2015, é também o idealizador e principal responsável pelos grandes eventos e tours do sertão.
          </p>
          <p>
            Quixadá Aventura hoje é um dos grandes apoiadores do esporte na cidade de Quixadá, com atuação em diversos eventos nacionais. Com sua equipe de instrutores, já atendeu e preparou mais de 100 pilotos do mundo inteiro e hoje já atingiu mais de 300 mil acessos em sua página no Google.
          </p>
          <p>
            No início de 2018 participou da Rota das Emoções do Norte com o voo rebocado, para fins de exploração e análise de área para turismo de voo livre com mais segurança, infraestrutura e clima adequado.
          </p>

          <h3>Credenciais e Afiliações:</h3>
          <ul>
            <li>Habilitado e registrado pela CBVL e NAC</li>
            <li>Cadastro na Agência Nacional de Aviação Civil</li>
            <li>Certificado da Confederação Brasileira de Voo Livre (CBVL) - Nível 4 – Instrutor e certificador de novos pilotos</li>
          </ul>

          <h3>Experiência e Realizações:</h3>
          <ul>
            <li>Participações em Campeonatos Brasileiros de Parapente (2018 – 2021)</li>
            <li>Participações em etapas do campeonato Brasileiro de Asa Delta</li>
            <li>Instrutor de pilotos da Argentina, Espanha, Suíça, com apoio de Frank Brown em 2019</li>
            <li>Instrutor do SAR (Grupo de Busca e Salvamento do Aeroclube)</li>
          </ul>

          <h3>Recordes e Conquistas:</h3>
          <ul>
            <li>Recorde do Ceará de distância: 325 km</li>
            <li>Segundo maior piloto do Nordeste em voos de 300 km</li>
            <li>Recorde da categoria EN C com distância de 317,0 km</li>
            <li>Voo recorde de mais de 7h50 minutos</li>
          </ul>

          <h3>Projetos Recentes:</h3>
          <ul>
            <li>Guiando e organizando Tours CrossCountry nos estados do Ceará, Paraíba, Rio Grande do Norte</li>
            <li>Atuou com diversos atletas do Brasil e na Europa</li>
            <li>Auxilia novos atletas na trilha da nacionalidade e vem atuando em quebra de recordes no Sertão</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Eurismar;