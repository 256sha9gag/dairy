import React, { useRef } from 'react';
import styles from './ImagesList.module.css';
import ImagesItem from './ImagesItem/ImagesItem';

function ImagesList({images, className, gap, setIsImageChooseOpen, selectedItem, setSelectedItem, isImageChooseOpen, isLoading}) {
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
	
		return isLoading ? (
			<ul ref={list} className={`${styles.imagesGrid} ${className}`} style={gridStyle}>
			{images && images.length !== 0 ? images.map((img) => (
				<li key={img.id}
						className={`${styles.listItem} ${selectedItem ? selectedItem.id === img.id ? styles.selectedItem : styles.disabledItem : ''}`}
						onClick={() => selectHandler(img)}>
					<ImagesItem imgSrc={img.urls.small} altText={img.alt_description}/>
				</li>
			)) : (<p 
				className={!isImageChooseOpen ? styles.warningTextModalOpen : styles.warningTextModalClose }>
					Ничего не найдено по данному запросу
					</p>)}
		</ul>
			) : (<p 
					className={!isImageChooseOpen ? styles.warningTextModalOpen : styles.warningTextModalClose }
				>
					Загрузка...
				</p>)
}

export default ImagesList;
