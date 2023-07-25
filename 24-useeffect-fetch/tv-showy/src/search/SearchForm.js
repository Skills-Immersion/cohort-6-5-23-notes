import React, { useState } from 'react';

function SearchForm({ setSearchTerm }) {
  const [query, setQuery] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
    setSearchTerm(query);
    setQuery('');
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="query">Search for a show</label>
    <input type="text" name="query" id="query" value={query} onChange={(event) => setQuery(event.target.value)} />
    <button type="submit" className="btn btn-primary">Search!</button>
  </form>
}
export default SearchForm;
