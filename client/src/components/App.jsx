import React from 'react';
import QuestionList from './QuestionList.jsx';

// Import sampleData for testing purposes
// Related Products
import sampleProductsData from '../../related_products/sampleProductsData.js';
import sampleProductIdData from '../../related_products/sampleProductIdData.js'
import sampleProductIdRelatedData from '../../related_products/sampleProductIdRelatedData.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // sample data for current product retrieved by id
      tempCurrentProduct: {sampleProductIdData};
      // shared component for Overview & Outfit
      tempOutfitList: []
    };
  }

  render () {

    return (
      <RelatedProducts />
      <QuestionList />
    )
  }
}

export default App;