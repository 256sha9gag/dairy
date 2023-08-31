import React from 'react';
import styles from './ImagesList.module.css';
import ImagesItem from './ImagesItem/ImagesItem';

function ImagesList(props) {
  const { notes, className, imgHeight, gap } = props;

  const gridStyle = {
    gap: gap ? `${gap}px` : '20px',
  };

  return (
    <ul className={`${styles.imagesGrid} ${className}`} style={gridStyle}>
      {notes.map((note, index) => (
        <ImagesItem key={index} imgSrc={note.photo} altText={note.title} imgHeight={imgHeight} />
      ))}
    </ul>
  );
}

export default ImagesList;
