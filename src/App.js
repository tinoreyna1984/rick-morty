//import logo from './logo.svg';
import img from './assets/rick-morty.png';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';

function App() {

  //
  // useState
  const [characters, setCharacters] = useState(null);

  // consulta al API del sitio de Rick & Morty
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    //console.log(characterApi);
    setCharacters(characterApi.results);
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {/* Condicional: si el boton devuelve algo, sale el personaje.
        Caso contrario, queda la parte principal */}
        {characters ? < Characters characters={characters} setCharacters={setCharacters} />
        :
        <>
        <img src={img} className="img-home" alt="Rick & Morty" />
        <button className='btn-search' onClick={reqApi}>Buscar personajes</button>
        </>}
      </header>
    </div>
  );
}

export default App;
