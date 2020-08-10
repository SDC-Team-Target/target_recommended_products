import React from 'react';

const Product = ({product}) => {
  const cropName = function(name) {
    var croppedName = ''
    if (name.length <= 21) {
      return name;
    }
    croppedName = `${name.slice(0, 22)}...`;
    return croppedName;
  }

  return(
    <div className="column">
      <img src={product.img_url} width={150} height={150} alt='item'></img>
      <div>
      <p>${product.item_price}</p>
      <p>{cropName(product.item_name)}</p>
      </div>
    </div>
  )
}

export default Product;