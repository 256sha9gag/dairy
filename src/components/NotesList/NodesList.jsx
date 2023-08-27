import notes from "../../Utils/notes.json";
import styles from "./NotesList.module.css";
import NotesItem from "./NotesItem/NodesItem";

function NotesList() {
  return (
    <ul className={styles.cardList}>
      {notes.map((note) => (
        <li key={note.id}>
          <NotesItem note={note}/>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
