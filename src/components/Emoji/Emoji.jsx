import React from 'react';
import styles from './Emoji.module.css'

const Emoji = ({ emoji, type }) => {
  return (
    <figure className={type === 'small' ? styles.emoji_small : styles.emoji_big}>
      <p>{emoji}</p>
    </figure>
  );
};

export default Emoji;
