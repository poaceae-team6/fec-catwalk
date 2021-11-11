import React, {useState} from 'react';
import { BsPlusLg } from 'react-icons/bs';

const YourOutfitItemDefault = (props) => {
  
  const addToOutfits = () => {
    let temp = props.outfits;
    let outfitIndex = temp.findIndex( ({ id, style }) => id === props.currentProduct.id && style === props.styleIndex);
    if (outfitIndex === -1) {  
      props.updateOutfits({ 
        id: props.currentProduct.id, 
        style: props.styleIndex
      });
    }
  }
  
  return (
    <div className='product-card' onClick={addToOutfits.bind(this)}>
      <div className='add-outfit-btn'>
        <BsPlusLg />
        <h2 className='product-name'>
          CLICK TO ADD OUTFIT
        </h2>
      </div>
    </div>
  )
};

export default YourOutfitItemDefault;