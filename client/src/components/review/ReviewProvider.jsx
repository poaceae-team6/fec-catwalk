import React, { useState } from 'react';

// Initiate a context to share data between components
const ReviewContext = React.createContext({});

function ReviewProvider(props) {
  // ReviewList will store reviewListData from api call
  // SetReviewList is the function to change the value ofreviewList
  const [reviewList, setReviewList] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({
    characteristicsRange: {
      'Size': ['too small', 'too big'],
      'Width': ['too narrow', 'too wide'],
      'Comfort': ['uncomfortable', 'perfect'],
      'Quality': ['poor', 'perfect'],
      'Length': ['runs short', 'runs long'],
      'Fit': ['runs tight', 'runs long']
    }
  });

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
