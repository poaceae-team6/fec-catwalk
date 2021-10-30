import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import Recommend from './Recommend.jsx';
import StarBreakdown from './StarBreakdown.jsx';


class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div><RatingSummary /></div>
        <div><Recommend /></div>
        <div><StarBreakdown /></div>
      </div>
    )
  }
}


export default RatingBreakdown;