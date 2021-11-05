import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

// product object (category, name, description, 'features')
// 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
const url = 'http://127.0.0.1:3000/';

// placeholder - prentending to be local storage
var outfits = [];

const Overview = (props) => {

  const [styles, setStyles] = useState(null); // this saves the array of style objects for the current product!
  const [styleIndex, setStyleIndex] = useState(0); // this saves the index of the selected style!
  const [outfits, setOutfits] = useState([]); // this saves the current outfits list
  const [fillHeart, setFillHeart] = useState();

  useEffect(() => {
    fetchData(props.currentProduct.id);
    // save outfits into local storage - persist the state
    // setOutfits(JSON.parse(window.localStorage.getItem('outfits')));
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

    // if there are no outfits! Just add right away
    if (outfits.length < 1) {
      // otherwise add the entire object
      outfits.push({
        id: props.currentProduct.id,
        styles: [styleIndex]
      });
    } else {
      // Find the outfit index using the id...
      let outfitIndex = outfits.findIndex( ({ id }) => id === props.currentProduct.id );
      if (outfitIndex === -1) {
        outfits.push({
          id: props.currentProduct.id,
          styles: [styleIndex]
        });
      } else {
        outfits[outfitIndex].styles.push(styleIndex);
      }
    }
    console.log(outfits);
  }

  const deleteFromOutfits = () => {

    let outfitIndex = outfits.findIndex( ({ id }) => id === props.currentProduct.id );
    if (outfits[outfitIndex].styles.length === 1) {
      outfits.splice(outfitIndex, 1);
    } else {
      outfits[outfitIndex].styles.splice(styleIndex, 1);
    }
    console.log(outfits);
  }

  const handleClickHeart = () => {
    // toggle heart icon boolean
    setFillHeart(!fillHeart);
    if (fillHeart) {
      deleteFromOutfits();
    } else {
      addToOutfits();
    }
  }

  // update everytime styleIndex is changed.
  useEffect(() => {
    let outfitIndex = outfits.findIndex( ({ id }) => id === props.currentProduct.id );
    if (outfitIndex > -1 && outfits[outfitIndex].styles.includes(styleIndex)) {
      setFillHeart(true);
    } else {
      setFillHeart(false);
    }
  }, [styleIndex])

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
              return <OverviewStyle currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex.bind(this)} setFillHeart={setFillHeart} key={index}/>
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