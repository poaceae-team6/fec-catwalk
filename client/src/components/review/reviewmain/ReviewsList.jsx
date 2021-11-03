
import React, { useContext } from 'react';
import ReviewTile from '../reviewtile/ReviewTile.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'

function ReviewsList() {

  const listStyles = {
    height: 'auto',
    width: '100%',
    // border: 'solid black 1px',
    padding: '10px'
  }

  const reviewContext = useContext(ReviewContext);

  return (
    <div style={listStyles}>
      {/* {console.log('here', reviewContext.reviewList)} */}
      <ul>
        {reviewContext.reviewList.map((review, i) =>
           <ReviewTile review={review} key={i} />
        )}
      </ul>

    </div>
    );
}


export default ReviewsList;