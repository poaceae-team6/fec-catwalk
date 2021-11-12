import React, {useState, useContext, useEffect, useRef} from 'react';
import axios from 'axios';
import StarRating from '../review/reviewmain/StarRating.jsx';
import useOutsideClick from '../useOutsideClick.js';
import ProductComparisonModal from './ProductComparisonModal.jsx';
import { ThemeContext } from '../ThemeContext.js';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaRegStar } from 'react-icons/fa';
import Track from '../TrackerHOC/Track.js';

const RelatedProductsItem = (props) => {
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
    axios.get(`/products/${props.productId}`)
      .then(res => {
        setProductData(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const fetchStyleData = () => {
    axios.get(`/products/${props.productId}/styles`)
    .then(res => {
      setStyleData(res.data.results[0]);
    })
    .catch(error => {
      console.log(error);
    })
  }
  const fetchReviewData = () => {
    axios.get(`/reviews/${props.productId}`)
    .then(res => {
      setReviewData(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }
  const onClickCard = () => {
    props.fetchNewProduct(props.productId);
  }
  const toggleModal = (e) => {
    e.stopPropagation();
    props.handleModalClick(productData);
  }
  if (productData === null || styleData === null || reviewData === null) {
    return '';
  } else {
    return (
      <ThemeContext.Consumer>
        {darkMode => (
          <Track eventName={`Product - ${productData.name} was clicked`} module='Related Products'>
            <div className='product-card' onClick={onClickCard.bind(this)} style={darkMode ? {backgroundColor: '#2a2c29', border: '1px solid #808080'} : {}}>
              <div className='info-container'>
                <FaRegStar onClick={toggleModal.bind(this)} className='info-btn'/>
                {styleData.photos[0].thumbnail_url ? <img src={styleData.photos[0].thumbnail_url} height='220' alt={'product img for ' + styleData.name}/> : <img src='./img/image-not-found.webp' height='220' alt='product img not available'/>}
              </div>
              <h3>CATEGORY: {productData.category.toUpperCase()}</h3>
              <h2 className='product-name'>{productData.name}</h2>
              {styleData.sale_price ? <h3><span style={{color: 'red', 'fontWeight': 'bold'}}>${styleData.sale_price}</span> <span style={{'textDecorationLine': 'line-through'}}>${styleData.original_price}</span></h3> : <h3>${styleData.original_price}</h3>}
              <StarRating rating={reviewData.reduce((total, obj) => obj.rating + total, 0) / reviewData.length}/>
            </div>
          </Track>
        )}
      </ThemeContext.Consumer>
    );
  }
};

export default RelatedProductsItem;