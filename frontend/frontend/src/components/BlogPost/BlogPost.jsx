import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = ({ title, content, images, date }) => {
  return (
    <article className={styles.blogPost}>
      <h2>{title}</h2>
      <p className={styles.intro}>{content.intro}</p>
      <p className={styles.date}>{date}</p>
      
      {images.map((img, index) => (
        <React.Fragment key={index}>
          <img src={img.src} alt={img.alt} className={styles.postImg} />
          {img.caption && <p>{img.caption}</p>}
        </React.Fragment>
      ))}
      
      {content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default BlogPost;