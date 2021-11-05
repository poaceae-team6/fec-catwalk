import React, {Component, useState, useContext} from 'react';
import YourOutfitItem from './YourOutfitItem.jsx';
import YourOutfitItemDefault from './YourOutfitItemDefault.jsx';
import { ThemeContext } from '../ThemeContext.js';

import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

import slide from '../../../dist/css_animations/horizontalScroll.js';

const YourOutfit = (props) => {
  
  const handleLeftArrow = () => {
    slide('outfit-slide', 'left', 1000, 500);
  }
  
  const handleRightArrow = () => {
    slide('outfit-slide', 'right', 1000, 500);
  }
  
  // fetch styles data using id to get the image url
  // 1. Get the current product's id
  // 2. Use that id to fetch relatedProducts array of id's
  // 3. Iterate over each id and fetch for that specific product object (category, name, description, 'features') & 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  
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
              {props.outfits.length ? relatedProducts.map( (productId, index) => {
                return <RelatedProductsItem productId={productId} key={index}/>
              }) : <YourOutfitItemDefault />}
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