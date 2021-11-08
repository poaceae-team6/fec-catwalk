import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";


function StarRatingInput({ updateStarRating }) {
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

  const valueStr = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great"
  }

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    updateStarRating(ratingValue);
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
              onClick={() => handleClick(ratingValue)}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
            <AiFillStar
              className="star"
              color= {ratingValue <= (hover || rating) ? "black" : "#e4e5e9"}
              size= {30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <span>
        {rating ? valueStr[rating] : null}
      </span>
    </div>
  )
}

export default StarRatingInput;