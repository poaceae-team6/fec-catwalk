import React, { useState } from 'react';
import StarRating from '../reviewmain/StarRating.jsx'
// import { BsFillCheckCircleFill } from "react-icons/bs";
import axios from 'axios';

function ReviewTile(props) {
  const [helpfulness, setHelpfulness] = useState(props.review.helpfulness);
  const [showReview, setShowReview] = useState(true);

  const tileStyles = {
    height: 'auto',
    width: 'auto',
    // border: 'solid black 1px',
    // padding: '10px',
    lineHeight: '1.8',
    display: showReview ? 'block' : 'none'
  }
  const tagStyles = {
    float:'right',
    fontSize: '14px',
    display: 'inline-block',
    color: 'grey',
  }

  const yesStyles = {
    display: 'inline-block',
    textDecoration: 'underline',
    marginLeft: '5px',
    border:'transparent',
    backgroundColor: 'transparent',
    color: 'grey',
    fontSize: '16px'
  }

  const ResponseStyles = {
    backgroundColor: 'lightGrey',
    padding: '10px',
    paddingLeft: '20px'
  }

  const markHelpful = () => {
    if(localStorage.getItem(props.review.review_id) === null){
      axios.put(`/reviews/${props.review.review_id}/helpful`)
      .then(() => {
        setHelpfulness(helpfulness + 1);
        localStorage.setItem(props.review.review_id, true);
        console.log(`Mark ${props.review.review_id} as helpful`);
      })
    } else {
      console.log(`Review ${props.review.review_id} has been marked before.`)
    }
  }

  const reportReview = () => {
    axios.put(`/reviews/${props.review.review_id}/report`)
    .then(() => {
      setShowReview(false);
      console.log(`Successfully report review ${props.review.review_id}`);
    })
  }

  return (
    // props.review.rating
    <div style={tileStyles}>
      <div style={{whiteSpace: 'nowrap', marginTop: '10px'}}>
        <div style={{display: 'inline-block'}}><StarRating rating={props.review.rating}/></div>
        <div style={tagStyles}>{props.review.reviewer_name}, {props.review.date.substring(0,10)}</div>
      </div>
      <div style={{fontSize: '16px',fontWeight: 'bold', marginTop: '10px'}}>{props.review.summary}</div>
      <div style={{marginTop: '15px', color: 'grey'}}>{props.review.body}</div>
      { props.review.recommend ? <div style={{marginTop: '15px', color: 'grey'}}>✔ I recomand this product</div> : null }

      { props.review.photos ?
      <div>
        {props.review.photos.map((photo, i) =>
          <img src={photo.url} key={i} style={{width:'50px', height:'50px'}}/>
        )}
      </div> : null}

      { props.review.response ? <div style={ResponseStyles}>Response:<br></br>{props.review.response}</div> : null}

      <div style={{whiteSpace: 'nowrap', marginTop: '10px', color: 'grey'}}>
        <div style={{display: 'inline-block'}}>Helpful? </div>
        <button style={yesStyles} onClick={markHelpful} >Yes</button>
        <div style={{display: 'inline-block', marginLeft: '5px'}}>({helpfulness})</div>
        <button
          style={yesStyles}
          value={props.review.review_id}
          onClick={reportReview}>Report </button>
      </div>
      <hr style={{marginTop: '15px', orderBottomWidth: '1px'}} />
    </div>
  );
}


export default ReviewTile;