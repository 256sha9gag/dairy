import React from 'react';
import styles from './Input.module.css';

function Input({value ,setValue, type = 'text', placeholder = 'Поиск', className = '' }) {
  return (
    <input type={type} onChange={(ev)=>setValue(ev.target.value)} placeholder={placeholder} value={value} className={`${styles.mainInput} ${className}`} />
  );
}
export default Input;
