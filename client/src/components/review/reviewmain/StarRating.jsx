import React from "react";
import { AiFillStar } from "react-icons/ai";


const StarRating = (props) => {

  return (
    <div>
      {[...Array(5)].map((star, i) => {

        return (
          <label key={i}>
            <AiFillStar
              className="star"
              color= { i < props.rating ? "black" : "#e4e5e9" }
              size= {15}
            />
          </label>
        );
      })}
    </div>
  )
};

export default StarRating;