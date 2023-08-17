// homepage component: displays all the pokemon
import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

// fetch all of the pokemon!
// state variable to hold the pokemon
// useEffect to run the fetch for my pokemon
// actually display the pokemon from the state variable
function Home() {
  const [pokemon, setPokemon] = useState([]);
  let fetchPokemon = () => {
    // fetch the pokemon, transform the result, save to state var
    fetch('http://localhost:8080/pokemon')
      .then(response => response.json())
      .then(responseData => setPokemon(responseData.data))
  };
  useEffect(fetchPokemon, [])
  return <div>
    <h1>Pokemon!</h1>
    {pokemon.map(p => <Pokemon pokemon={p} key={p.id} fetchPokemon={fetchPokemon} />)}
  </div>
}

export default Home;
