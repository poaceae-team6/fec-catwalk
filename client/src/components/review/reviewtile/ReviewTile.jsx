import React from 'react';
import StarRating from '../reviewmain/StarRating.jsx'

function ReviewTile() {

  const tileStyles = {
    height: 'auto',
    width: 'auto',
    // border: 'solid black 1px',
    padding: '10px',
    // marginTop: '10px'
  }
  const tagStyles = {
    float:'right',
    fontSize: '14px',
    display: 'inline-block',
    color: 'grey',

  }

  return (
    <div style={tileStyles}>
      <div style={{whiteSpace: 'nowrap', marginTop: '10px'}}>
        <div style={{display: 'inline-block'}}><StarRating /></div>
        <div style={tagStyles}>VerifiedPurchase,UserName, ReviewDate</div>
      </div>
      <div style={{fontSize: '16px',fontWeight: 'bold', marginTop: '10px'}}>ReviewSummary</div>
      <div style={{marginTop: '15px', color: 'grey'}}>ReviewDetail: blablablablablablablablablablablablavblablablablablablablablablablablablablablablabla</div>
      <div style={{marginTop: '15px', color: 'grey'}}>✔ I recomand this product</div>
      <div style={{marginTop: '15px'}}>Response</div>
      <div style={{whiteSpace: 'nowrap', marginTop: '10px', color: 'grey'}}>
        <div style={{display: 'inline-block'}}>Helpful? </div>
        <div style={{display: 'inline-block', textDecoration: 'underline', marginLeft: '5px'}}>Yes</div>
        <div style={{display: 'inline-block', marginLeft: '5px'}}>(9)</div>
      </div>
      <hr style={{marginTop: '15px', orderBottomWidth: '1px'}} />
    </div>
  );
}


export default ReviewTile;