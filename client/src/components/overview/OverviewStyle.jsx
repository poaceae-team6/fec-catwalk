import React, {useState, useEffect} from 'react';

  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")

const OverviewStyle = (props) => {

  const [addToOutfit, setAddToOutfit] = useState(false);

  const handleClick = () => {
    props.setCurrentStyleIndex(props.key);
  }

  return (
    <div className='styles-selection'>
      <button onClick={handleClick.bind(this)}>
        <img className='style-img' value={props.currentStyle} src={props.currentStyle.photos[0].thumbnail_url}/>
      </button>
    </div>
  )
};

export default OverviewStyle;