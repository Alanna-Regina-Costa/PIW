import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import styles from './LiveTracking.module.css';
import bannerImage from '../assets/img/banner1.png';

const LiveTracking = () => {
  // Efeito de scroll para navbar (substitui o script original)
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
    <div className={styles.liveTrackingPage}>
      <Hero
        title="LiveTracking"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('!')}
  />
      
      {/* Mapa de Tracking */}
      <div className={styles.mapaContainer}>
        <iframe 
          src="https://www.wherearethepilots.com/php/ShowPilots.php?CC=eufr&1=on&2=on&3=on&4=on&5=on&6=on&7=on&8=on&9=on&10=on&Anzeigen=Show+Live-Tracking+the+selected+pilots" 
          title="Tracking Mapa BR"
          className={styles.trackingIframe}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LiveTracking;