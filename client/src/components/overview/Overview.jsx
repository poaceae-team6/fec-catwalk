import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

// product object (category, name, description, 'features')
// 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
const url = 'http://localhost:3000';

const Overview = (props) => {

  const [styles, setStyles] = useState(null); // this saves the array of style objects for the current product!
  const [styleIndex, setStyleIndex] = useState(0); // this saves the index of the selected style!
  const [outfits, setOutfits] = useState([]); // this saves the current outfits list
  const [isInOutfits, setIsInOutfit] = useState(false);
  const [fillHeart, setFillHeart] = useState(false);

  useEffect(() => {
    fetchData(props.currentProduct.id);
    // save outfits into local storage - persist the state
    setOutfits(JSON.parse(window.localStorage.getItem('outfits')));
  }, [])
  
  const fetchData = (productId) => {
    axios.get(`${url}/products/${productId}/styles`)
    .then(res => {
      setStyles(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const addToOutfits = () => {
    // Ex: { id: props.currentProduct.id, style_index: styleIndex}
    
    // if object id is found
      // add style_index to styles 
    // otherwise add the entire object
    outfits.push();
    setIsInOutfit(true);
  }
  
  const deleteFromOutfits = () => {
    // Ex: { id: props.currentProduct.id, style_index: styleIndex}
    // if object id is found
      // if there's only one style, remove that entire object
      // otherwise just remove that style id
    setIsInOutfit(false);
  }
  
  const handleClickHeart = () => {
    if (fillHeart) {
      setFillHeart(false)
      //addToOutfits();
    } else {
      setFillHeart(true);
      //deleteFromOutfits();
    }
  }

  if (styles===null) {
    return (<h3>isLoading...</h3>)
  } else {
    return (
      <div className='overview-container'>
        <div className='overview-grid'>
          <h2>{props.currentProduct.name}</h2>
          <div className='gallery'>
            <img src={styles[styleIndex].photos[0].thumbnail_url}/>
          </div>
          <div className='overview-buttons'>
            <button id='cart-btn'>
              <h3>ADD TO BAG</h3>
            </button>
            <button id='heart-icon' onClick={handleClickHeart.bind(this)}>
              {fillHeart ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          </div>
          <div className='styles'>
            {styles.map( (style, index) => {
              return <OverviewStyle outfits={outfits} currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex.bind(this)} addToOutfits={addToOutfits.bind(this)} deleteFromOutfits={deleteFromOutfits.bind(this)} isInOutfits={isInOutfits} key={index}/>
            })}
          </div>
        </div>
        <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
        <YourOutfit currentProduct={props.currentProduct} />
      </div>
    )
  }
  // return content;
};

export default Overview;