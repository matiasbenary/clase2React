import logo from './logo.svg';
import './App.css';
import Pepito from './Components/Card';
import Agus from './Card';
import { Titulo, suma } from './Components/Card';

const App = () => {
  const nombre = 'Matias';
  const numeros = [12, 12, 3, 54, 6, 'Matias'];
  const edad = suma(7, 20);
  return (
    <div className="App">
      <Titulo></Titulo>
      <Agus></Agus>
      <Pepito></Pepito>
      <Pepito></Pepito>
      <Pepito />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">
          Hola me llamo {numeros} y tengo {suma(edad, 10)}
        </p>
        <p className="titulo">Hola soy otro titulo</p>
      </header>
    </div>
  );
};

export default App;
