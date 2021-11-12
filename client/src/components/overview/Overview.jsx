import React, {useState, useEffect, lazy, Suspense} from 'react';
import axios from 'axios';

// import RelatedProducts from '../related_products/RelatedProducts.jsx';
const RelatedProducts = lazy(() => import('../related_products/RelatedProducts.jsx'));
// import YourOutfit from '../related_products/YourOutfit.jsx';
const YourOutfit = lazy(() => import('../related_products/YourOutfit.jsx'));
import OverviewStyle from './OverviewStyle.jsx';

import {IoMdHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';
import { BsHeartFill } from 'react-icons/bs';
import { ThemeContext } from '../ThemeContext.js';

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
    // get the outfit data from localStorage
    localStorage.getItem('outfits');
    const hasOutfitsData = localStorage.getItem('outfits');
    if (hasOutfitsData === null) {
      localStorage.setItem('outfits', JSON.stringify([]));
    }

    fetchData();
    // cleanup/reset state after unmount
    return () => {
      setStyles(null);
    }
  }, [])

  const fetchData = () => {
    axios.get(`/products/${props.currentProduct.id}/styles`)
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
    temp.splice(outfitIndex, 1);
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
    return (
      <div className='overview-loading-container'>
        <h3>Loading</h3>
        <div className="loader"></div>
      </div>
    )
  } else {
    return (
      <ThemeContext.Consumer>
        {darkMode => (
          <div className='overview-container' aria-label="Justify">
            <div className='overview-grid'>
              <div className='product'>
                <h2>{props.currentProduct.name}</h2>
                <h3>{props.currentProduct.description}</h3>
              </div>
              <Suspense fallback={<div>is Loading...</div>}>
              <div className='gallery' style={darkMode ? {backgroundColor: '#2a2c29'} : {}}>
                {styles[styleIndex].photos[0].url ? <img src={styles[styleIndex].photos[0].url} height='450' alt={'product img for ' + props.currentProduct.name}/> : <img src='./img/image-not-found.webp' height='450' alt='product img not available'/>}
              </div>
              </Suspense>
              <div className='overview-buttons'>
                <button id='cart-btn' aria-label="Left Align" style={darkMode ? {background: '#2a2c29', color: '#f3f3f3', border: '1px solid #808080'} : {}}>
                  <h3>ADD TO BAG</h3>
                </button>
                <button id='heart-icon' onClick={handleClickHeart.bind(this)} aria-label="Left Align" style={darkMode ? {background: '#2a2c29', color: '#f3f3f3'} : {}}>
                  {fillHeart ? <IoMdHeart /> : <IoMdHeartEmpty />}
                </button>
              </div>
              <div className='styles'>
                {styles.map( (style, index) => {
                  return <OverviewStyle currentStyle={styles[index]} styleIndex={index} setStyleIndex={setStyleIndex} key={index}/>
                })}
              </div>
              <div className='description'>
                <h2>{props.currentProduct.slogan}</h2>
                <h3>{props.currentProduct.description}</h3>
              </div>
              <div className='features'>
                <h3>{props.currentProduct.features ? <ul>{props.currentProduct.features.map((feature, index) => {
                  return <li key={index}><h3>{feature.feature} - {feature.value}</h3></li>
                })}</ul> : 'no features available'}</h3>
              </div>

            </div>
            <Suspense fallback={<div>is Loading...</div>}>
            <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
            <YourOutfit currentProduct={props.currentProduct} outfits={outfits} styleIndex={styleIndex}onUpdateOutfits={updateOutfits.bind(this)} fetchNewProduct={props.fetchNewProduct.bind(this)} deleteFromOutfitList={deleteFromOutfitList.bind(this)}/>
            </Suspense>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
};

export default Overview;