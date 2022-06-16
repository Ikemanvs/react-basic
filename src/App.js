import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
//import HolaMundo from "./components/HolaMundo";
//import AdiosMundo from "./components/AdiosMundo";
//import Saludar from "./components/Saludar";

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("total:" + contar);
  }, [contar])

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: { stateCar ? "Encendido" : "Apagado" }</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}> Encender / Apagar </button>
      </header>
    </div>
  );
}

export default App;
