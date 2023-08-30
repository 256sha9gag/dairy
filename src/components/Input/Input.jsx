import React from 'react';
import styles from './Input.module.css';

function Input({ type = 'text', placeholder = 'Поиск', className = '' }) {
  return (
    <input type={type} placeholder={placeholder} className={`${styles.mainInput} ${className}`} />
  );
}
export default Input;
