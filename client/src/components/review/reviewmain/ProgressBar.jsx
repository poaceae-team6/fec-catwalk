import React from "react";

const ProgressBar = () => {

  // const { '#ffc107', 60 } = props;

  const containerStyles = {
    display: 'inline-block',
    height: '7px',
    width: '80%',
    backgroundColor: '#e4e5e9'
  }

  const fillerStyles = {
    height: '100%',
    width: '60%',
    backgroundColor: '#4d4d4d',
  }

  const label = {
    display: 'inline-block',
    paddingRight: '10px',
    textDecoration: 'underline'
  }

  return (
    <div style={{whiteSpace: 'nowrap'}}>
      <div style={label}>1 star:</div>
      <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
      </div>

    </div>
  );
};

export default ProgressBar;