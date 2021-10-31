import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const starInputStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1px',
    height: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)'
  }

  return (

    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type= "radio"
              name= "rating"
              style = {starInputStyle}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
            <FaStar
              className="star"
              color= {ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size= {20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  )
};

export default StarRating;