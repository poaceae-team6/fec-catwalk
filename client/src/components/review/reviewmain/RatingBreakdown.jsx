import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import Recommend from './Recommend.jsx';
import StarBreakdown from './StarBreakdown.jsx';

function RatingBreakdown() {
  return (
    <div>
      <div><RatingSummary /></div>
      <div><Recommend /></div>
      <div><StarBreakdown /></div>
    </div>
  );
}


export default RatingBreakdown;