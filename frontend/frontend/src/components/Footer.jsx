import React from 'react';
import './Footer.css'; 
import cadasturLogo from '../assets/img/cadastur.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>FALE CONOSCO PARA MAIS INFORMAÇÕES</h3>
          <p>Quixadá Aventura</p>
          <p>CNPJ 30.110.393/0001-57</p>
          <p>Rua Chile 114 - Quixadá - CE</p>
          <p>CEP: 63900-435</p>
          <p>Atendimento conforme agendamento.</p>
          <p>Funcionamento: DOM-DOM 09:00 às 19:00</p>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="facebook" /></a>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>Voo Livre</li>
            <li>CrossCountry</li>
            <li>Quixadá</li>
            <li>Trilhas</li>
            <li>Aventura</li>
            <li>Parapentes</li>
          </ul>
          <img src="cadasturLogo" alt="Cadastur" className="cadastur-logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Prototipado por Alanna Regina, Isaac Barros, Rodrigo Pereira e Sabrina Rodrigues.<br />
          Desenvolvido por Lucas Nobrega e Sabrina Rodrigues.<br />
          E-mail para contato: sabrinasjrodrigues70@gmail.com | rodrigodesign64@gmail.com | isaacnarciels@gmail.com | lucasnobrega656@gmail.com
        </p>
        <a href="#">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
