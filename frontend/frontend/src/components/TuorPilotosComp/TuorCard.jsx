import React from 'react';
import '../../assets/styles/CardsTuor.css';
import tourppilotos1 from '../../assets/img/tourppilotos1.png';
import tourppilotos2 from '../../assets/img/tourppilotos2.png';
import tourppilotos3 from '../../assets/img/tourppilotos3.png'; 

const TourPilotos = () => {
  return (
    <div className="tour-pilotos-container">
      {/* Grade de Conteúdo */}
      <div className="grade">
        
        {/* Seção 1 - Praia e Sertão */}
        <section className="conteudo">
          <img src={tourppilotos1} alt="Praia e Sertão" className="tour-image" />
          <div className="texto">
            <h2>Praia e Sertão</h2>
            <span>(24/03 a 31/03)</span>
            <p>
              Pronto para voar em alguns dos melhores picos do Brasil? Estamos com esse novo 
              roteiro para pilotos iniciantes no esporte.
            </p>
            <small>Março 2024</small><br />
            <a href="#" className="botao">Entre em Contato</a>
          </div>
        </section>

        {/* Seção 2 - Quixadá Verde (Invertido) */}
        <section className="conteudo invertido">
          <img src={tourppilotos2} alt="Quixadá Verde" className="tour-image" />
          <div className="texto">
            <h2>Quixadá Verde</h2>
            <span>(21/06 a 30/06)</span>
            <p>
              O maior encontro de pilotos da temporada verde do Sertão! Encontro de amigos 
              apaixonados pelo voo durante a época mais serena do ano.
            </p>
            <small>Junho 2024</small><br />
            <a href="#" className="botao">Entre em Contato</a>
          </div>
        </section>

        {/* Seção 3 - XC Sertão 2025 */}
        <section className="conteudo">
          <img src={tourppilotos3} alt="XC Sertão 2025" className="tour-image" />
          <div className="texto">
            <h2>XC Sertão 2025</h2>
            <span>(21/06 a 30/06)</span>
            <p>
              Onde os recordes são quebrados<br />
              Outubro e novembro de 2024
            </p>
            <strong>CAICÓ - ASSU - QUIXADÁ</strong>
            <small>Outubro e Novembro</small><br />
            <a href="#" className="botao">Entre em Contato</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TourPilotos;