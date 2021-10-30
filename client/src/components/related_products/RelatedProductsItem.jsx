import React, {Component} from 'react';

class RelatedProductsItem extends Component {
  constructor(props) {
    super(props);
  }
  
  // fetch styles data using id to get the image url
  
  render() {
    return (     
    <div className='related-products-card'>
      <img src='./img/related_products_img_placeholder.png'/>
    </div>
    )
  }
}

export default RelatedProductsItem;