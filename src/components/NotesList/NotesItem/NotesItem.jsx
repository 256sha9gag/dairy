import React, { useState } from 'react';

import styles from './NotesItem.module.css';
import normalizeDate from '../../../utils/normalizeDate';
import Emoji from '../../Emoji/Emoji';
import Modal from '../../Modal/Modal';

function NotesItem({ note }) {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <article onClick={clickHandler} className={styles.card}>
        <div
          className={styles.backgroundContainer}
          style={{
            background: `url(${note.photo}) lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <Emoji emoji={note.emoji} className={styles.emoji} type={'small'} />
        <footer className={styles.footer}>
          <div className={styles.hWrapper}>
            <h2 className={styles.h2}>{note.title}</h2>
            <p className={styles.date}>{normalizeDate(note.date, 'short')}</p>
          </div>
          <div className={styles.wrapperDescription}>
            <p className={styles.description}>{note.note}</p>
          </div>
        </footer>
      </article>

      {isOpen && <Modal note={note} closeFunction={() => setIsOpen(false)} />}
    </>
  );
}

export default NotesItem;
