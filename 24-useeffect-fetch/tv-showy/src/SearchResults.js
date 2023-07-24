import React, { useEffect, useState } from 'react';
import Show from './Show';

function SearchResults({ searchTerm, clearSearchTerm }) {
  const [shows, setShows] = useState([]);
  // since we are using the searchTerm variable inside of the useEffect,
  // it's most likely a dependency, and belongs in the dependency
  // array (the 2nd argument to useEffect)
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setShows(data.map(res => res.show)))
  }, [searchTerm]);
  return <div>
    <h2>
      Search results for {searchTerm}
      <button onClick={clearSearchTerm}>Clear search</button>
    </h2>
    {shows.map(s => <Show show={s} key={s.id} />)}
  </div>
}

export default SearchResults;
