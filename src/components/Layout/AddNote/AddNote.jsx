import React, {useContext, useEffect, useRef, useState} from 'react';

import styles from './AddNote.module.css';
import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Selector from '../../Selector/Selector';
import startNotes from '../../../utils/notes.json'
import Button from '../../Button/Button';
import Textarea from './Textarea/Textarea';
import ImagesList from './ImagesList/ImagesList';
import {useAppContext} from '../../../context/AppContext';
import {NotesContext} from "../../../App";
import {generateRandomString} from "../../../utils/generateRandomString";

function AddNote() {

	const {notes, setNotes} = useContext(NotesContext)
	const [selectedItem, setSelectedItem] = useState(null)
	const [titleValue, setTitleValue] = useState('')
	const [dateValue, setDateValue] = useState('')
	const [emoji, setEmoji] = useState('')
	const [textValue, setTextValue] = useState('')
	const {setActiveComponent} = useAppContext();
	const [isImageChooseOpen, setIsImageChooseOpen] = useState(false);
	const imageThumbnail = useRef(null)
	const hiddenImg = useRef(null)

	const submitHandler = () => {
		if (selectedItem && titleValue.trim() && dateValue.trim() && emoji.trim() && textValue.trim()) {
			setNotes([...notes, {
				title: titleValue, date: new Date(dateValue), emoji: emoji, note: textValue, photo: selectedItem.photo, id: generateRandomString()
			}])
			setActiveComponent('Main')
		} else {
			alert('Нужно заполнить все поля')
		}
	}
	const closeHandler = () => {
		setActiveComponent('Main')
	}
	const toggleChooseOpen = () => {
		setIsImageChooseOpen(!isImageChooseOpen);
	};

	const toggleOpen = (event) => {
		if (event.target === event.currentTarget) {
			setIsImageChooseOpen(!isImageChooseOpen);
		}
	};

	const handleLogoClick = () => {
		setActiveComponent('Main');
	};

	useEffect(() => {
		if (imageThumbnail.current){
			if (hiddenImg.current){
				if (hiddenImg.current.offsetWidth / hiddenImg.current.offsetHeight < 1){
					hiddenImg.current.parentNode.style.aspectRatio = '28/40'
					hiddenImg.current.parentNode.style.width = '100%'
					hiddenImg.current.parentNode.style.height = 'unset'
				} else {
					hiddenImg.current.parentNode.style.aspectRatio = '28/19'
					hiddenImg.current.parentNode.style.width = '100%'
					hiddenImg.current.parentNode.style.height = 'unset'
				}
			} else {
				imageThumbnail.current.style.aspectRatio = 'unset'
				imageThumbnail.current.style.height = '160px'
				imageThumbnail.current.style.width = 'unset'
			}
		}
	}, [selectedItem, imageThumbnail])

	return (<>
			{isImageChooseOpen && (<div className={styles.chooseWrapper} onClick={toggleOpen}>
					<div className={styles.chooseBlock}>
						<Input
							value={'titleValue'}
							className={`${styles.inputText} ${styles.inputSearchImg}`}
							type='text'
							placeholder='Поиск'
						/>
						<Button
							onClick={toggleChooseOpen}
							svg={<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<path
									d='M5.66591 8.23657L7.198 6.951L8.48357 8.48309L11.5477 5.91194L12.8333 7.44402L8.23706 11.3007L5.66591 8.23657Z'
									fill='black'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M14.2076 2.89344C17.0928 5.77862 17.3135 10.3193 14.8698 13.4578C14.8851 13.4713 14.9001 13.4854 14.9147 13.5L19.1574 17.7427C19.5479 18.1332 19.5479 18.7664 19.1574 19.1569C18.7669 19.5474 18.1337 19.5474 17.7432 19.1569L13.5005 14.9143C13.4859 14.8996 13.4718 14.8846 13.4583 14.8693C10.3198 17.3131 5.77911 17.0923 2.89393 14.2071C-0.230267 11.083 -0.230267 6.01763 2.89393 2.89344C6.01812 -0.230756 11.0834 -0.230756 14.2076 2.89344ZM12.7934 12.7929C15.1366 10.4498 15.1366 6.6508 12.7934 4.30765C10.4503 1.96451 6.65129 1.96451 4.30814 4.30765C1.96499 6.6508 1.96499 10.4498 4.30814 12.7929C6.65129 15.1361 10.4503 15.1361 12.7934 12.7929Z'
									fill='black'
								/>
							</svg>}
						/>
					</div>
					<ImagesList selectedItem={selectedItem} setSelectedItem={setSelectedItem} setIsImageChooseOpen={setIsImageChooseOpen}
											notes={startNotes}
											imgHeight={'271'} gap={'40'}/>
				</div>)}
			<div className={styles.addNoteWrapper}>
				<Logo onClick={handleLogoClick}/>
				<div className={styles.leftBlock}>
					<div className={styles.upperInner}>
						<div className={styles.inputBlock}>
							<Input value={titleValue} setValue={setTitleValue} className={styles.inputText} type='text' placeholder='Название'/>
							<div className={styles.flexBlock}>
								<Selector value={emoji} setValue={setEmoji}/>
								<Input value={dateValue} setValue={setDateValue} className={styles.inputDate} type='date' placeholder='dd-mm-yyyy'/>
							</div>
						</div>
						<div ref={imageThumbnail} className={styles.imageChoose} onClick={toggleChooseOpen}>
							{selectedItem ? <>
								<img className={styles.imgThumb} src={selectedItem.photo} alt={selectedItem.title}/>
								<img className={styles.hiddenImg} ref={hiddenImg} src={selectedItem.photo} alt={selectedItem.title}/>
							</> : <>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='16'
									viewBox='0 0 20 16'
									fill='none'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M6.04348 3.9998C4.7323 3.9998 3.66938 5.07432 3.66938 6.3998C3.66938 7.72529 4.7323 8.7998 6.04348 8.7998C7.35466 8.7998 8.41758 7.72529 8.41758 6.3998C8.41758 5.07432 7.35466 3.9998 6.04348 3.9998ZM5.25211 6.3998C5.25211 5.95798 5.60642 5.5998 6.04348 5.5998C6.48054 5.5998 6.83484 5.95798 6.83484 6.3998C6.83484 6.84163 6.48054 7.1998 6.04348 7.1998C5.60642 7.1998 5.25211 6.84163 5.25211 6.3998Z'
										fill='#ACACAC'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M2.87801 0.799805C1.56683 0.799805 0.503906 1.87432 0.503906 3.1998V12.7998C0.503906 14.1253 1.56683 15.1998 2.87801 15.1998H17.1226C18.4338 15.1998 19.4967 14.1253 19.4967 12.7998V3.1998C19.4967 1.87432 18.4338 0.799805 17.1226 0.799805H2.87801ZM17.1226 2.3998H2.87801C2.44095 2.3998 2.08664 2.75798 2.08664 3.1998V12.7998C2.08664 13.2416 2.44095 13.5998 2.87801 13.5998H6.29176L11.7353 8.09689C12.6624 7.15963 14.1656 7.15963 15.0928 8.09689L17.914 10.9489V3.1998C17.914 2.75798 17.5597 2.3998 17.1226 2.3998ZM17.1226 13.5998H8.53009L12.8545 9.22826C13.1635 8.91584 13.6646 8.91584 13.9736 9.22826L17.8404 13.1372C17.7145 13.4104 17.4404 13.5998 17.1226 13.5998Z'
										fill='#ACACAC'
									/>
								</svg>
							</>}

						</div>
					</div>
					<Textarea value={textValue} setValue={setTextValue} className={styles.textareaMain}/>
					<div className={styles.footerButtons}>
						<Button
							onClick={submitHandler}
							className={styles.addNoteButton}
							content='Добавить запись'
							svg={<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z'
									fill='#1E2022'
								/>
								<path d='M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z' fill='#1E2022'/>
							</svg>}
						/>
						<Button
							color={'grey'}
							onClick={closeHandler}
							className={styles.addNoteButton}
							content='Отменить добавление'
							svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M6.2253 4.81096C5.83477 4.42044 5.20161 4.42044 4.81108 4.81096C4.42056 5.20148 4.42056 5.83465 4.81108 6.22517L10.5858 11.9999L4.81114 17.7746C4.42062 18.1651 4.42062 18.7983 4.81114 19.1888C5.20167 19.5793 5.83483 19.5793 6.22535 19.1888L12 13.4141L17.7747 19.1888C18.1652 19.5793 18.7984 19.5793 19.1889 19.1888C19.5794 18.7983 19.5794 18.1651 19.1889 17.7746L13.4142 11.9999L19.189 6.22517C19.5795 5.83465 19.5795 5.20148 19.189 4.81096C18.7985 4.42044 18.1653 4.42044 17.7748 4.81096L12 10.5857L6.2253 4.81096Z"
									fill="black"/>
							</svg>}
						/>
					</div>
					<div className={styles.footerButtonsMobile}>
						<Button
							onClick={submitHandler}
							className={styles.addNoteButton}
							content='Добавить'
							svg={<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z'
									fill='#1E2022'
								/>
								<path d='M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z' fill='#1E2022'/>
							</svg>}
						/>
						<Button
							color={'grey'}
							onClick={closeHandler}
							className={styles.addNoteButton}
							content='Отменить'
							svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M6.2253 4.81096C5.83477 4.42044 5.20161 4.42044 4.81108 4.81096C4.42056 5.20148 4.42056 5.83465 4.81108 6.22517L10.5858 11.9999L4.81114 17.7746C4.42062 18.1651 4.42062 18.7983 4.81114 19.1888C5.20167 19.5793 5.83483 19.5793 6.22535 19.1888L12 13.4141L17.7747 19.1888C18.1652 19.5793 18.7984 19.5793 19.1889 19.1888C19.5794 18.7983 19.5794 18.1651 19.1889 17.7746L13.4142 11.9999L19.189 6.22517C19.5795 5.83465 19.5795 5.20148 19.189 4.81096C18.7985 4.42044 18.1653 4.42044 17.7748 4.81096L12 10.5857L6.2253 4.81096Z"
									fill="black"/>
							</svg>}
						/>
					</div>


				</div>
				<div className={styles.rightBlock}>
					<div className={styles.inputButtonBlock}>
						<Input className={styles.inputText}/>
						<Button // onClick={магия}
							onClick={toggleChooseOpen}
							svg={<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<path
									d='M5.66591 8.23657L7.198 6.951L8.48357 8.48309L11.5477 5.91194L12.8333 7.44402L8.23706 11.3007L5.66591 8.23657Z'
									fill='black'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M14.2076 2.89344C17.0928 5.77862 17.3135 10.3193 14.8698 13.4578C14.8851 13.4713 14.9001 13.4854 14.9147 13.5L19.1574 17.7427C19.5479 18.1332 19.5479 18.7664 19.1574 19.1569C18.7669 19.5474 18.1337 19.5474 17.7432 19.1569L13.5005 14.9143C13.4859 14.8996 13.4718 14.8846 13.4583 14.8693C10.3198 17.3131 5.77911 17.0923 2.89393 14.2071C-0.230267 11.083 -0.230267 6.01763 2.89393 2.89344C6.01812 -0.230756 11.0834 -0.230756 14.2076 2.89344ZM12.7934 12.7929C15.1366 10.4498 15.1366 6.6508 12.7934 4.30765C10.4503 1.96451 6.65129 1.96451 4.30814 4.30765C1.96499 6.6508 1.96499 10.4498 4.30814 12.7929C6.65129 15.1361 10.4503 15.1361 12.7934 12.7929Z'
									fill='black'
								/>
							</svg>}
						/>
					</div>
					<ImagesList selectedItem={selectedItem} setSelectedItem={setSelectedItem} setIsImageChooseOpen={setIsImageChooseOpen}
											notes={startNotes}/>
				</div>
			</div>
		</>);
}

export default AddNote;
