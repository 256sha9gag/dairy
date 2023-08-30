import React from 'react';
import styles from './Emoji.module.css';

const Emoji = ({ emoji, big = false, className = '' }) => {
  return (
    <span className={`${styles.circle} ${className}  ${big && styles.circleBig}`}>{emoji}</span>
  );
};

export default Emoji;
