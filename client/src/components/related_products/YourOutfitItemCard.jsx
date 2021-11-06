import React from 'react';

import StarRating from '../review/reviewmain/StarRating.jsx';

const YourOutfitItemCard = (props) => {
  
  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  
  const onClickCard = () => {
    props.fetchNewProduct(props.productData.id);
  }
 
  return (
    <div className='product-card' onClick={onClickCard.bind(this)}>
      <img src={props.styleData[props.styleIndex].photos[0].thumbnail_url}/>
      <h3>CATEGORY: {props.productData.category.toUpperCase()}</h3>
      <h2 className='product-name'>{props.styleData[props.styleIndex].name}</h2>
      <h3>${props.styleData[props.styleIndex].original_price}</h3>
      <StarRating />
    </div>
  )
};

export default YourOutfitItemCard;