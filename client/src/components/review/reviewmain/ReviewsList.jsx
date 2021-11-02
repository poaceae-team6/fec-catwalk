
import React from 'react';
import ReviewTile from '../reviewtile/ReviewTile.jsx';

function ReviewsList() {

  const listStyles = {
    height: 'auto',
    width: '100%',
    // border: 'solid black 1px',
    padding: '10px'
  }

  return (
    <div style={listStyles}>
      <div><ReviewTile /></div>
      <div><ReviewTile /></div>
    </div>
    );
}


export default ReviewsList;