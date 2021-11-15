import React, { useState, useContext } from 'react';
import StarRating from '../reviewmain/StarRating.jsx'
// import { BsFillCheckCircleFill } from "react-icons/bs";
import axios from 'axios';
import moment from 'moment';

function ReviewTile({ darkMode, review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [showReview, setShowReview] = useState(true);

  const tileStyles = {
    height: 'auto',
    width: 'auto',
    lineHeight: '1.8',
    display: showReview ? 'block' : 'none',
    marginTop: '20px',
    borderBottom: 'solid 1px lightgrey'
  }
  const tagStyles = {
    float:'right',
    fontSize: '16px',
    display: 'inline-block',
    fontStyle: 'italic',
    margin: '0px'
  }

  const yesStyles = {
    display: 'inline-block',
    textDecoration: 'underline',
    marginLeft: '5px',
    border:'transparent',
    backgroundColor: 'transparent',
    fontSize: '16px'
  }
  const yesStylesDark = {
    display: 'inline-block',
    textDecoration: 'underline',
    marginLeft: '5px',
    border:'transparent',
    backgroundColor: 'transparent',
    fontSize: '16px',
    color:'white'
  }

  const ResponseStyles = {
    backgroundColor: 'lightGrey',
    padding: '10px',
    paddingLeft: '20px'
  }

  const markHelpful = () => {
    if(localStorage.getItem(review.review_id) === null){
      axios.put(`/reviews/${review.review_id}/helpful`)
      .then(() => {
        setHelpfulness(helpfulness + 1);
        localStorage.setItem(review.review_id, true);
        //(`Mark ${review.review_id} as helpful`);
      })
    } else {
      //console.log(`Review ${review.review_id} has been marked before.`)
    }
  }

  const reportReview = () => {
    axios.put(`/reviews/${review.review_id}/report`)
    .then(() => {
      setShowReview(false);
      //console.log(`Successfully report review ${review.review_id}`);
    })
  }

  let date = moment(review.date).format('LL');

  return (
    // review.rating
    <div style={tileStyles}>
      <div style={{whiteSpace: 'nowrap', marginTop: '10px'}}>
        <div style={{display: 'inline-block'}}><StarRating rating={review.rating}/></div>
        <p style={tagStyles}>{review.reviewer_name}, {date}</p>
      </div>
      <p style={{fontSize: '16px',fontWeight: 'bold', marginTop: '15px'}}>{review.summary}</p>
      <p style={{overflowWrap: 'break-word'}}>{review.body}</p>
      { review.recommend ? <div style={{marginTop: '5px'}}>✔ I recomand this product</div> : null }

      { review.photos ?
      <div>
        {review.photos.map((photo, i) =>
          <img src={photo.url} key={i} style={{height:'60px', margin: '10px'}}/>
        )}
      </div> : null}

      { review.response ? <p style={ResponseStyles}>Response:<br></br>{review.response}</p> : null}

      <div style={{whiteSpace: 'nowrap', marginTop: '10px'}}>
        <p style={{display: 'inline-block'}}>Helpful? </p>
        <button style={darkMode ? yesStylesDark : yesStyles} onClick={markHelpful} >Yes</button>
        <p style={{display: 'inline-block', marginLeft: '5px'}}>({helpfulness})   │</p>
        <button
          style={darkMode ? yesStylesDark : yesStyles}
          value={review.review_id}
          onClick={reportReview}>Report </button>
      </div>

    </div>
  );
}


export default ReviewTile;