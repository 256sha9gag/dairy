import styles from './Main.module.css';
import CardList from '../../NotesList/NotesList';

function Main() {
  return (
    <main className={styles.main}>
      <CardList />
    </main>
  );
}

export default Main;
