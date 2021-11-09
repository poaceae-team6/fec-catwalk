import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

import StarRating from '../review/reviewmain/StarRating.jsx';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const url = 'http://127.0.0.1:3000';

const YourOutfitItem = (props) => {
  
  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  const [productData, setProductData] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  
  useEffect(() => {
    fetchProductData();
    fetchStyleData();
    fetchReviewData();
    // cleanup/reset state after unmount
    return () => {
      setProductData(null); 
      setStyleData(null); 
      setReviewData(null); 
    }
  }, [])
  
  const fetchProductData = () => {
    axios.get(`${url}/products/${props.outfit.id}`)
      .then(res => {
        setProductData(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  const fetchStyleData = () => {
    axios.get(`${url}/products/${props.outfit.id}/styles`)
    .then(res => {
      setStyleData(res.data.results[props.outfit.style]);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  const fetchReviewData = () => {
    axios.get(`${url}/reviews/${props.outfit.id}`)
    .then(res => {
      setReviewData(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  const onClickCard = () => {
    props.fetchNewProduct(productData.id);
  }
  
  const onDelete = (e) => {
    e.stopPropagation();
    props.deleteFromOutfitList(props.outfit.id, props.outfit.style);
  }
  
  if (productData === null || styleData === null || reviewData === null) {
    return '';
  } else {
    return (
      <div className='product-card' onClick={onClickCard.bind(this)}>
        <div className='info-container'>
          <IoMdCloseCircleOutline onClick={onDelete.bind(this)} className='delete-btn'/>
          {styleData.photos[0].thumbnail_url ? <img src={styleData.photos[0].thumbnail_url} height='220' alt={'product img for ' + styleData.name}/> : <img src='./img/image-not-found.webp' height='220' alt='product img not available'/>}
        </div>
        <h3>CATEGORY: {productData.category.toUpperCase()}</h3>
        <h2 className='product-name'>{styleData.name}</h2>
        {styleData.sale_price ? <h3><span style={{color: 'red', 'fontWeight': 'bold'}}>${styleData.sale_price}</span> <span style={{'textDecorationLine': 'line-through'}}>${styleData.original_price}</span></h3> : <h3>${styleData.original_price}</h3>}
        <StarRating rating={reviewData.reduce((total, obj) => obj.rating + total, 0) / reviewData.length}/>
      </div>
    );
  }
};

export default YourOutfitItem;