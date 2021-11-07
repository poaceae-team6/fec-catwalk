import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

const ProductComparisonModal = (props) => {
  
  const onToggleModal = (e) => {
    props.toggleModal(e);
  }
  
  return (
    <div className='comparison-modal' onClick={ e => e.stopPropagation() }>
      <MdOutlineClose onClick={onToggleModal.bind(this)}/>
      <p>{props.currentProduct.name}</p>
      <p>{props.productData.name}</p>
    </div>
  )
}

export default ProductComparisonModal;