import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
    <div>
      <h2>Search Results</h2>
      {Array.isArray(results) && results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            {result.products.map((product) => (
              <div key={product.product_number}>
                <p>Product Number: {product.product_number}</p>
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
            ))}
          </div>
        ))
      ) : (
        <p>No results found for the given query.</p>
      )}
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default Results;
