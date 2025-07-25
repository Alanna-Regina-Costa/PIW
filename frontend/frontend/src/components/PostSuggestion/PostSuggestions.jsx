import React from 'react';
import styles from './PostSuggestion.module.css';

const PostSuggestion = ({ image, title, excerpt, tag, isFeatured }) => {
  return (
    <div className={styles.sugestao}>
      <img src={image} alt={title} />
      <div>
        <h4 style={isFeatured ? {color: '#1db954'} : {}}>{title}</h4>
        <p>{excerpt}</p>
        <small>{tag}</small>
      </div>
    </div>
  );
};

export default PostSuggestion;