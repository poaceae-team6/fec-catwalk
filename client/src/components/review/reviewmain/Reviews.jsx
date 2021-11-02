
import React from 'react';
import ReviewsList from './ReviewsList.jsx';

function Reviews() {

  const buttonStyles = {
    height: '60px',
    width: '200px',
    margin: '10px',
    paddiing:'20px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
  const sortStyles = {
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap'
  }
  const dropdownStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'transparent',
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }


  return (
    <div style={{padding: '10px'}}>
      <div style={sortStyles}>
        <div style={{display: 'inline-block'}}>248 reviews, sorted by</div>
        <div style={{display: 'inline-block'}}>
          <button style={dropdownStyle}>dropdown ˅ </button>
          {/* <div>
            <a href="#">Relevant</a>
            <a href="#">Helpful</a>
            <a href="#">Newest</a>
          </div> */}
        </div>
      </div>
      <div><ReviewsList /></div>
      <button style={buttonStyles}>
        MORE REVIEWS
      </button>
      <button style={buttonStyles}>
        ADD A REVIEW +
      </button>
    </div>
    );
}


export default Reviews;