import React, {useState, useContext, useEffect} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import { ThemeContext } from '../ThemeContext.js';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import axios from 'axios';

const url = 'http://127.0.0.1:3000';

const RelatedProducts = (props) => {
  
  const [relatedProducts, setRelatedProducts] = useState(null);
  
  useEffect(() => {
    fetchRelatedProducts();
  }, [])
  
  const fetchRelatedProducts = () => {
    axios.get(`${url}/products/${props.currentProduct.id}/related`)
      .then(res => {
        setRelatedProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  const handleLeftArrow = () => {
    slide('products-slide', 'left', 1000, 500);
  }
  
  const handleRightArrow = () => {
    slide('products-slide', 'right', 1000, 500);
  }
  
  if (relatedProducts === null) {
    return <p>isLoading...</p>
  } else {
    return (  
      <ThemeContext.Consumer>
        {darkMode => (
          // className={darkMode ? 'arrow-dark left' : 'arrow left'}
          <div className='products-container'>
            <h2 className='products-list-title'>RELATED PRODUCTS</h2>
            <div className='scroll-container'>
              <button className='arrow' onClick={handleLeftArrow.bind(this)}>
                <MdArrowBackIos onClick={handleLeftArrow.bind(this)}/>
              </button>
              <div className='horizontal-slide' id='products-slide'>
                {relatedProducts.map( (productId, index) => {
                  return <RelatedProductsItem productId={productId} fetchNewProduct={props.fetchNewProduct.bind(this)} key={index}/>
                })}
              </div>
              <button className='arrow' onClick={handleRightArrow.bind(this)}>
                <MdArrowForwardIos onClick={handleRightArrow.bind(this)}/>
              </button> 
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default RelatedProducts;