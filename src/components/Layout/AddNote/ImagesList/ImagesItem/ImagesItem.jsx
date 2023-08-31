import React from 'react';
import styles from './ImagesItem.module.css';

function ImagesItem({note, altText}) {


	return (
		<>
			<img className={`${styles.img} `} src={note.photo} alt={altText}/>
		</>
	);
}

export default ImagesItem;
