import React, {useState, useContext, useEffect} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import ProductComparisonModal from './ProductComparisonModal.jsx';
import { ThemeContext } from '../ThemeContext.js';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import axios from 'axios';

const RelatedProducts = (props) => {
  
  const [relatedProducts, setRelatedProducts] = useState(null);
  
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
  
  const handleLeftArrow = () => {
    slide('products-slide', 'left', 1000, 800);
  }
  
  const handleRightArrow = () => {
    slide('products-slide', 'right', 1000, 680);
  }
  
  if (relatedProducts === null) {
    return '';
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
                  return <RelatedProductsItem productId={productId} fetchNewProduct={props.fetchNewProduct.bind(this)} currentProduct={props.currentProduct} key={index}/>
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