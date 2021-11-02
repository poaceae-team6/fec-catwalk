import React, {Component, useState} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import sampleProductsdData from '../../assets/related_products/sampleProductsData.js';

const RelatedProducts = (props) => {

  const [relatedProducts, setRelatedProducts] = useState({})
  
  const handleClick = (e) => {
    if (e.target.id === 'left-arrow') {
      slide('horizontal-slide', 'left', 1000, 500);
    } else {
      slide('horizontal-slide', 'right', 1000, 500);
    }
  }
  
  return (  
    <div className='products-container'>
      <button onClick={handleClick.bind(this)} id='left-arrow' className='arrow left'/>
      <div id='horizontal-slide'>
        {props.relatedProducts.map(item => {
          return <RelatedProductsItem itemData={item} key={item.id}/>
        })}
      </div>
      <button onClick={handleClick.bind(this)} id='right-arrow' className='arrow right'/>
    </div>
  );
}

export default RelatedProducts;