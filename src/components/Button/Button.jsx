import React from 'react';
import styles from './Button.module.css';

function Button({ color = 'yellow', onClick, svg, content = '', className = '' }) {

  return (
    <button style={{background: `var(--button-${color})`}} className={`${styles.mainButton} ${className}`} onClick={onClick}>
      {svg}
      {content && <h4>{content}</h4>}
    </button>
  );
}

export default Button;
