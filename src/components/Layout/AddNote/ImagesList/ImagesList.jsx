import React, {useEffect, useRef} from 'react';
import styles from './ImagesList.module.css';
import ImagesItem from './ImagesItem/ImagesItem';
import {debounce} from "../../../../utils/debounce";

function ImagesList({notes, className, gap, setIsImageChooseOpen, selectedItem, setSelectedItem}) {

	const selectHandler = (item) => {
		setSelectedItem(() => selectedItem?.id === item.id ? null : item)
		setTimeout(() => {
			setIsImageChooseOpen(false)
		}, 500)
	}
	const list = useRef(null)
	const gridStyle = {
		gap: gap ? `${gap}px` : '20px',
	};
	const resizeImages = debounce(() => {
		console.log('resize2')
		if (list.current) {
			const children = list.current.children
			for (let i = 0; i < children.length / 2; i++) {
				if (children[i].offsetHeight > children[i].offsetWidth) {
					children[i].style.gridRow = 'span 2'
					children[i].style.width = '100%'
				} else {
					children[i].style.width = '100%'
					children[i].children[0].style.width = '100%'
					children[i].style.height = '100%'
					children[i].children[0].style.height = '100%'
				}
				if (children[children.length - 1 - i].offsetHeight > children[i].offsetWidth) {
					children[children.length - 1 - i].style.gridRow = 'span 2'
					children[children.length - 1 - i].style.width = '100%'
				} else {
					children[children.length - 1 - i].style.width = '100%'
					children[children.length - 1 - i].children[0].style.width = '100%'
					children[children.length - 1 - i].style.height = '100%'
					children[children.length - 1 - i].children[0].style.height = '100%'
				}
			}
		}
	})
	useEffect(() => {
		resizeImages()
		window.removeEventListener('resize', resizeImages)
		window.addEventListener('resize', resizeImages)
	}, [list, resizeImages])

	return (
		<ul ref={list} className={`${styles.imagesGrid} ${className}`} style={gridStyle}>
			{notes.map((note, index) => (
				<li key={note.id}
						className={`${styles.listItem} ${selectedItem ? selectedItem.id === note.id ? styles.selectedItem : styles.disabledItem : ''}`}
						onClick={() => selectHandler(note)}>
					<ImagesItem note={note} imgSrc={note.photo} altText={note.title}/>
				</li>
			))}
		</ul>
	);
}

export default ImagesList;
