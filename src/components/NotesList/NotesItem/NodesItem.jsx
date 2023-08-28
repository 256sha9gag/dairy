import styles from "./NotesItem.module.css";
import { getFormatDate } from "../../../Utils/getFormatDate";
import { Context } from "../../../context";
import { useContext } from "react";
import normalizeDate from "../../../Utils/normalizeDate";
import Emoji from "../../Emoji/Emoji";

function NotesItem({ note }) {
  const { changeModalStatus, updateNoteInModal } = useContext(Context);
  return (
    <article
      onClick={() => {
        changeModalStatus();
        updateNoteInModal(note);
      }}
      className={styles.card}
      style={{
        backgroundImage: `url(${note.foto})`,
      }}
    >
      <Emoji emoji={note.emoji} type='small'/>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>{note.title}</h2>
          <span className={styles.date}>{normalizeDate.short(getFormatDate(note.date))}</span>
        </div>
        <p className={styles.text}>{note.note}</p>
      </div>
    </article>
  );
}

export default NotesItem;
