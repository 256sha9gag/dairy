import React, {useEffect, useRef} from 'react';
import styles from './ImagesItem.module.css';
import {debounce} from "../../../../../utils/debounce";

function ImagesItem({imgSrc, altText}) {
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
			<img className={`${styles.img} `} src={imgSrc} alt={altText}/>
			<img ref={hiddenImg} className={`${styles.hiddenImg} `} src={imgSrc} alt={altText}/>
		</>
	);
}

export default ImagesItem;
