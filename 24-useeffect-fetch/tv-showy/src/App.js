import { useEffect, useState } from 'react';
import './App.css';
import Show from './Show';

function App() {
  const [clicks, setClicks] = useState(0);
  const [hovers, setHovers] = useState(0);
  useEffect(() => {
    document.title = `${Date.now()} is now`
  }, [])

  // setting up to make requests
  // 1. a state variable to hold the data, eventually, that comes from the API
  // 2. useEffect to make the request
  // 3. fetch().then(json).then(set the state variable)
  // 4. display data on the page

  // 1
  const [shows, setShows] = useState([]);
  // 2
  useEffect(() => {
    // 3
    // option A: promises with .then
    // fetch("https://api.tvmaze.com/shows")
    //   .then(response => response.json())
    //   .then(data => setShows(data));
    // option B: async/await
    // write an async function, then call it
    async function fetchAllTheShows() {
      let response = await fetch("https://api.tvmaze.com/shows");
      let data = await response.json();
      setShows(data);
    }
    fetchAllTheShows();
  }, [])
  return (
    <div className="container">
      <h1 onMouseOver={() => setHovers(hovers + 1)} onClick={() => setClicks(clicks + 1)}>TV Showy {hovers} {clicks}</h1>
      {/* step 4 */}
      {shows.map(s => <Show key={s.id} show={s} />)}
      {/* {shows.length > 0 && <Show show={shows[0]} />} */}
    </div>
  );
}

export default App;
