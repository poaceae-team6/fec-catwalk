import React, { useState } from 'react';

// Initiate a context to share data between components
const ReviewContext = React.createContext({});

function ReviewProvider(props) {
  // ReviewList will store reviewListData from api call
  // SetReviewList is the function to change the value ofreviewList
  const [reviewList, setReviewList] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({ratingBreakdown: [1, 1, 1, 1, 1]});

  return (
    // Allow the children to get data from context
    <ReviewContext.Provider value={{
      reviewList, setReviewList,
      reviewMeta, setReviewMeta,
    }}>
      {props.children}
    </ReviewContext.Provider>
  );
}

export { ReviewContext, ReviewProvider };
