import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('generic'); // Default to generic search

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for medication..."
      />
      <Link
        to={`/results?query=${query}&type=${searchType}`}
        style={{ textDecoration: 'none' }}
      >
        <button>Search</button>
      </Link>
      <div>
        <label>
          <input
            type="radio"
            value="generic"
            checked={searchType === 'generic'}
            onChange={() => setSearchType('generic')}
          />
          Search by Generic Name
        </label>
        <label>
          <input
            type="radio"
            value="brand"
            checked={searchType === 'brand'}
            onChange={() => setSearchType('brand')}
          />
          Search by Brand Name
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
