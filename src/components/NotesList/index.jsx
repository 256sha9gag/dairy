import notes from "../../Utils/notes.json";
import styles from "./NotesList.module.css";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "../../Utils/debounce";
import NotesItem from "./NotesItem";

function NotesList({ container }) {
  const [width, setWidth] = useState(1300);

  const widthCalc = useCallback(() => {
    console.log("calc");
    if (!container.current.offsetWidth) return;
    const contWidth = container.current.offsetWidth;
    let listWidth = 325;
    let counter = 1;
    while (
      listWidth < contWidth &&
      listWidth < 3000 &&
      counter < notes.length + 1
    ) {
      listWidth += 20 + 325;
      counter++;
    }
    setWidth(listWidth - 20 - 325);
  }, [container]);

  useEffect(() => {
    if (container.current) {
      widthCalc();
      window.addEventListener("resize", debounce(widthCalc));
    }
  }, [container, widthCalc]);

  return (
    <ul
      className={styles.cardList}
      style={{ width: `${width ? width : 1300}px` }}
    >
      {notes.map((note) => (
        <li key={note.id}>
          <NotesItem note={note} />
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
