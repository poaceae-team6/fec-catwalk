import React from 'react';
import ReviewLeft from './ReviewLeft.jsx'
import ReviewsRight from './ReviewsRight.jsx'
import { ReviewProvider } from '../ReviewProvider.jsx'


function ReviewMain({ productId, productName }) {

  return (
    <ReviewProvider>
      <div style = {{fontFamily:'sans-serif', marginTop: '40px'}}>
        <div id='leftbar'>
          <div><ReviewLeft productId={productId }/></div>

        </div>
        <div id='rightbar'>
          <ReviewsRight productId={productId} productName={productName} />
        </div>
      </div>
    </ReviewProvider>
  );
}


export default ReviewMain;