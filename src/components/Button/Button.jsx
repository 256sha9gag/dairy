import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, svg, content = '', className = '' }) {
  console.log('className:', className);

  return (
    <button className={`${styles.mainButton} ${className}`} onClick={onClick}>
      {svg}
      {content && <h4>{content}</h4>}
    </button>
  );
}

export default Button;
