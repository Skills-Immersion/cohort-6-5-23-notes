import React from 'react';

function Pokemon({ pokemon, fetchPokemon }) {
  function handleDelete() {
    fetch(`http://localhost:8080/pokemon/${pokemon.id}`, {
      method: 'DELETE'
    }).then(response => fetchPokemon());
  }
  return <div>
    <h3>{pokemon.name}</h3>
    <ul>
      <li>Type: {pokemon.type}</li>
      <li>Popularity: {pokemon.popularity}/10</li>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </ul>
  </div>
}

export default Pokemon;
