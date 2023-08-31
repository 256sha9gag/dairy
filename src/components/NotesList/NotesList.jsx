import styles from './NotesList.module.css';
import NotesItem from './NotesItem/NotesItem';
import {NotesContext} from "../../App";
import {useContext} from "react";

function NotesList() {
	const {notes} = useContext(NotesContext)
  return (
    <ul className={styles.cardList}>
      {notes.map((note) => (
        <li key={note.id}>
          <NotesItem note={note} />
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
