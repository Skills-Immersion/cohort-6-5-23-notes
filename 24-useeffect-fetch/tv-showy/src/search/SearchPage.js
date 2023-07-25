import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const clearSearchTerm = () => setSearchTerm('');
  return <div>
    <SearchForm setSearchTerm={setSearchTerm} />
    {searchTerm ?
      <SearchResults searchTerm={searchTerm} clearSearchTerm={clearSearchTerm} /> :
      ''
    }
  </div>
}

export default SearchPage;