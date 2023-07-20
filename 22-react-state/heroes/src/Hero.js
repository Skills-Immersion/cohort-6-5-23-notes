import React from 'react';

function Hero({ hero }) {
  const { name, abilities, hasCape, alterEgos } = hero;
  return <div>
    <h3>{name}</h3>
    <div>abilities: {abilities}</div>
    <div>{hasCape ? 'wears a' : 'no'} cape</div>
    {alterEgos && alterEgos.length > 0 && <div>
      <h4>Alter Egos</h4>
      {alterEgos.map(e => <div key={e.name}>{e.name} ({e.alignment})</div>)}
    </div>}
  </div>
}

export default Hero;