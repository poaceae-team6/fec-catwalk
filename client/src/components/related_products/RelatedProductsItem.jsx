import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import StarRating from '../review/reviewmain/StarRating.jsx';
import ProductComparisonModal from './ProductComparisonModal.jsx';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';

  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
  
const url = 'http://127.0.0.1:3000';

const RelatedProductsItem = (props) => {
  
  const [productData, setProductData] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
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
  
  const onClickCard = () => {
    props.fetchNewProduct(props.productId);
  }
  
  const toggleModal = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  }
  
  // const onCloseModal = (e) => {
  //   setShowModal(false);
  // }
  
  if (productData === null || styleData === null) {
    return <p>isLoading...</p>
  } else {
    return (
      <div className='product-card' onClick={onClickCard.bind(this)}>
        {showModal ? <ProductComparisonModal productData={productData} toggleModal={toggleModal.bind(this)}/> : null}
        <div className='info-container'>
          <IoMdInformationCircleOutline onClick={toggleModal.bind(this)} className='info-btn'/>
          {styleData.photos[0].thumbnail_url ? <img src={styleData.photos[0].thumbnail_url}/> : <img src='./img/image-not-found.jpg'/>}
        </div>
        <h3>CATEGORY: {productData.category.toUpperCase()}</h3>
        <h2 className='product-name'>{productData.name}</h2>
        <h3>${styleData.original_price}</h3>
        <StarRating />
      </div>
    )
  }
};

export default RelatedProductsItem;