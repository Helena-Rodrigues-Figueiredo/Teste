import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Pokedex </h1>
        <div>
          <Pokedex pokemon={pokemons} />
        </div>
      </div>
    )
  }
}

export default App;