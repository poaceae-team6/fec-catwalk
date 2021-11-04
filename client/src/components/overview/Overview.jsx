import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

var outfitList = [];
  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")

// const url = 'http://localhost:3000';
const url = 'http://127.0.0.1:3000';

const Overview = (props) => {

  const [styles, setStyles] = useState(null);
  const [styleIndex, setStyleIndex] = useState(0);
  const [outfits, setOutfits] = useState([]);
  const [isInOutfits, setIsInOutfit] = useState(false);

  useEffect(() => {
    fetchData(props.currentProduct.id);
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

  const updateOutfitList = (copyArray) => {
    outfitList = copyArray;
    setOutfits(copyArray);
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
            <button id='heart-icon'>
              {isInOutfits ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          </div>
          <div className='styles'>
            {styles.map( (style, index) => {
              return <OverviewStyle currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex.bind(this)} key={index}/>
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