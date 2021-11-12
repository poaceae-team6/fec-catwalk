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
    <div className='comparison-modal' onClick={e => e.stopPropagation()} style={props.darkMode ? {background: 'rgba(82, 82, 82, 0.938)'} : {}}>
      <p>{props.currentProduct.name}</p>
      <p>{props.comparedProduct.name}</p>
    </div>
  )
}

export default ProductComparisonModal;