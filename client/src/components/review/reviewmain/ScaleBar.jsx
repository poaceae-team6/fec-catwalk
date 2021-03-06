import React from "react";
import { BsTriangleFill } from "react-icons/bs";


const ScaleBar = (props) => {

  const barStyles = {
    height: '80px',
    width: '100%',
    marginBottom:'20px',
    marginTop:'20px'
  }

  const containerStyles = {
    height: '8px',
    width: '100%',
    backgroundColor: '#e4e5e9',
    marginTop:'10px',
    marginBottom:'10px'

  }

  const fillerStyles = {
    height: '12px',
    width: '12px',
    paddingLeft: `${Number(Number(props.scale) / 5).toFixed(2) * 100}%`,
    inlineAlign: 'top',
    color: 'grey'
  }

  return (
    <div style={barStyles}>
      <div>{props.character}</div>
      <div style={containerStyles}>
        <div><BsTriangleFill style={fillerStyles}/></div>
      </div>
      <div style={{width: '100%', fontSize: '16px'}}>
        <div style={{float: 'left'}}>{props.range[0]}</div>
        <div style={{float: 'right'}}>{props.range[4]}</div>
      </div>
    </div>
  );
};

export default ScaleBar;