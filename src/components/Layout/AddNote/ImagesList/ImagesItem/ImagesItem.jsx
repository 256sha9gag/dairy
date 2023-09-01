import React, {useEffect, useRef} from 'react';
import styles from './ImagesItem.module.css';

function ImagesItem({note, altText}) {
	const hiddenImg = useRef(null)
	useEffect(()=>{
		if (hiddenImg.current){
			if (hiddenImg.current.offsetWidth / hiddenImg.current.offsetHeight < 1){
				hiddenImg.current.parentNode.style.gridRow = 'span 2'
			}
		}
	},[])


	return (
		<>
			<img className={`${styles.img} `} src={note.photo} alt={altText}/>
			<img ref={hiddenImg} className={`${styles.hiddenImg} `} src={note.photo} alt={altText}/>
		</>
	);
}

export default ImagesItem;
