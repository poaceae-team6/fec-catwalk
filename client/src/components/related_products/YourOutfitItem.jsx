import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

import sampleProductIdData from '../../assets/related_products/sampleProductIdData.js';
import sampleProductIdStylesData from '../../assets/related_products/sampleProductIdStylesData.js';

import YourOutfitItemCard from './YourOutfitItemCard.jsx';
import StarRating from '../review/reviewmain/StarRating.jsx';

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
      setStyleData(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  if (productData === null || styleData === null) {
    return <p>isLoading...</p>
  } else {
    return (
      <div style={{ display: 'inline-block' }}>
        {props.outfit.styles.map( (styleIndex, index) => {
          return <YourOutfitItemCard productData={productData} styleData={styleData} styleIndex={styleIndex} fetchNewProduct={props.fetchNewProduct} key={index}/>
        })}
      </div>
    )
  }
};

export default YourOutfitItem;