import React, { useEffect } from 'react';
import styles from './Input.module.css';

function Input({value, setValue, type = 'text', placeholder = 'Поиск', className = '', handleSearch = null }) {  

  useEffect(() => {
    if (handleSearch !== null) {
      const delay = setTimeout(() => {
        handleSearch();
      }, 400)
      return () => {
        clearTimeout(delay)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input 
      type={type} 
      onChange={(ev)=> { 
        setValue(ev.target.value)
      }}
      placeholder={placeholder} 
      value={value} 
      className={`${styles.mainInput} 
      ${className}`} 
    />
  );
}
export default Input;
