import React, {useState} from 'react';
import SimilarItem from './SimilarItem.jsx';

const SimilarItemsList = ({products}) => {
    const [clicked, showMore] = useState(false);

    return (
        <div>
          <div className="row">
            {products.slice(7, 13).map(product => (
            <SimilarItem product={product} key={product.item_id}/>)
            )}
          </div>
         {clicked ? (
           <div>
             <div className="row">
             {products.slice(13, 19).map(product => (<SimilarItem product={product} key={product.item_id}/>))}
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
}

export default SimilarItemsList;