import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import StarRating from '../review/reviewmain/StarRating.jsx';

  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  
const url = 'http://localhost:3000';

const RelatedProductsItem = (props) => {
  
  const [productData, setProductData] = useState(null);
  const [styleData, setStyleData] = useState(null);
  
  useEffect(() => {
    fetchProductData();
    fetchStyleData();
  }, [])
  
  const fetchProductData = () => {
    axios.get(`${url}/products/${props.productId}`)
      .then(res => {
        setProductData(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  const fetchStyleData = () => {
    axios.get(`${url}/products/${props.productId}/styles`)
    .then(res => {
      setStyleData(res.data.results[0]);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  if (productData === null || styleData === null) {
    return <p>isLoading...</p>
  } else {
    return (
      <div className='product-card'>
        <img src={styleData.photos[0].thumbnail_url}/>
        <h3>CATEGORY: {productData.category.toUpperCase()}</h3>
        <h2 className='product-name'>{productData.name}</h2>
        <h3>${styleData.original_price}</h3>
        <StarRating />
      </div>
    )
  }
};

export default RelatedProductsItem;