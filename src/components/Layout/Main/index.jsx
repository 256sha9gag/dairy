import styles from "./Main.module.css";
import CardList from "../../NotesList";
import {useRef} from "react";

function Main() {
	const container = useRef(null);
  return (
    <main ref={container} className={styles.main}>
			<CardList container={container}/>
    </main>
  );
}

export default Main;
