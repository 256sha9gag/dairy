import React, { useRef, useEffect } from 'react';
import styles from './Textarea.module.css';

function Textarea({value,setValue, className = '' }) {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    const handleResize = () => {
      const { scrollHeight, value } = textArea;
      const isMobile = window.innerWidth <= 1023;

      if (value === '') {
        textArea.style.setProperty('--textarea-min-height', isMobile ? '238px' : '400px');
      } else {
        textArea.style.setProperty(
          '--textarea-min-height',
          `${Math.max(scrollHeight, isMobile ? 238 : 400)}px`
        );
      }
    };

    handleResize();
    textArea.addEventListener('input', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      textArea.removeEventListener('input', handleResize);
      window.removeEventListener('resize', handleResize);
    }; // eslint-disable-next-line
  }, [textAreaRef.current]);

  return (
    <textarea
			value={value}
			onChange={(ev)=>setValue(ev.target.value)}
      ref={textAreaRef}
      className={`${styles.textarea} ${className}`}
      placeholder='Описание'
    />
  );
}

export default Textarea;
