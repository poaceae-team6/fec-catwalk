import React, {Component, useState, useContext} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import { ThemeContext } from '../ThemeContext.js';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import sampleProductsdData from '../../assets/related_products/sampleProductsData.js';

const RelatedProducts = (props) => {

  const [relatedProducts, setRelatedProducts] = useState(sampleProductsdData);
  // const theme = useContext(ThemeContext);
  // const [darkMode, setDarkMode] = useState(theme.darkMode);
  
  const handleClick = (e) => {
    if (e.target.id === 'left-arrow') {
      slide('horizontal-slide', 'left', 1000, 500);
    } else {
      slide('horizontal-slide', 'right', 1000, 500);
    }
  }
  
  return (  
    <ThemeContext.Consumer>
      {darkMode => (
        <div className='products-container'>
          <button onClick={handleClick.bind(this)} id='left-arrow' className={darkMode ? 'arrow-dark left' : 'arrow left'}/>
          <div id='horizontal-slide'>
            {relatedProducts.map(item => {
              return <RelatedProductsItem itemData={item} key={item.id}/>
            })}
          </div>
          <button onClick={handleClick.bind(this)} id='right-arrow' className={darkMode ? 'arrow-dark right' : 'arrow right'}/>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default RelatedProducts;