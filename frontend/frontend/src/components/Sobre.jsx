import React from 'react';
import './Sobre.css';
import pilotos1 from '../assets/img/pilotos1.png'
import pilotos2 from '../assets/img/pilotos2.png';
import pilotos3 from '../assets/img/piloto3.png';
import pilotos4 from '../assets/img/piloto4.png';
import pilotos5 from '../assets/img/piloto5.png';
import pilotos6 from '../assets/img/piloto6.png';
import pilotos7 from '../assets/img/piloto7.png';
import pilotos8 from '../assets/img/piloto8.png';
import pilotos9 from '../assets/img/piloto9.png';
import pilotos10 from '../assets/img/piloto10.png';
import pilotos11 from '../assets/img/piloto11.png';
import pilotos12 from '../assets/img/piloto12.png';
import pilotos13 from '../assets/img/piloto13.png';
import pilotos14 from '../assets/img/piloto14.png';
import pilotos15 from '../assets/img/piloto15.png';

import sobnos1 from '../assets/img/sobnos1.png';
import sobnos2 from '../assets/img/sobnos2.png';
import sobnos3 from '../assets/img/sobnos3.png';
import sobnos4 from '../assets/img/sobnos4.png';
import pedcrato from '../assets/img/pedcrato.png';

// Não é possível importar imagens diretamente de URLs externas usando import em React.
// Para usar essa imagem, utilize a URL diretamente no atributo src do elemento <img>.
// Exemplo:
// <img src="https://cdn-icons-png.flaticon.com/512/159/159604.png" alt="Ícone Visão" />

const pilotos = [
  {
    img: pilotos1,
    alt: 'Josef Eisinger',
    nome: 'Josef Edlinger',
    desc: 'World record holder in wing B low',
  },
  {
    img: pilotos2,
    alt: 'Alexander Robé',
    nome: 'Alexander Robé',
    desc: 'World record XC 2015',
  },
  {
    img: pilotos3,
    alt: 'Koen Vancauwenberghe',
    nome: 'Koen Vancampenhoudt',
    desc: 'Advanced pilot, flights greater than 300km',
  },
  {
    img: pilotos4,
    alt: 'Yves Chenevoy & Kevin',
    nome: 'Veso Ovcharov and Kevin Philip',
    desc: 'They are among the bests in the world in acrobatic flight. In Quixadá they both flew the 400km race and Kevin managed to win the 2016xc',
  },
  {
    img: pilotos5,
    alt: 'Adan and Felipe',
    nome: 'Adan and Friends',
    desc: 'Poland team that broke the national record flying in Quixadá',
  },
  {
    img: pilotos6,
    alt: 'Florentin Campana',
    nome: 'Florentin Coppey and friends',
    desc: 'Everyone has overcome their distances',
  },
  {
    img: pilotos7,
    alt: 'Vitor Chichorro',
    nome: 'Veso Ovcharov',
    desc: 'Previously presented Clovis: Flight instructor in Minas Gerais',
  },
  {
    img: pilotos8,
    alt: 'Old members of flight school',
    nome: 'Odilon Jr and flight student',
    desc: 'CBVL dual flight instructor',
  },
  {
    img: pilotos9,
    alt: 'Robert Häfeli',
    nome: 'Robert Haider',
    desc: 'Test pilot of a large European company',
  },
  {
    img: pilotos10,
    alt: 'Luis Flor',
    nome: 'Luk Fly',
    desc: 'Previously presented Marina: Brazilian pilot intermediary Josias: Brazilian pilot intermediary',
  },
  {
    img: pilotos11,
    alt: 'Chico Protásio',
    nome: 'Ondrej Prochazka',
    desc: 'This is among the best in the world in acrobatic flight. Flying across has exceeded 300km',
  },
  {
    img: pilotos12,
    alt: 'Equipe de Instrução',
    nome: 'Carlos Bonifacio',
    desc: 'Advanced pilot, flights greater than 300km',
  },
  {
    img: pilotos13,
    alt: 'Equipe de competidores',
    nome: 'Florentin',
    desc: 'Pilot of EN-B that surpassed its record in Quixadá Falko Felix: Double flight world record',
  },
  {
    img: pilotos14,
    alt: 'Equipe Fundadora',
    nome: 'Silvio Zugarine',
    desc: '(5th from left to right) Experienced pilot with flights over 300km',
  },
  {
    img: pilotos15,
    alt: 'Equipe atual',
    nome: 'Alexandre',
    desc: 'Founder of the Ceará Cross Country League Pergentino Junior: Advanced xc native pilot.',
  },
];

