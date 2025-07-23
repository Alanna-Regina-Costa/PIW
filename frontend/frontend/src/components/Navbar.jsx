import React from 'react';
import styles from '../assets/styles/Navbar.module.css';
import logo from '../assets/img/logo.avif';

const Navbar = () => {
  return (
    <header id="navbar" className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="./pages/home.jsx">
            <img src={logo} alt="Quixadá Aventura" />
          </a>
        </div>
        <nav>
          <a href="/">Início</a>
          <a href="#destaq">Atividades em destaque</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#loja">Loja</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className={styles.lang}>PT-BR</div>
      </div>
    </header>
  );
};

export default Navbar;