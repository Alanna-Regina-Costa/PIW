import React from 'react';
import './Loja.css'; 
import loja1 from '../assets/img/loja1.png';
import loja2 from '../assets/img/loja2.png';  
import loja3 from '../assets/img/loja3.png';
import loja4 from '../assets/img/loja4.png';

const produtos = [
  {
    img: loja1,
    alt: 'Luvas para voo livre',
    nome: 'Luvas para voo livre',
    preco: 'R$ XX,XX',
  },
  {
    img: loja2,
    alt: 'Suporte articulado para Go PRO',
    nome: 'Suporte articulado para Go PRO',
    preco: 'R$ XX,XX',
  },
  {
    img: loja3,
    alt: 'Reboque Hidráulico/Elétrico para voo livre',
    nome: 'Reboque Hidráulico/Elétrico para voo livre',
    preco: 'R$ XX,XX',
  },
  {
    img: loja4,
    alt: 'Guia de pouso seguro no horário térmico',
    nome: 'Guia de Pouso Seguro no Horário Térmico',
    preco: 'R$ XX,XX',
  },
];

const Loja = () => (
  <section id="loja" className="loja">
    <h2>Loja</h2>
    <p>Veja os produtos da nossa loja!</p>
    <div className="produtos">
      {produtos.map((produto, idx) => (
        <div className="produto" key={idx}>
          <img src={produto.img} alt={produto.alt} />
          <h3>{produto.nome}</h3>
          <p className="preco">{produto.preco}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Loja;