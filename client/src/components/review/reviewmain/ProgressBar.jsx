import React from "react";

const ProgressBar = (props) => {

  // const { '#ffc107', 60 } = props;

  const containerStyles = {
    display: 'inline-block',
    height: '7px',
    width: '80%',
    backgroundColor: '#e4e5e9',
    border: 'solid 1px #e4e5e9'

  }

  const fillerStyles = {
    height: '100%',
    width: `${props.ratingBreakdown}%`,
    backgroundColor: '#4d4d4d'

  }

  const label = {
    display: 'inline-block',
    paddingRight: '10px',
    textDecoration: 'underline'
  }

  return (
    <div style={{whiteSpace: 'nowrap'}}>
      <div style={label}>{props.ratingStar} star:</div>
      <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
      </div>

    </div>
  );
};

export default ProgressBar;