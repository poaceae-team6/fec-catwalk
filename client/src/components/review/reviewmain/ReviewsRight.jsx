import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'
import axios from 'axios';

function ReviewsRight({ productId }) {

  //In-line styling
  const buttonStyles = {
    height: '60px',
    width: '200px',
    marginLeft: '20px',
    margin: '10px',
    padding:'10px',
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

  // Create state for page sort
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('revelent');

  // Create state to load more page of review
  const [showAddReview, setShowAddReview] = useState(false)
  const reviewContext = useContext(ReviewContext);

  // Hooks to initiate the reviewList
  useEffect(() => {
    getReviews(
      page,
      sort,
      (res) => {
        reviewContext.setReviewList(res.data.results);
        setPage(1);
      });
  }, []);

  // Call API to fetch review data
  const getReviews = (page, sort, callback) => {
    axios.get(`http://127.0.0.1:3000/reviews/${productId}?page=${page}&sort=${sort}`)
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
        <div style={{display: 'inline-block'}}>{} reviews, sorted by  </div>
        <div style={{display: 'inline-block'}}>
          <select style={dropdownStyle} name="sortBy" id="casortByrs" onChange={resetReviews}>
            <option value="revelent">Revelent</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <br></br>
      <div><ReviewsList /></div>
      <br></br>
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


export default ReviewsRight;