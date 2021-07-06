import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar";

function App() {

  const user = {
    nombre: "Agustin Navarro Galdon",
    edad: 26,
    color: "Azul",
  }


  const saludarFn = (nombre, edad) => {
    console.log(`Hola ${nombre}, tiene ${edad} años.`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo = {user} saludarFn={saludarFn}></Saludar>
      </header>
    </div>
  );
}

export default App;
