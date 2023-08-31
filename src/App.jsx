import React, {createContext, useEffect, useState} from 'react';
import { useAppContext } from './context/AppContext';

import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import AddNote from './components/Layout/AddNote/AddNote';
import './styles/App.css';
import startNotes from './utils/notes.json'
import {store} from "./utils/store";

export const NotesContext = createContext([])

function App() {
	const [notes, setNotes] = useState(store.getItem('notes') ? store.getItem('notes') : startNotes)
  const { activeComponent } = useAppContext();

	useEffect(()=>{
			store.setItem('notes', notes)
	},[notes])
  return (
		<NotesContext.Provider value={{notes,setNotes}}>
			<div className='App'>
				{activeComponent === 'Main' && (
					<>
						<Header />
						<Main />
					</>
				)}
				{activeComponent === 'AddNote' && <AddNote />}
			</div>
		</NotesContext.Provider>
  );
}

export default App;
