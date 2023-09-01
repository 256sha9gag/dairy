import React, {useEffect, useRef} from 'react';
import styles from './ImagesItem.module.css';
import {debounce} from "../../../../../utils/debounce";

function ImagesItem({note, altText}) {
	const hiddenImg = useRef(null)
	const resizeImg = () => {
		if (hiddenImg.current){
			if (hiddenImg.current.offsetWidth / hiddenImg.current.offsetHeight < 1){
				hiddenImg.current.parentNode.style.gridRow = 'span 2'
			}
		}
	}
	useEffect(() => {
		resizeImg()
		window.addEventListener('resize', debounce(resizeImg))
		return ()=>{window.addEventListener('resize', debounce(resizeImg))}
	}, [])


	return (
		<>
			<img className={`${styles.img} `} src={note.photo} alt={altText}/>
			<img ref={hiddenImg} className={`${styles.hiddenImg} `} src={note.photo} alt={altText}/>
		</>
	);
}

export default ImagesItem;
