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
      {/* {currentProductLength > comparedProductLength ?
      props.currentProduct.features.map((feature, index) => {
        <li><h3>{feature.feature}</h3><span>feature:</span></li>
      }) : ''} */}
      <p>{props.currentProduct.name}</p>
      <p>{props.comparedProduct.name}</p>
    </div>
  )
}

export default ProductComparisonModal;