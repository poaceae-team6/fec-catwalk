import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import Reviews from './Reviews.jsx'

function ReviewMain() {
  return (
    <div style = {{fontFamily:'sans-serif', marginTop: '40px'}}>
      <div id='leftbar'>
        <div><RatingBreakdown /></div>
        <div><ProductBreakdown /></div>
      </div>
      <div id='rightbar'><Reviews /></div>
    </div>
  );
}


export default ReviewMain;