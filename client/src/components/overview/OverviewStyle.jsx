import React, {useState, useEffect} from 'react';

const OverviewStyle = (props) => {

  const handleClick = () => {
    props.setStyleIndex(props.styleIndex);

  }

  return (
    <div className='styles-selection'>
      <button className='style-btn' onClick={handleClick.bind(this)}>
        <img className='style-img' value={props.currentStyle} src={props.currentStyle.photos[0].thumbnail_url}/>
      </button>
    </div>
  )
};

export default OverviewStyle;