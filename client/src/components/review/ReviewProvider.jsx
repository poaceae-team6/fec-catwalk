import React, { useState } from 'react';

// Initiate a context to share data between components
const ReviewContext = React.createContext({});

function ReviewProvider(props) {
  // ReviewList will store reviewListData from api call
  // SetReviewList is the function to change the value ofreviewList
  const [reviewList, setReviewList] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({
    characteristicsRange: {
      'Size': ['too small', '1/2 a size too small', 'perfect', '1/2 a size too big', 'too big'],
      'Width': ['too narrow', 'slightly narrow', 'perfect', 'slightly wide', 'too wide'],
      'Comfort': ['uncomfortable', 'slightly uncomfortable', 'OK', 'comfortable', 'perfect'],
      'Quality': ['poor', 'below average', 'what I expected', 'pretty great', 'perfect'],
      'Length': ['runs short', 'runs slightly short', 'perfect', 'runs slightly long', 'runs long'],
      'Fit': ['runs tight', 'runs slightly tight', 'perfect', 'runs slightly long', 'runs long']
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
