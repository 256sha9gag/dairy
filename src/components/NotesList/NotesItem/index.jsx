import styles from "./NotesItem.module.css";
import { getFormatDate } from "../../../Utils/getFormatDate";

function NotesItem({ note, width }) {
  return (
    <article
      className={styles.card}
      style={{
        width: `${width}px`,
        backgroundImage: `url(${note.foto})`,
      }}
    >
      <div className={styles.emoji}>{note.emoji}</div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>{note.title}</h2>
          <span className={styles.date}>{getFormatDate(note.date)}</span>
        </div>
        <p className={styles.text}>{note.note}</p>
      </div>
    </article>
  );
}

export default NotesItem;
