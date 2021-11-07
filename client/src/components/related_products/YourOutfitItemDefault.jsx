import React, {useState} from 'react';
import { BsPlusLg } from 'react-icons/bs';

const YourOutfitItemDefault = (props) => {
  
  const addToOutfits = () => {
    props.updateOutfits({ 
      id: props.currentProduct.id, 
      style: 0
    });
  }
  
  return (
    <div className='product-card' onClick={addToOutfits.bind(this)}>
      <button className='add-outfit-btn'>
        <BsPlusLg />
        <h2 className='product-name'>
          CLICK TO ADD OUTFIT
        </h2>
      </button>
    </div>
  )
};

export default YourOutfitItemDefault;