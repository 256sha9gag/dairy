import "./App.css";
import Logo from "./components/Logo";
import Input from "./components/Input";
import Selector from "./components/Selector";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__main-block main-block">
         <Logo/>
          <form className="main-block__input">
           <Input/>
           <Selector/>
          </form>
        </div>
         <Button/>
      </header>
    </div>
  );
}

export default App;
