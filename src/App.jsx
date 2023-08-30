import React from 'react';
import { useAppContext } from './context/AppContext';

import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import AddNote from './components/Layout/AddNote/AddNote';
import './styles/App.css';

function App() {
  const { activeComponent } = useAppContext();

  return (
    <div className='App'>
      {activeComponent === 'Main' && (
        <>
          <Header />
          <Main />
        </>
      )}
      {activeComponent === 'AddNote' && <AddNote />}
    </div>
  );
}

export default App;
