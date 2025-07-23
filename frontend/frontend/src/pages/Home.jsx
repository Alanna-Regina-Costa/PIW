import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import Sobre from '../components/Sobre';
import Pilotos from '../components/Pilotos';
import Eurismar from '../components/Eurismar';
import Loja from '../components/Loja';
import Blog from '../components/Blog';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Destaques />
      <Sobre />
      <Pilotos />
      <Eurismar />
      <Loja />
      <Blog />
    </div>
  );
};

export default Home;