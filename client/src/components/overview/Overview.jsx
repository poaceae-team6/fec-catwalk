import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';
import { BsHeartFill } from 'react-icons/bs';

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
  const [fillHeart, setFillHeart] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, [])

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
    checkHeartStatus();
  }, [styleIndex])
  
  // update everytime outfits is changed.
  useEffect(() => {
    checkHeartStatus();
    console.log(outfits);
  }, [outfits])
  
  // check which current styles in current product are already in outfits!
  const checkHeartStatus = () => {
    if (outfits.length === 0) {
      setFillHeart(false);
    } else {
      for (let outfit of outfits) {
        if (outfit.id === props.currentProduct.id && outfit.style === styleIndex) {
          setFillHeart(true);
          return;
        } else {
          setFillHeart(false);
        }
      }
    }
  }
  
  // triggered in Outfit Components
  const updateOutfits = (newOutfit) => {
    let temp = [...outfits, newOutfit];
    setFillHeart(true);
    setOutfits(temp);
    localStorage.setItem('outfits', JSON.stringify(temp));
  }

  const addToOutfits = () => {
    let temp = [...outfits, {
      id: props.currentProduct.id,
      style: styleIndex
    }];
    setFillHeart(true);
    setOutfits(temp);
    localStorage.setItem('outfits', JSON.stringify(temp));
  }

  const deleteFromOutfits = () => {
    let temp = [...outfits];
    let outfitIndex = temp.findIndex( ({ id, style }) => id === props.currentProduct.id && style === styleIndex);
    setFillHeart(false);
    temp.splice(outfitIndex, 1);
    setOutfits(temp);
    localStorage.setItem('outfits', JSON.stringify(temp));
  }
  
  const deleteFromOutfitList = (outfitId, outfitStyle) => {
    let temp = [...outfits];
    let outfitIndex = temp.findIndex( ({ id, style }) => id === outfitId && style === outfitStyle);
    console.log(outfitIndex);
    temp.splice(outfitIndex, 1);
    console.log(temp);
    setOutfits([...temp]);
    localStorage.setItem('outfits', JSON.stringify(temp));
  }

  const handleClickHeart = () => {
    if (fillHeart) {
      deleteFromOutfits();
    } else {
      addToOutfits();
    }
  }

  if (styles === null || outfits === null) {
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
              {fillHeart ? <IoMdHeart stye={{color: 'red'}}/> : <IoMdHeartEmpty />}
            </button>
          </div>
          <div className='styles'>
            {styles.map( (style, index) => {
              return <OverviewStyle currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex} key={index}/>
            })}
          </div>
        </div>
        <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
        <YourOutfit currentProduct={props.currentProduct} outfits={outfits} onUpdateOutfits={updateOutfits.bind(this)} fetchNewProduct={props.fetchNewProduct.bind(this)} deleteFromOutfitList={deleteFromOutfitList.bind(this)}/>
      </div>
    )
  }
};

export default Overview;