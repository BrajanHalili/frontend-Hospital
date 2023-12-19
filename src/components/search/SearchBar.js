import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('generic'); // Default to generic search

  return (
    <div className=''>
      <input
        className='w-75'
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
        <label className='m-1'>
          <input
            type="radio"
            value="generic"
            checked={searchType === 'generic'}
            onChange={() => setSearchType('generic')}
          />
          Search by Generic Name
        </label>
        <label className='m-1'>
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
