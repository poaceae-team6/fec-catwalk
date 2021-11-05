import React, { useState, useEffect, useContext } from 'react';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';
import ScaleBar from './ScaleBar.jsx';
import axios from 'axios';
import { ReviewContext } from '../ReviewProvider.jsx';

function ReviewLeft({ productId }) {

  // In-line Styling
  const RatingSummary = {
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: '10px',
  }

  const Score = {
    display: 'inline-block',
    fontSize: '50px',
    fontWeight: 'bold'
  }

  const Stars = {
    display: 'inline-block',
    verticalAlign:'top',
    padding: '20px'

  }
  // Create constance to access context
  const reviewContext = useContext(ReviewContext);

  // API
  const getReviewMeta = () => {
    axios.get(`http://127.0.0.1:3000/reviews/${productId}/meta`)
    .then(res => {
      reviewContext.setReviewMeta(res.data);
      console.log(res.data);
    });
  }

  // Hooks to initiate the reviewLeft
  useEffect(() => {
    getReviewMeta();
  }, []);

  return (
    <div style={{paddingLeft: '10px'}}>
      <div>RATINGS & REVIEWS</div>
      <div style={RatingSummary}>
        <div style={Score}> 4.2 </div>
        <div style={Stars}><StarRating /></div>
      </div>
      <div>100% of reviewe recommand this product</div>
      <br></br>
      <div style={{lineHeight: '2.3'}}>
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
      <br></br>
      <div style={{paddingLeft: '10px'}} >
        <ScaleBar />
      </div>

    </div>
  );
}


export default ReviewLeft;