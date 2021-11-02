import React, {Component} from 'react';

import sampleProductIdData from '../../assets/related_products/sampleProductIdData.js';
import sampleProductIdStylesData from '../../assets/related_products/sampleProductIdStylesData.js';

import StarRating from '../review/reviewmain/StarRating.jsx';

  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")

const YourOutfitItem = (props) => {
  
  let sampleProductObject = sampleProductIdData;
  let sampleStylesObject = sampleProductIdStylesData.results[0];
  
  return (
    <div className='related-products-card'>
      <img src={sampleStylesObject.photos[0].thumbnail_url}/>
      <h3>CATEGORY: {sampleProductObject.category.toUpperCase()}</h3>
      <h2 className='product-name'>{sampleProductObject.name}</h2>
      <h3>${sampleStylesObject.original_price}</h3>
      <StarRating />
    </div>
  )
};

export default YourOutfitItem;