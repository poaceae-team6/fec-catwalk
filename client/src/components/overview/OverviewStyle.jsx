import React, {useState, lazy, Suspense} from 'react';

const OverviewStyle = (props) => {

  const handleClick = () => {
    props.setStyleIndex(props.styleIndex);

  }

  return (
    <div className='styles-selection'>
      <button className='style-btn' onClick={handleClick.bind(this)}>
        <img className='style-img' src={props.currentStyle.photos[0].thumbnail_url} height='60' alt={'style selection icon for ' + props.currentStyle.name}/>
      </button>
    </div>
  )
};

export default OverviewStyle;