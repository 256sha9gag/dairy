import React, { useRef } from 'react';
import styles from './ImagesList.module.css';
import ImagesItem from './ImagesItem/ImagesItem';

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
