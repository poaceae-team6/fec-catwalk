import React from 'react';
import StarRating from '../reviewmain/StarRating.jsx'
// import { BsFillCheckCircleFill } from "react-icons/bs";

function ReviewTile(props) {

  const tileStyles = {
    height: 'auto',
    width: 'auto',
    // border: 'solid black 1px',
    padding: '10px',
    lineHeight: '1.8'
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
          <img src={photo.url} key={i} style={{width:'100px', height:'100px'}}/>
        )}
      </div> : null}

      { props.review.response ? <div style={ResponseStyles}>Response:<br></br>{props.review.response}</div> : null}

      <div style={{whiteSpace: 'nowrap', marginTop: '10px', color: 'grey'}}>
        <div style={{display: 'inline-block'}}>Helpful? </div>
        <button style={yesStyles} >Yes</button>
        <div style={{display: 'inline-block', marginLeft: '5px'}}>({props.review.helpfulness})</div>
      </div>
      <hr style={{marginTop: '15px', orderBottomWidth: '1px'}} />
    </div>
  );
}


export default ReviewTile;