import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'
import axios from 'axios';

function Reviews({ productId }) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('revelent');

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
        setPage(1);
      });
  }, []);

  const getReviews = (page, sort, callback) => {
    axios.get(`http://localhost:3000/reviews/${productId}?page=${page}&sort=${sort}`)
    .then(res => {
      callback(res);
    });
    console.log(`refersh list with page ${page} and sort ${sort}`);
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

  const resetReviews = (event) => {
    const sortBy = event.target.value;
    getReviews(
      1,
      sortBy,
      (res) => {
        reviewContext.setReviewList(res.data.results);
        setPage(1);
        setSort(sortBy);
      }
    )
  }


  return (
    <div style={{padding: '10px', marginTop: '20px'}}>
      <div style={sortStyles}>
        <div style={{display: 'inline-block'}}>248 reviews, sorted by  </div>
        <div style={{display: 'inline-block'}}>
          <select style={dropdownStyle} name="sortBy" id="casortByrs" onChange={resetReviews}>
            <option value="revelent">Revelent</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
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