const Sobre = () => (
  <div>
    <section id="sobre" className="sobre">
      <h2>Sobre Nós</h2>
      <p className="sub">Conheça mais sobre o Quixadá Aventura e a cidade de Quixadá.</p>

      <h3>A cidade Quixadá</h3>
      <div className="galeria-custom">
        <div className="img-esquerda">
          <img src={sobnos1} alt="Imagem 1" />
        </div>
        <div className="img-direita">
          <div className="img-cima">
            <img src={sobnos2} alt="Imagem 2" />
          </div>
          <div className="img-baixo">
            <img src={sobnos3} alt="Imagem 3" />
            <img src={sobnos4} alt="Imagem 4" />
          </div>
        </div>
      </div>

      <div className="descricao-wrapper">
        <div className="descricao">
          <p>É uma opção de turismo e aventura no Nordeste Brasileiro, seu principal atrativo está nos ares. A cidade é considerada o melhor local para a prática de Voo Livre no mundo, devido à grande quantidade de térmicas na região.</p>
          <p>Para outros aventureiros, as enormes pedras que envolvem a cidade proporcionam ótimas opções de rapel, escalada e trilhas.</p>
          <p>A palavra Quixadá em tupi-guarani quer dizer “pedra de ponta curvada” ou "cural de pedras". Fica situada na região central do Ceará e também é palco de diversas práticas esportivas radicais, que reúne praticantes de escalada, rapel, arvorismo, voo livre, motocross, mountain bike, corrida de orientação, off road, entre muitos outros.</p>
          <p>A cidade também se destaca pelas diversas aparições de OVNIS, com alguns casos famosos internacionalmente.</p>
        </div>
        <div className="imagem-destaque-wrapper">
          <img src={pedcrato} className="imagem-destaque" alt="Pedra do Crato" />
        </div>
      </div>
    </section>

    <section className="visao-missao-valores">
      <h2>Quixadá Aventura</h2>
      <div className="cartao">
        <div className="cart">
          <img src="https://cdn-icons-png.flaticon.com/512/159/159604.png" alt="Ícone Visão" />
          <h3>Visão</h3>
          <p>Ser referência mundial na assistência e prática do voo livre no nordeste brasileiro.</p>
        </div>
        <div className="cart">
          <img src="https://cdn-icons-png.flaticon.com/512/2204/2204346.png" alt="Ícone Missão" />
          <h3>Missão</h3>
          <p>Contribuir para o desenvolvimento do voo livre no Brasil, tornando Quixadá o principal destino para pilotos de todos os níveis com segurança, sustentabilidade econômica, social e ambiental.</p>
        </div>
        <div className="cart">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Ícone Valores" />
          <h3>Valores</h3>
          <p>Segurança, inovação, ética, satisfação do cliente e amor ao esporte.</p>
        </div>
      </div>
    </section>

    <section className="pilotos">
      <h2>Pilotos que já trabalharam conosco</h2>
      <div className="grid-pilotos">
        {pilotos.map((p, i) => (
          <div className="piloto" key={i}>
            <img src={p.img} alt={p.alt} />
            <p>
              <strong>{p.nome}:</strong>
              <br />
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Sobre;