import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

const ProductComparisonModal = (props) => {
  
  const onToggleModal = (e) => {
    props.toggleModal(e);
  }
  
  return (
    <div className='comparison-modal' onClick={ e => e.stopPropagation() }>
      <MdOutlineClose onClick={onToggleModal.bind(this)}/>
      <p>I'm A Pop Up!!!</p>
    </div>
  )
}

export default ProductComparisonModal;