import React from "react";

const StarRating = (props) => {


  const ratingWidthStyle = {
    width: `${props.rating / 5 * 100}%`
  }

  return (
    <div className="star-ratings" style={{width: '80px'}}>
      <div className="fill-ratings" style={ ratingWidthStyle }>
        <span>★★★★★</span>
      </div>
      <div className="empty-ratings">
        <span>★★★★★</span>
      </div>
    </div>
  )
};

export default StarRating;