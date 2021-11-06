import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const YourOutfitItemDefault = (props) => {
  
  const onClickToAdd = () => {
    props.addToOutfits();
  }
  
  return (
    <div className='product-card' onClick={onClickToAdd.bind(this)}>
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