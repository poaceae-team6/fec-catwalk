import React from 'react';
import { mount, shallow } from 'enzyme';

import RelatedProducts from '../../../related_products/RelatedProducts.jsx';
import Overview from '../../../overview/Overview.jsx';
import OverviewStyle from '../../../overview/OverviewStyle.jsx';
import RelatedProductsItem from '../../../related_products/RelatedProductsItem.jsx';
import YourOutfit from '../../../related_products/YourOutfit.jsx';
import YourOutfitItem from '../../../related_products/YourOutfitItem.jsx';
import YourOutfitItemDefault from '../../../related_products/YourOutfitItemDefault.jsx';

describe('Related Product', () => {
  //add your data and pass it in the component
  // const data = {...}
  it('should render the component', ()=> {
    shallow(<RelatedProducts />)
  });

  it('should render the related product item', ()=> {
    shallow(<RelatedProductsItem />)
  });
})

describe('Your Outfit', () => {

  it('should render the yourOutfit item', ()=> {
    shallow(<YourOutfitItem />)
  });

  it('should render the yourOutfit item deafult', ()=> {
    shallow(<YourOutfitItemDefault />)
  });

})

describe('overview', () => {

  it('should render the overview', ()=> {
    shallow(<Overview />)
  });

  it('should render the style', ()=> {
    let data = {photos: [{thumbnail_url:"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      url:"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      }]}
    shallow(<OverviewStyle currentStyle={data}/>);
  });
})