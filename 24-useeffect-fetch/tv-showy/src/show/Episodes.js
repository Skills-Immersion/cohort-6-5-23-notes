import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  // make a request for episode data
  const { potato } = useParams();
  useEffect(() => {
    async function loadEp() {
      const response = await fetch(`https://api.tvmaze.com/shows/${potato}/episodes`)
      const epsFromAPI = await response.json();
      setEpisodes(epsFromAPI)
    }
    loadEp();
  }, [potato])
  // display that episode data on the page
  return <div>
    <h3>Episodes</h3>
    <ul>
      {episodes.map(e => <li key={e.id}>
        <h4>{e.name}</h4>
        <p>Season: {e.season}</p>
        <p>Episode: {e.number}</p>
      </li>)}
    </ul>
  </div>
}

export default Episodes;