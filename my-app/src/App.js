import ClassSaludo from "./components/saludo"
import "../src/styles/saludo.css"
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import axios from "axios"
function App() {
  return (  
    <div className="App">
       <NavBar />
       <Card/>
      <button className="Boton" >picame</button>

    </div>
  );
}

export default App;
