import React, {Component} from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';

import sampleProductsdData from '../assets/related_products/sampleProductsData.js';

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: sampleProductsdData
    }
  }
  render() {
    return (  
      <div className='related-products'>
        {this.state.relatedProducts.map(item => {
          return <RelatedProductsItem itemData={item} key={item.id}/>
        })}
      </div>
    )
  }
}

export default RelatedProducts;