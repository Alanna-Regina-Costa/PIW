import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import '../assets/styles/Blog.css';
import blog1 from '../assets/img/blog1.png';
import blog2 from '../assets/img/blog2.png';
import blog3 from '../assets/img/blog3.png';
import blog4 from '../assets/img/blog4.png';
import blog5 from '../assets/img/blog5.png';

const BlogSection = () => {
  return (
    <section id="blog" className="blog-destaques">
      <h2 className="blog-titulo">Blog</h2>
      <p className="blog-subtitulo">
        Jornal do Voo Livre Notícias, sobre voo livre, recortadas de Jornais de todo o Mundo! <br /> Exclusivo para Pilotos!
      </p>

      <div className="blog-destaques-container">
        <div className="coluna-esquerda">
          <div className="card pequeno" style={{ backgroundImage: `url(${blog1})` }}>
            <div className="card-texto">
              <span className="tag">Em destaque</span>
              <h3>Serena Ronchi fez 6.575,31km em 3 meses no Sertão</h3>
            </div>
          </div>
          <div className="card pequeno" style={{ backgroundImage: `url(${blog2})` }}>
            <div className="card-texto">
              <span className="tag">Em destaque</span>
              <h3>Não consigo andar, mas posso voar!!!</h3>
            </div>
          </div>
          <div className="card pequeno" style={{ backgroundImage: `url(${blog3})` }}>
            <div className="card-texto">
              <span className="tag">Em destaque</span>
              <h3>Timo Leonetti quebra recorde de 562km na África do Sul</h3>
            </div>
          </div>
          <div className="card pequeno" style={{ backgroundImage: `url(${blog4})` }}>
            <div className="card-texto">
              <span className="tag">Em destaque</span>
              <h3>Veja os resultados da última competição em Quixadá</h3>
            </div>
          </div>
        </div>

        <div className="coluna-direita">
          <div className="card grande" style={{ backgroundImage: `url(${blog5})` }}>
            <div className="card-texto">
              <span className="tag">Em destaque</span>
              <h3>5 dicas para evitar todos os colapsos no seu voo de parapente.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="botao-central">
        <Link to="/blog" className="btn-verde">Ler mais</Link>
      </div>
    </section>
  );
};

export default BlogSection;