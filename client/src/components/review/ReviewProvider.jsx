import React, { useState } from 'react';

// Initiate a context to share data between components
const ReviewContext = React.createContext({});

function ReviewProvider(props) {
  // ReviewList will store reviewListData from api call
  // SetReviewList is the function to change the value ofreviewList
  const [reviewList, setReviewList] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({
    characteristicsRange: {
      'Size': ['Too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'Too big'],
      'Width': ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      'Comfort': ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'comfortable', 'Perfect'],
      'Quality': ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      'Length': ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      'Fit': ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
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
