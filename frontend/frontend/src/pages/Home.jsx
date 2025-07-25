import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import Sobre from '../components/Sobre';
import Eurismar from '../components/Eurismar';
import Loja from '../components/Loja';
import Blog from '../components/BlogSection';
import Footer from '../components/Footer';
import bannerImage from '../assets/img/banner1.png';



const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero
        title="Aventure-se pelo sertão e viva uma experiência única!"
        subtitle="Descubra a aventura perfeita para você"
        backgroundImage={bannerImage}
        buttonText="Reserve Agora"
        buttonAction={() => console.log('Botão clicado!')}
  />
      <Destaques />
      <Sobre />
      <Eurismar />
      <Loja />
      <Blog />
    </div>
  );
};

export default Home;