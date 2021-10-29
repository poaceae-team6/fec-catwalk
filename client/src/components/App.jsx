import React from 'react';
import QuestionList from './QuestionList.jsx';
import RelatedProducts from './RelatedProducts.jsx';

// Import sampleData for testing purposes
// Related Products
import sampleProductIdData from '../assets/related_products/sampleProductIdData.js'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // sample data for current product retrieved by id
      tempCurrentProduct: {sampleProductIdData},
      // shared component for Overview & Outfit
      tempOutfitList: []
    };
  }

  render () {

    return (
      <div>
        <RelatedProducts outfitIdList={this.state.tempOutfitList}/>
        <QuestionList />
      </div>
    )
  }
}

export default App;