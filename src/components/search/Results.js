import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const searchType = searchParams.get('type');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const apiUrl =
      searchType === 'brand'
        ? `http://localhost:3006/brand?brandName=${query}`
        : `http://localhost:3006/generic?genericName=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error('Error fetching results:', error));
  }, [query, searchType]);

  return (
    <div className='container'>
      <h2 className='text-center m-4'>Search Results</h2>
      {Array.isArray(results) && results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            {result.products.map((product) => (
              <div className='card m-3' key={product.product_number}>
                <div className='card-body'>
                  <p>Brand Name: {product.brand_name}</p>
                  <p>Dosage Form: {product.dosage_form}</p>
                  <p>Route: {product.route}</p>
                  <p>Marketing Status: {product.marketing_status}</p>
                  <p>Active Ingredients:</p>
                  <ul>
                    {product.active_ingredients.map((ingredient, i) => (
                      <li key={i}>
                        {ingredient.name} - {ingredient.strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No results found for the given query. Please check to make sure there are no errors in spelling.</p>
      )}
    </div>
  );
};

export default Results;
