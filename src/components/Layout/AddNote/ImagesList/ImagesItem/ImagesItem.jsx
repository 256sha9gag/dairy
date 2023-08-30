import React from 'react';
import styles from './ImagesItem.module.css';

function ImagesItem({ imgSrc, altText, imgHeight }) {
  const imgStyle = {
    height: imgHeight ? `${imgHeight}px` : '220px',
  };

  return <img className={styles.img} style={imgStyle} src={imgSrc} alt={altText} />;
}

export default ImagesItem;
