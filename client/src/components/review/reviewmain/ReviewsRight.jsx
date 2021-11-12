import React, { useState, useEffect, useContext } from 'react';
import ReviewsList from './ReviewsList.jsx';
import AddReview from '../addreview/AddReview.jsx';
import { ReviewContext } from '../ReviewProvider.jsx'
import axios from 'axios';
import Track from '../../TrackerHOC/Track.js';

function ReviewsRight({ productId, productName, darkMode }) {

  //In-line styling
  const buttonStyles = {
    height: '60px',
    width: '200px',
    marginLeft: '20px',
    margin: '10px',
    padding:'10px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'none',
  }

  const buttonStylesDark = {
    height: '60px',
    width: '200px',
    marginLeft: '20px',
    margin: '10px',
    padding:'10px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: '#2a2c29',
    color: '#f3f3f3',
    border: '1px solid #808080'
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

  const dropdownStyleDark = {
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'transparent',
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    color: 'white'
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
    axios.get(`/reviews/${productId}?page=${page}&sort=${sort}`)
    .then(res => {
      callback(res);
    });
    console.log(`refersh list with page ${page} and sort ${sort}`);
  }

  const openAddReview = () => {
    console.log('should show add review', showAddReview);
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
    <div style={{padding: '10px', marginTop: '75px'}}>
      <div style={sortStyles}>
        <div style={{display: 'inline-block'}}>{reviewContext.reviewMeta.reveiwTotal} reviews, sorted by  </div>
        <div style={{display: 'inline-block'}}>
          <select style={darkMode ? dropdownStyleDark : dropdownStyle} name="sortBy" id="casortByrs" onChange={resetReviews}>
            <option style={darkMode ? dropdownStyleDark : dropdownStyle} value="revelent">Revelent</option>
            <option style={darkMode ? dropdownStyleDark : dropdownStyle} value="helpful">Helpful</option>
            <option style={darkMode ? dropdownStyleDark : dropdownStyle} value="newest">Newest</option>
          </select>
        </div>
      </div>
      <br></br>
      <div style={{marginLeft: '10px'}} ><ReviewsList darkMode={darkMode} /></div>
      <br></br>
      <Track eventName={`More Review for ${productName} is clicked`} module='Reviews'>
        <button style={darkMode ? buttonStylesDark : buttonStyles} onClick={loadMoreReviews}>
          MORE REVIEWS
        </button>
      </Track>
      <Track eventName={`Add a Review for ${productName} is clicked`} module='Reviews'>
      <button style={darkMode ? buttonStylesDark : buttonStyles} onClick={openAddReview}>
        ADD A REVIEW +
      </button>
      </Track>
      <br></br>
      {showAddReview ? <AddReview darkMode={darkMode} setShowAddReview={ setShowAddReview } productTitle={productName} productId={productId} /> : ''}
    </div>
    );
}


export default ReviewsRight;