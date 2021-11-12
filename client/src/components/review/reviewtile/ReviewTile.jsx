import React, { useState } from 'react';
import StarRating from '../reviewmain/StarRating.jsx'
// import { BsFillCheckCircleFill } from "react-icons/bs";
import axios from 'axios';
import moment from 'moment';

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
    // color: 'grey',
  }

  const yesStyles = {
    display: 'inline-block',
    textDecoration: 'underline',
    marginLeft: '5px',
    border:'transparent',
    backgroundColor: 'transparent',
    // color: 'grey',
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

  let date = moment(props.review.date).format('LL');

  return (
    // props.review.rating
    <div style={tileStyles}>
      <div style={{whiteSpace: 'nowrap', marginTop: '5px'}}>
        <div style={{display: 'inline-block'}}><StarRating rating={props.review.rating}/></div>
        <p style={tagStyles}>{props.review.reviewer_name}, {date}</p>
      </div>
      <p style={{fontSize: '16px',fontWeight: 'bold', marginTop: '5px'}}>{props.review.summary}</p>
      <p style={{marginTop: '5px', overflowWrap: 'break-word'}}>{props.review.body}</p>
      { props.review.recommend ? <div style={{marginTop: '5px'}}>✔ I recomand this product</div> : null }

      { props.review.photos ?
      <div>
        {props.review.photos.map((photo, i) =>
          <img src={photo.url} key={i} style={{height:'60px', margin: '10px'}}/>
        )}
      </div> : null}

      { props.review.response ? <p style={ResponseStyles}>Response:<br></br>{props.review.response}</p> : null}

      <div style={{whiteSpace: 'nowrap', marginTop: '10px'}}>
        <p style={{display: 'inline-block'}}>Helpful? </p>
        <button style={yesStyles} onClick={markHelpful} >Yes</button>
        <p style={{display: 'inline-block', marginLeft: '5px'}}>({helpfulness})   │</p>
        <button
          style={yesStyles}
          value={props.review.review_id}
          onClick={reportReview}>Report </button>
      </div>
      <hr style={{marginTop: '10px', orderBottomWidth: '1px'}} />
    </div>
  );
}


export default ReviewTile;