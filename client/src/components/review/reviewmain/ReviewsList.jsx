
import React, { useContext } from 'react';
import ReviewTile from '../reviewtile/ReviewTile.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'

function ReviewsList() {

  const listStyles = {
    height: 'auto',
    width: '100%',
    // border: 'solid black 1px',
    // paddingTop: '10px'
  }

  const reviewContext = useContext(ReviewContext);

  return (
    <div style={listStyles}>
      <div>
        {reviewContext.reviewList.map((review, i) =>
           <ReviewTile review={review} key={i} />
        )}
      </div>

    </div>
    );
}


export default ReviewsList;