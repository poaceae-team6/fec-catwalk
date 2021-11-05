import React, {useState, useContext, useEffect} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import { ThemeContext } from '../ThemeContext.js';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import sampleProductsData from '../../assets/related_products/sampleProductsData.js';
import axios from 'axios';

const url = 'http://localhost:3000';

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
  
  const handleClick = (e) => {
    if (e.target.id === 'left-arrow') {
      slide('products-slide', 'left', 1000, 500);
    } else {
      slide('products-slide', 'right', 1000, 500);
    }
  }
  
  if (relatedProducts === null) {
    return <p>isLoading...</p>
  } else {
    return (  
      <ThemeContext.Consumer>
        {darkMode => (
          <div className='products-container'>
            <h2 className='products-list-title'>RELATED PRODUCTS</h2>
            <button onClick={handleClick.bind(this)} id='left-arrow' className={darkMode ? 'arrow-dark left' : 'arrow left'}/>
            <div className='horizontal-slide' id='products-slide'>
              {relatedProducts.map( (productId, index) => {
                // should pass 2 objects - product & styles for specific id
                return <RelatedProductsItem productId={productId} key={index}/>
              })}
            </div>
            <button onClick={handleClick.bind(this)} id='right-arrow' className={darkMode ? 'arrow-dark right' : 'arrow right'}/>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default RelatedProducts;