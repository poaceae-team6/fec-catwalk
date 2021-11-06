import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

const url = 'http://127.0.0.1:3000';

const Overview = (props) => {

  const [styles, setStyles] = useState(null); 
  const [styleIndex, setStyleIndex] = useState(0);
  const [outfits, setOutfits] = useState(() => {
    // getting the outfits from localStorage
    const storedOutfits = localStorage.getItem('outfits');
    const initialValue = JSON.parse(storedOutfits);
    return initialValue || [];
  }); 
  const [fillHeart, setFillHeart] = useState();
  
  useEffect(() => {
    fetchData();
  }, [])
  
  // useEffect(() => {
  //   // whenever outfits get updated
  //   // save stringified version of outfits into local storage - persist the state
  //   localStorage.setItem('outfits', JSON.stringify(outfits));
  // }, [outfits])

  const fetchData = () => {
    axios.get(`${url}/products/${props.currentProduct.id}/styles`)
      .then(res => {
        setStyles(res.data.results);
      })
      .catch(error => {
        console.log(error);
      })
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

  const addToOutfits = () => {
    
    let temp = outfits;
    if (outfits.length < 1) {
      temp.push({
        id: props.currentProduct.id,
        styles: [styleIndex]
      });
    } else {
      let outfitIndex = outfits.findIndex( ({ id }) => id === props.currentProduct.id );
      if (outfitIndex === -1) {
        temp.push({
          id: props.currentProduct.id,
          styles: [styleIndex]
        });
      } else {
        temp[outfitIndex].styles.push(styleIndex);
      }
    }
    setOutfits(temp);
    localStorage.setItem('outfits', JSON.stringify(outfits));
  }

  const deleteFromOutfits = () => {
    
    let temp = outfits;
    let outfitIndex = temp.findIndex( ({ id }) => id === props.currentProduct.id ); 
    if (temp[outfitIndex].styles.length === 1) {
      temp.splice(outfitIndex, 1);
      setOutfits(temp);
    } else if (temp[outfitIndex].styles.length > 1) { 
      let index = temp[outfitIndex].styles.indexOf(styleIndex);
      temp[outfitIndex].styles.splice(index, 1);
      setOutfits(temp);
    }
    localStorage.setItem('outfits', JSON.stringify(outfits));
  }

  const handleClickHeart = () => {
    if (fillHeart) {
      deleteFromOutfits();
    } else {
      addToOutfits();
    }
    setFillHeart(!fillHeart);
  }

  if (styles === null) {
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
              return <OverviewStyle currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex.bind(this)} key={index}/>
            })}
          </div>
        </div>
        <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
        <YourOutfit currentProduct={props.currentProduct} outfits={outfits} fetchNewProduct={props.fetchNewProduct.bind(this)} addToOutfits={addToOutfits.bind(this)}/>
      </div>
    )
  }
  // return content;
};

export default Overview;