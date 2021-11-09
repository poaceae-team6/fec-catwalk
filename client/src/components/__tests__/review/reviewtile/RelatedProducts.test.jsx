import React from 'react';
import { mount, shallow } from 'enzyme';

import RelatedProducts from '../../../related_products/RelatedProducts.jsx';

describe('Related Product', () => {
  //add your data and pass it in the component
  // const data = {...}
  it('should render the component', ()=> {
    shallow(<RelatedProducts />)
  });
})