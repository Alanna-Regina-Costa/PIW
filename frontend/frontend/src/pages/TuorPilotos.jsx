import React from 'react';
import TourCard from '../components/TuorPilotosComp/TuorCard';
import bannerImage from '../assets/img/banner1.png';
import Hero from '../components/Hero';

const TourPilotos = () => {
  return (
    <div>
        <Hero
            title="Turismo em Quixadá"
            subtitle=""
            backgroundImage = {bannerImage}
            buttonText=""
            buttonAction={() => console.log('')}
        />
        <TourCard/>
      
    </div>
  );
};

export default TourPilotos;