import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.avif';
import styles from '../assets/styles/Navbar.module.css';

const isScrolled = window.scrollY > 50; // 50px de scroll

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        
        <nav className={styles.navLinks}>
          <Link to="/">Início</Link>
          <Link to="/">Atividades</Link>
          <Link to="/">Sobre Nós</Link>
          <Link to="/">Loja</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        
        <div className={styles.lang}>PT-BR</div>
      </div>
    </header>
  );
};

export default Navbar;