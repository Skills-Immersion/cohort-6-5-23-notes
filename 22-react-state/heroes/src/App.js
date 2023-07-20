import { useState } from 'react';
import './App.css';
import Hero from './Hero';
import AddHeroForm from './AddHeroForm';

function App() {
  const [heroes, setHeroes] = useState([
    {
      name: 'Batman',
      abilities: 'be rich, have no parents',
      hasCape: true,
      alterEgos: [
        {
          name: 'Bruce Wayne',
          alignment: 'good'
        },
        {
          name: 'Lego Batman',
          alignment: 'chaotic good'
        }
      ]
    },
    {
      name: 'spiderman',
      abilities: 'is spider, dead uncle, swing',
      hasCape: false,
      alterEgos: [
        {
          name: 'Peter Parker',
          alignment: 'neutral good'
        },
        {
          name: 'Miles Morales',
          alignment: 'neutral good'
        }
      ]
    }
  ]);
  function addHero(newHero) {
    setHeroes([...heroes, newHero])
  }
  return (
    <div className="container">
      <h1>Heroes!</h1>
      <AddHeroForm addHero={addHero} />
      {heroes.map(h => <Hero key={h.name} hero={h} />)}
    </div>
  );
}

export default App;
