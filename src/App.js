import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue); //esta es por si mandamos la funcion a otro componente y no tiene el acceso al valor 
  }

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  )
}

export default App;
