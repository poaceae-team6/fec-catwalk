import React, { useEffect } from 'react';

const ProductComparisonModal = (props) => {
  
  // [
  //   {
  //     name: ..., 
  //     current: ...,
  //     compared: ...
  //   }
  // ]
  
  return (
    <div className='comparison-modal' onClick={ e => e.stopPropagation() }>
      <p>{props.currentProduct.name}</p>
      <p>{props.comparedProduct.name}</p>
    </div>
  )
}

export default ProductComparisonModal;