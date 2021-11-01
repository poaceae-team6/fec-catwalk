import React from "react";
import { BsTriangleFill } from "react-icons/bs";


const ScaleBar = () => {

  const barStyles = {
    height: '60px',
    width: '100%',
    marginBottom:'10px',
    marginTop:'10px'
  }

  const containerStyles = {
    height: '7px',
    width: '90%',
    backgroundColor: '#e4e5e9',
    marginTop:'5px',
    marginBottom:'5px'
  }

  const fillerStyles = {
    height: '10px',
    width: '10px',
    // backgroundColor: '#4d4d4d',
    paddingLeft: '150px',
    // transform: 'rotate(180deg)',
    inlineAlign: 'top',
    position: 'absolute'

}

  return (
    <div style={barStyles}>
      <div>Size</div>
      <div style={containerStyles}>
        <BsTriangleFill style={fillerStyles}/>
      </div>
      <div>
        <div style={{float: 'left'}}>Too small</div>
        <div style={{float: 'right'}}>Too large</div>
      </div>
    </div>
  );
};

export default ScaleBar;