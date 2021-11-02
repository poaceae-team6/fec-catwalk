import React, {Component, useState, useContext} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import { ThemeContext } from '../ThemeContext.js';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import sampleProductsData from '../../assets/related_products/sampleProductsData.js';

const RelatedProducts = (props) => {
  
  const handleClick = (e) => {
    if (e.target.id === 'left-arrow') {
      slide('products-slide', 'left', 1000, 500);
    } else {
      slide('products-slide', 'right', 1000, 500);
    }
  }
  
  // fetch styles data using id to get the image url
  // 1. Get the current product's id
  // 2. Use that id to fetch relatedProducts array of id's
  // 3. Iterate over each id and fetch for that specific product object (category, name, description, 'features') & 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  
  return (  
    <ThemeContext.Consumer>
      {darkMode => (
        <div className='products-container'>
          <h2 className='products-list-title'>RELATED PRODUCTS</h2>
          <button onClick={handleClick.bind(this)} id='left-arrow' className={darkMode ? 'arrow-dark left' : 'arrow left'}/>
          <div className='horizontal-slide' id='products-slide'>
            {sampleProductsData.map(item => {
              // should pass 2 objects - product & styles for specific id
              return <RelatedProductsItem itemData={item} itemStyle={item} key={item.id}/>
            })}
          </div>
          <button onClick={handleClick.bind(this)} id='right-arrow' className={darkMode ? 'arrow-dark right' : 'arrow right'}/>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default RelatedProducts;