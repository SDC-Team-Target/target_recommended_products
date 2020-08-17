import React, {useState} from 'react';
import Product from './Product.jsx';

const ProductList = ({products}) => {
  const [clicked, showMore] = useState(false);

    return (
      <div>
        <div className="row">
          {products ? products.slice(0, 6).map(product => (<Product product={product} key={product.item_id}/>))
          : <div>item not available</div>}
        </div>
       {(clicked && products) ? (
         <div>
           <div className="row">
           {products.slice(6, 12).map(product => (<Product product={product} key={product.item_id}/>))}
           </div> 
           <button onClick={() => {
             showMore(!clicked)}}>Show less</button>
         </div>
       ) : 
       (
         <button onClick={() => {
          showMore(!clicked)}}>Show more (6)</button>
       )}
        </div>
    )
};

export default ProductList;



//componentDidUpdate()