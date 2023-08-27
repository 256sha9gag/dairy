import "./App.css";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import { Context } from "./context";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
function App() {
  const [modalActive, setModalActive] = useState(false);
  const [NoteInModal, setNoteInModal] = useState({});

  const changeModalStatus = () => {
    return setModalActive(!modalActive);
  };

  const updateNoteInModal = (obj) => {
    return setNoteInModal(obj);
  };

  return (
    <Context.Provider value={{ changeModalStatus, updateNoteInModal }}>
      <div className="App">
        <Header />
        <Main />
        {modalActive === true && 
        <Modal note={NoteInModal} active={modalActive}/>
        }
      </div>
    </Context.Provider>
  );
}

export default App;
