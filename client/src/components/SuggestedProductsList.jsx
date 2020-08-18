import React, { useState } from 'react';
import SuggestedProduct from './SuggestedProduct.jsx';
import getRandomProducts from '../helpers/getRandomProducts.js';

const SuggestedProductsList = ({ products }) => {
  const [clicked, showMore] = useState(false);
  const [shuffledProducts, setProducts] = useState(getRandomProducts(products));

  return (
    <div>
      <div className="row">
        {products ? shuffledProducts.slice(0, 6).map((product) =>
          <SuggestedProduct
          product={product}
          key={product.item_id}
          />) : <div>item not available</div>}
      </div>
      {(clicked && products) ? (
        <div>
          <div className="row">
            {shuffledProducts.slice(6, 12).map((product) => 
              <SuggestedProduct
                product={product}
                key={product.item_id}
              />)
            }
          </div>
          <button
            onClick={() => {
              showMore(!clicked);
            }}
          >
            Show less
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            showMore(!clicked);
          }}
        >
          Show more (6)
        </button>
      )}
    </div>
  );
};

export default SuggestedProductsList;
