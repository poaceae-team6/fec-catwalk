import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import Reviews from './Reviews.jsx'
import { ReviewProvider } from '../ReviewProvider.jsx'


function ReviewMain({ productId }) {

  return (
    <ReviewProvider>
      <div style = {{fontFamily:'sans-serif', marginTop: '40px'}}>
        <div id='leftbar'>
          <div><RatingBreakdown /></div>
          <div><ProductBreakdown /></div>
        </div>
        <div id='rightbar'>
          <Reviews productId={productId } />
        </div>
      </div>
    </ReviewProvider>
  );
}


export default ReviewMain;