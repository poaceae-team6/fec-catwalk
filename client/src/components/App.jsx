import React, { useState } from 'react';

import QuestionList from './questions/QuestionList.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';
import ReviewMain from './review/reviewmain/ReviewMain.jsx';

// Import sampleData for testing purposes
// Related Products
import sampleProductIdData from '../assets/related_products/sampleProductIdData.js'

const App = (props) => {
  
  const [currentProduct, setCurrentProduct] = useState({});
  // sample data for current product retrieved by id
  const [temp, setTemp] = useState(sampleProductIdData);
  // shared component for Overview & Outfit
  const [OutfitList, setOutfitList] = useState([]);

  return (
    <div>
      <h1> react is running </h1>
      <div className='overview-container'>Overview Goes Here</div>
      <RelatedProducts outfitIdList={OutfitList}/>
      <QuestionList />
      <div id='review'>Review Goes Here</div>
      <ReviewMain />
    </div>
  );


}

export default App;