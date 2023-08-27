import styles from "./Main.module.css";
import CardList from "../../NotesList/NodesList";

function Main() {
  return (
    <main className={styles.main}>
      <CardList />
    </main>
  );
}

export default Main;
