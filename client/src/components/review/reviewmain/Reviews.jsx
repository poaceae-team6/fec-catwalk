
import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'
import axios from 'axios';

function Reviews({ productId }) {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('newest');

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
    getReviews(
      page,
      sort,
      (res) => {
        reviewContext.setReviewList(res.data.results);
        setPage(0);
      });
  }, []);

  const getReviews = (page, sort, callback) => {
    axios.get(`http://localhost:3000/reviews/${productId}?page=${page}&sort=${sort}`)
    .then(res => {
      callback(res);
    });
  }

  const openAddReview = () => {
    console.log(showAddReview);
    setShowAddReview(prev => !prev)
  }

  const loadMoreReviews = () => {
    getReviews(
      page + 1,
      sort,
      (res) => {
        reviewContext.setReviewList(reviewContext.reviewList.concat(res.data.results));
        setPage(page + 1);
      });
  }


  return (
    <div style={{padding: '10px', marginTop: '20px'}}>
      <div style={sortStyles}>
        <div style={{display: 'inline-block'}}>248 reviews, sorted by </div>
        <div style={{display: 'inline-block'}}>
        {console.log('refersh list', reviewContext.reviewList)}
          {/* <button style={dropdownStyle}>dropdown ˅ </button> */}
          {/* <div>
            <a href="#">Relevant</a>
            <a href="#">Helpful</a>
            <a href="#">Newest</a>
          </div> */}
        </div>
      </div>
      <div><ReviewsList /></div>
      <button style={buttonStyles} onClick={loadMoreReviews}>
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