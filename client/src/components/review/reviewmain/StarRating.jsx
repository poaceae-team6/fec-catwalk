import React from "react";
import { AiFillStar } from "react-icons/ai";


const StarRating = (props) => {


  const ratingWidthStyle = {
    width: `${props.rating / 5 * 100}%`
  }


  return (
    <div className="star-ratings">
      {console.log(props.rating)}
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