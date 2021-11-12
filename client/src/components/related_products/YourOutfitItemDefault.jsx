import React, {useState} from 'react';
import { ThemeContext } from '../ThemeContext.js';
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
    <ThemeContext.Consumer>
      {darkMode => (
        <div className='product-card' onClick={addToOutfits.bind(this)} style={darkMode ? {backgroundColor: '#2a2c29', border: '1px solid #808080'} : {}}>
          <div className='add-outfit-btn'>
            <BsPlusLg />
            <h2 className='product-name'>
              CLICK TO ADD OUTFIT
            </h2>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
};

export default YourOutfitItemDefault;