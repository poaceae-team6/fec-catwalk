
import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'

const reviewListData = [
  {
      "review_id": 1036514,
      "rating": 4,
      "summary": "Good buy",
      "recommend": true,
      "response": "Thank you!" ,
      "body": "I really like this product. Solid quality and price.",
      "date": "2021-10-25T00:00:00.000Z",
      "reviewer_name": "LesterTheTester",
      "helpfulness": 12,
      "photos": [
          {
              "id": 1984850,
              "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1635129787/kzxyqcmpncbwtnalhxp0.png"
          },
          {
              "id": 1984851,
              "url": "https://res.cloudinary.com/drbwyfh4x/image/upload/v1635129787/tszpmsfxvg80vpqacrrh.ico"
          }
      ]
  },
  {
      "review_id": 1074924,
      "rating": 5,
      "summary": "123",
      "recommend": false,
      "response": null,
      "body": "abcd",
      "date": "2021-10-29T00:00:00.000Z",
      "reviewer_name": "km",
      "helpfulness": 11,
      "photos": []
  }
];

function Reviews() {
  const buttonStyles = {
    height: '60px',
    width: '200px',
    margin: '10px',
    paddiing:'20px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
  const sortStyles = {
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap'
  }
  const dropdownStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'transparent',
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }

  const [showAddReview, setShowAddReview] = useState(false)
  const reviewContext = useContext(ReviewContext);

  useEffect(() => {
    reviewContext.setReviewList(reviewListData);
    console.log(reviewContext.reviewList);
  });

  const openAddReview = () => {
    console.log(showAddReview);
    setShowAddReview(prev => !prev)
  }


  return (
    <div style={{padding: '10px', marginTop: '20px'}}>
      <div style={sortStyles}>
        <div style={{display: 'inline-block'}}>248 reviews, sorted by</div>
        <div style={{display: 'inline-block'}}>
          <button style={dropdownStyle}>dropdown ˅ </button>
          {/* <div>
            <a href="#">Relevant</a>
            <a href="#">Helpful</a>
            <a href="#">Newest</a>
          </div> */}
        </div>
      </div>
      <div><ReviewsList /></div>
      <button style={buttonStyles}>
        MORE REVIEWS
      </button>
      <button style={buttonStyles} onClick={openAddReview}>
        ADD A REVIEW +
      </button>
      <br></br>
      {showAddReview ? <AddReview setShowAddReview={ setShowAddReview } /> : ''}
    </div>
    );
}


export default Reviews;