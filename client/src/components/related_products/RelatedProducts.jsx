import React, { useState, useContext, useEffect } from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import ProductComparisonModal from './ProductComparisonModal.jsx';
import { ThemeContext } from '../ThemeContext.js';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import axios from 'axios';

const RelatedProducts = (props) => {
  
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLength, setScrollLength] = useState(500);
  
  useEffect(() => {
    fetchRelatedProducts();
    // cleanup/reset state after unmount
    return () => {
      setRelatedProducts(null); 
    }
  }, [])
  
  const fetchRelatedProducts = () => {
    axios.get(`/products/${props.currentProduct.id}/related`)
      .then(res => {
        setRelatedProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  const slide = (direction) => {
    let element = document.getElementById('products-slide');
    setScrollLength(element.scrollHeight);
    if (direction === 'right') {
      setScrollPosition(element.scrollLeft += 800);
    } else {
      setScrollPosition(element.scrollLeft -= 680);
    }
  }
  
  const handleLeftArrow = () => {
    slide('left');
  }
  
  const handleRightArrow = () => {
    slide('right');
  }
  
  if (relatedProducts === null) {
    return '';
  } else {
    return (  
      <ThemeContext.Consumer>
        {darkMode => (
          // className={darkMode ? 'arrow-dark left' : 'arrow left'}
          <div className='products-container'>
            <h2 className='list-title'>RELATED PRODUCTS</h2>
            <div className='scroll-container'>
              <button className='arrow' onClick={handleLeftArrow.bind(this)}>
                {scrollPosition > 0 ? <MdArrowBackIos onClick={handleLeftArrow.bind(this)}/> : ''}
              </button>
              <div className='horizontal-slide' id='products-slide'>
                {relatedProducts.map( (productId, index) => {
                  return <RelatedProductsItem productId={productId} fetchNewProduct={props.fetchNewProduct.bind(this)} currentProduct={props.currentProduct} key={index}/>
                })}
              </div>
              <button className='arrow' onClick={handleRightArrow.bind(this)}>
                {scrollPosition < scrollLength ? <MdArrowForwardIos onClick={handleRightArrow.bind(this)}/> : ''}
              </button> 
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default RelatedProducts;