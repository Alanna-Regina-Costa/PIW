import React from 'react';
import Hero from '../components/Hero';
import BlogPost from '../components/BlogPost/BlogPost';
import PostSuggestion from '../components/PostSuggestion/PostSuggestions';
import styles from './Blog.module.css';
import bannerImage from '../assets/img/banner1.png';
import blog1 from '../assets/img/blog1.png';
import blog2 from '../assets/img/blog2.png';
import blog3 from '../assets/img/blog3.png';
import blog4 from '../assets/img/blog4.png';
import blog5 from '../assets/img/blog5.png';

const BlogPage = () => {
  const mainPost = {
    title: "Timo Leonetti quebrou hoje o recorde de XC da África do Sul com um voo de 562km",
    content: {
      intro: "Corpo de Timo Leonetti já é bem conhecido dos que frequentam o Sertão Brasileiro. Na última temporada conseguiu diversos voos acima de 400km e ...",
      paragraphs: [
        "Timo Leonetti já é bem conhecido dos que frequentam o Sertão Brasileiro. Na última temporada conseguiu diversos voos acima de 400km e outros 500km. Foi voando aqui no Sertão que ele conseguiu os pontos que faltavam para se tornar vencedor do Xcontest. Hoje ele quebrou o recorde da África do sul com um voo de 562km, tornando-se assim o primeiro piloto de parapente a superar os 500km em dois continentes. Timo vem buscando quebrar o recorde do mundo de distância e para isso não mede esforços, no sertão ele costuma da canseira em resgata, voando mais de 400km e sempre retornando para decolar no dia seguinte. Na ultima temporada conseguiu voar acima da média de velocidade do ultimo recorde do mundo, porem pousou antes de conseguiu bater a meta. Boa sorte nos próximos voos jovem, estamos na torcida. A primeira e ultima vez que alguém passou os 500km na África do Sul foi em 2008 com o piloto Nevil Hulett. O atual recorde do mundo esta na marca de 607km voo realizado por Sebastien Kayrouz, no Texas em junho de 2021."
      ]
    },
    images: [
      { src: blog1, alt: "Mapa do voo de Timo" },
      { src: blog2, alt: "Pilotos juntos", caption: "Na foto da esquerda para direita: Stéphane Leonetti (pai do Timo), Eurimar Jr e Timo Leonetti." }
    ],
    date: "9 de jul. de 2025 - 11h da manhã"
  };

  const suggestions = [
    {
      image: blog3,
      title: "Não consigo andar, mas posso voar!!!",
      excerpt: "Decenas de cadeirantes ganharam asas e voaram pelo céu de João Pessoa na Paraíba.",
      tag: "ler artigo",
      isFeatured: false
    },
    {
      image: blog4,
      title: "Serena Ronchi fez 6.575,31km de EN-B em 3 months of the dry season of the Sertão Brazil in 2020",
      excerpt: "She was by far the pilot who flew the longest and most distance in the Sertão that season...",
      tag: "ler artigo",
      isFeatured: true
    },
    {
      image: blog5,
      title: "5 dicas para evitar todos os colapsos no seu voo de parapente.",
      excerpt: "Os colapsos em voo de parapente são totalmente evitáveis, mas é preciso mais que um bom controle do equipamento para escapar deles.",
      tag: "Em destaque",
      isFeatured: true
    }
  ];

  return (
    <div className={styles.blogPage}>
      <Hero
        title="Blog"
        subtitle=""
        backgroundImage={bannerImage}
        buttonText=""
        buttonAction={() => console.log('')}
  />
      
      <main className={styles.blogContainer}>
        <BlogPost 
          title={mainPost.title}
          content={mainPost.content}
          images={mainPost.images}
          date={mainPost.date}
        />
        
        <section className={styles.vejaTambem}>
          <h3>Veja também</h3>
          {suggestions.map((post, index) => (
            <PostSuggestion
              key={index}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tag}
              isFeatured={post.isFeatured}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogPage;