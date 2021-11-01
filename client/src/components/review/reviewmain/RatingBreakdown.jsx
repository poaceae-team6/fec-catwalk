import React from 'react';
import StarRating from './StarRating.jsx'

import StarBreakdown from './StarBreakdown.jsx';

function RatingBreakdown() {

  const RatingSummary = {
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: '10px',
  }

  const Score = {
    display: 'inline-block',
    fontSize: '50px',
    fontWeight: 'bold'
  }

  const Stars = {
    display: 'inline-block',
    verticalAlign:'top',
    padding: '20px'
  }




  return (
    <div style={{paddingLeft: '10px'}}>
      <div>RATINGS & REVIEWS</div>
      <div style={RatingSummary}>
        <div style={Score}> 4.2 </div>
        <div style={Stars}><StarRating /></div>
      </div>
      <div>100% of reviewe recommand this product</div>
      <div><StarBreakdown /></div>
    </div>
  );
}


export default RatingBreakdown;