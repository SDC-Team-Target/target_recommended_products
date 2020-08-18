import React from 'react';
import cropName from '../helpers/cropName.js';

const SuggestedProduct = ({ product }) => (
  <div className="column">
    <img src={product.img_url} width={150} height={150} alt="item"></img>
    <div className="more-prod-desc">
      <p style={{ fontWeight: 'bold' }}>
        $
        {product.item_price}
      </p>
      <p>{cropName(product.item_name)}</p>
    </div>
  </div>
);

export default SuggestedProduct;
