import React from 'react';
import styles from './CursosVoo.module.css';
import Hero from '../components/Hero'; 
import CourseSection from '../components/CourseSection'; 
import bannerImage from '../assets/img/banner1.png';
import cursosparavoo1 from '../assets/img/cursosparavoo1.png';
import cursosparavoo2 from '../assets/img/cursosparavoo2.png';  
import cursosparavoo3 from '../assets/img/cursosparavoo3.png';
import cursosparavoo4 from '../assets/img/cursosparavoo4.png';
import cursosparavoo5 from '../assets/img/cursosparavoo5.png';  

const CursosVoo = () => {
  const courses = [
    {
      image: cursosparavoo1,
      title: "Curso para iniciantes no Voo Livre",
      description: "Voe pela primeira vez! Com apenas 10 dias consecutivos ou 10 dias alternados de aula...",
      link: "/cursoiniciantes"
    },
    {
      image: cursosparavoo2,
      title: "Curso de Voo em Térmicas",
      description: "Para aqueles que desejam realizar voos mais altos, duradouros e seguros...",
      link: "/cursovootermicas"
    },
    {
      image: cursosparavoo3,
      title: "Curso para Voo de longas Distâncias",
      description: "Para aqueles que desejam realizar voos mais longos, com segurança e autonomia...",
      link: "/cursovoodistancia"
    },
    {
      image: cursosparavoo4,
      title: "Curso de Operação em Voo Rebocado",
      description: "Para aqueles que desejam realizar voos mais longos, com segurança e autonomia...",
      link: "/cursovoodistancia"
    },
    {
      image: cursosparavoo5,
      title: "Curso para resgate de Voo Livre",
      description: "Para aqueles que desejam realizar voos mais longos, com segurança e autonomia...",
      link: "/cursovoodistancia"
    }
  ];

  return (
    <div className={styles.cursosPage}>
      <Hero
        title="Cursos para Voo"
        backgroundImage={bannerImage}
      />
      
      <main className={styles.coursesContainer}>
        {courses.map((course, index) => (
          <CourseSection
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            link={course.link}
          />
        ))}
      </main>
    </div>
  );
};

export default CursosVoo;