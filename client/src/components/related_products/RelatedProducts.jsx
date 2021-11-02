import React, {Component} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';

import slide from '../../../dist/css_animations/horizontalScroll.js';
import sampleProductsdData from '../../assets/related_products/sampleProductsData.js';
import jquery from 'jquery';

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: sampleProductsdData
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    if (e.target.id === 'left-arrow') {
      slide('horizontal-slide', 'left', 1000, 500);
    } else {
      slide('horizontal-slide', 'right', 1000, 500);
    }
  }
  
  render() {
    return (  
      <div className='products-container'>
        <button onClick={this.handleClick} id='left-arrow' className='arrow left'/>
        <div id='horizontal-slide'>
          {this.state.relatedProducts.map(item => {
            return <RelatedProductsItem itemData={item} key={item.id}/>
          })}
        </div>
        <button onClick={this.handleClick} id='right-arrow' className='arrow right'/>
      </div>
    )
  }
}

export default RelatedProducts;