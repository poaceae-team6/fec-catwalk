import React from "react";

const ProgressBar = () => {

  // const { '#ffc107', 60 } = props;

  const containerStyles = {
    float: 'right',
    height: 5,
    width: '70%',
    backgroundColor: '#e4e5e9',
    margin: 30
  }

  const fillerStyles = {
    height: '100%',
    width: '60%',
    backgroundColor: '#4d4d4d',
    textAlign: 'right'
  }

  // const label = {
  //   white-space: nowrap;
  // }

  return (
    <div>
      <div >1 star:
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgressBar;