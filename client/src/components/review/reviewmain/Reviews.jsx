
import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'
import axios from 'axios';

function Reviews({ productId }) {
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
    axios.get(`http://localhost:3000/reviews/40344`)
      .then(res => {
        reviewContext.setReviewList(res.data.results);
      });
  }, []);

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