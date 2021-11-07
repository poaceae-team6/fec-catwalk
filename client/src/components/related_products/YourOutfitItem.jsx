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
  
  useEffect(() => {
    fetchProductData();
    fetchStyleData();
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
  
  const onClickCard = () => {
    props.fetchNewProduct(productData.id);
  }
  
  const onDelete = (e) => {
    e.stopPropagation();
    props.deleteFromOutfitList(props.outfit.id, props.outfit.style);
  }
  
  if (productData === null || styleData === null) {
    return <p>isLoading...</p>
  } else {
    return (
      <div className='product-card' onClick={onClickCard.bind(this)}>
        <div className='info-container'>
          <IoMdCloseCircleOutline onClick={onDelete.bind(this)} className='delete-btn'/>
          <img src={styleData.photos[0].thumbnail_url}/>
        </div>
        <h3>CATEGORY: {productData.category.toUpperCase()}</h3>
        <h2 className='product-name'>{styleData.name}</h2>
        <h3>${styleData.original_price}</h3>
        <StarRating />
      </div>
    )
  }
};

export default YourOutfitItem;