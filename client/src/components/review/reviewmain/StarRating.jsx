import React from "react";
import { ThemeContext } from '../../ThemeContext.js';

const StarRating = (props) => {

  const ratingWidthStyle = {
    width: `${props.rating / 5 * 100}%`
  }
  
  return (
    <ThemeContext.Consumer>
      {darkMode => (
        <div className="star-ratings" style={darkMode ? {width: '80px', 'WebkitTextStroke': '1px #999', color: '#1f1e1e'} : {width: '80px'}}>
          <div className="fill-ratings" style={darkMode ? { width: `${props.rating / 5 * 100}%`, color: 'white'} : { width: `${props.rating / 5 * 100}%`}}>
            <span>★★★★★</span>
          </div>
          <div className="empty-ratings">
            <span>★★★★★</span>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
};

export default StarRating;