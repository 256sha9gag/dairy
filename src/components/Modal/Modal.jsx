import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Emoji from '../Emoji/Emoji';
import normalizeDate from '../../utils/normalizeDate';
import styles from './Modal.module.css';

function Modal({ note, closeFunction }) {
  const [isActive, setIsActive] = useState(false);
  const [onRender, setOnRender] = useState(true);

  const root = document.querySelector('#root');

  useEffect(() => {
    setIsActive(true);
  }, []);

  const closeWithAnimation = () => {
    setIsActive(false);
    setTimeout(() => {
      closeFunction();
      setOnRender(false);
    }, 500);
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (!e.isModal) {
        closeWithAnimation();
      }
    }, // eslint-disable-next-line
    [closeFunction]
  );

  if (!root || !onRender) return null;
  return createPortal(
    <div className={`${styles.modal} ${isActive ? styles.open : ''}`} onClick={handleOutsideClick}>
      <article
        className={styles.modalContent}
        onClick={(e) => {
          e.isModal = true;
        }}
      >
        <button className={styles.closeButton} onClick={closeWithAnimation}>
          <svg
            className='cross'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className={styles.crossPath}
              d='M2.22566 0.811082C1.83514 0.420557 1.20197 0.420557 0.811448 0.811082C0.420924 1.20161 0.420924 1.83477 0.811448 2.2253L6.58618 8.00003L0.811508 13.7747C0.420984 14.1652 0.420983 14.7984 0.811508 15.1889C1.20203 15.5794 1.8352 15.5794 2.22572 15.1889L8.0004 9.41424L13.7751 15.1889C14.1656 15.5794 14.7988 15.5794 15.1893 15.1889C15.5798 14.7984 15.5798 14.1652 15.1893 13.7747L9.41461 8.00003L15.1893 2.2253C15.5799 1.83477 15.5799 1.20161 15.1893 0.811082C14.7988 0.420557 14.1657 0.420557 13.7751 0.811082L8.0004 6.58582L2.22566 0.811082Z'
              fill='black'
            />
          </svg>
        </button>
        <h1 className={styles.title}>{note.title}</h1>
        <p className={styles.date}>{normalizeDate(note.date, 'long')}</p>
        <div className={styles.photoBlock}>
          <Emoji emoji={note.emoji} className={styles.emoji} big={'true'} />
          <img className={styles.photo} src={note.photo} alt={note.title} />
        </div>
        <div className={styles.textBlock}>
          <p className={styles.note}>{note.note}</p>
        </div>
      </article>
    </div>,
    root
  );
}

export default Modal;
