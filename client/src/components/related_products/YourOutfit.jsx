import React, {useState, useContext, useEffect} from 'react';
import YourOutfitItem from './YourOutfitItem.jsx';
import YourOutfitItemDefault from './YourOutfitItemDefault.jsx';
import { ThemeContext } from '../ThemeContext.js';

import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

import slide from '../../../dist/css_animations/horizontalScroll.js';

const YourOutfit = (props) => {
  
  const handleLeftArrow = () => {
    slide('outfit-slide', 'left', 1000, 800);
  }
  
  const handleRightArrow = () => {
    slide('outfit-slide', 'right', 1000, 680);
  }

  return (  
    <ThemeContext.Consumer>
      {darkMode => (
        // className={darkMode ? 'arrow-dark left' : 'arrow left'}
        <div className='outfit-container'>
          <h2 className='products-list-title'>YOUR OUTFIT</h2>
          <div className='scroll-container'>
            <button className='arrow' onClick={handleLeftArrow.bind(this)}>
              <MdArrowBackIos onClick={handleLeftArrow.bind(this)}/>
            </button>
            <div className='horizontal-slide' id='outfit-slide'>
              {props.outfits.length === 0 ? <YourOutfitItemDefault currentProduct={props.currentProduct} outfits={props.outfits} updateOutfits={props.onUpdateOutfits}/> : props.outfits.map( (outfit, index) => {
                return <YourOutfitItem outfit={outfit} key={outfit.id + '' + outfit.style} fetchNewProduct={props.fetchNewProduct.bind(this)} deleteFromOutfitList={props.deleteFromOutfitList.bind(this)}/>
              })}
            </div>
            <button className='arrow' onClick={handleRightArrow.bind(this)}>
              <MdArrowForwardIos onClick={handleRightArrow.bind(this)}/>
            </button> 
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default YourOutfit;