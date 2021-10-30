import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import Reviews from './Reviews.jsx'


class ReviewMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div>
        <h2>REVIEW</h2>
        <div id='leftbar'>
          <div><RatingBreakdown /></div>
          <div><ProductBreakdown /></div>
        </div>
        <div id='rightbar'><Reviews /></div>
      </div>
    )
  }
}


export default ReviewMain;