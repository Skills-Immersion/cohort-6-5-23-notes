import React, { useEffect, useState } from 'react';
import Show from '../show/Show';

function Home() {

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
    let abortController = new AbortController();
    async function fetchAllTheShows() {
      try {
        let response = await fetch("https://api.tvmaze.com/shows", { signal: abortController.signal });
        let data = await response.json();
        setShows(data);
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('there was an abort error');
        } else {
          throw e;
        }
      }
    }
    fetchAllTheShows();
    return () => abortController.abort();
  }, [])
  return <div>
    {/* step 4 */}
    {shows.map(s => <Show key={s.id} show={s} />)}
  </div>
}

export default Home;