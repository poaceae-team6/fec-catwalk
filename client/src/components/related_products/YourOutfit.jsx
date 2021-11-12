import React, {useState, useContext, useEffect} from 'react';
import YourOutfitItem from './YourOutfitItem.jsx';
import YourOutfitItemDefault from './YourOutfitItemDefault.jsx';
import { ThemeContext } from '../ThemeContext.js';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

const YourOutfit = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLength, setScrollLength] = useState(500);
  const slide = (direction) => {
    let element = document.getElementById('outfit-slide');
    setScrollLength(element.scrollHeight);
    if (direction === 'right') {
      setScrollPosition(element.scrollLeft += 800);
    } else {
      setScrollPosition(element.scrollLeft -= 680);
    }
  }
  const handleLeftArrow = () => {
    slide('left');
  }
  const handleRightArrow = () => {
    slide('right');
  }
  return (
    <div className='outfit-container'>
      <h2 className='list-title'>YOUR OUTFIT</h2>
      <div className='scroll-container'>
        {scrollPosition > 0 ? 
          <button className='arrow' aria-label="Justify" onClick={handleLeftArrow.bind(this)}>
            <MdArrowBackIos onClick={handleLeftArrow.bind(this)}/> 
          </button> : 
        ''}
        <div className='horizontal-slide' id='outfit-slide'>
          <YourOutfitItemDefault currentProduct={props.currentProduct} outfits={props.outfits} updateOutfits={props.onUpdateOutfits} styleIndex={props.styleIndex}/>
          {props.outfits.map( (outfit, index) => {
            return <YourOutfitItem outfit={outfit} key={outfit.id + '' + outfit.style} fetchNewProduct={props.fetchNewProduct.bind(this)} deleteFromOutfitList={props.deleteFromOutfitList.bind(this)}/>
          })}
        </div>
          {props.outfits.length > 3 && scrollPosition < scrollLength ? 
          <button className='arrow' aria-label="Justify" onClick={handleRightArrow.bind(this)}>
            <MdArrowForwardIos onClick={handleRightArrow.bind(this)}/>
          </button>  : 
        ''}
      </div>
    </div>
  );
}

export default YourOutfit;