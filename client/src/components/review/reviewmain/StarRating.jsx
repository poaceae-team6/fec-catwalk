import React from "react";

const StarRating = (props) => {


  const ratingWidthStyle = {
    width: `${props.rating / 5 * 100}%`
  }

  return (
    <div className="star-ratings">
      <div className="fill-ratings" style={ ratingWidthStyle }>
        <span>★★★★★</span>
      </div>
      <div className="empty-ratings">
        <span>★★★★★</span>
      </div>
    </div>

    // </div>
  )
};

export default StarRating;