import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RelatedProducts from '../related_products/RelatedProducts.jsx';
import YourOutfit from '../related_products/YourOutfit.jsx';
import OverviewStyle from './OverviewStyle.jsx';

var outfitList = [];
  // product object (category, name, description, 'features')
  // 'styles' object.results[0] (image url - "photos[0].thumbnail_url" and price - "original_price", "sale_price")
const url = 'http://127.0.0.1:3000';

const Overview = (props) => {

  const [styles, setStyles] = useState(null);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [outfits, setOutfits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    setIsLoading(true);
    axios.get(`${url}/products/${props.currentProduct.id}/styles`)
    .then(res => {
      setStyles(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const updateOutfitList = (copyArray) => {
    outfitList = copyArray;
    setOutfits(copyArray);
  }

  if (styles===null) {
    return (<h3>isLoading...</h3>)
  } else {
    return (
      <div className='overview-container'>
      <h2>{styles[currentStyleIndex].name}</h2>
      {styles.map( (style, index) => {
        return <OverviewStyle setCurrentStyleIndex={setCurrentStyleIndex.bind(this)} currentStyle={styles[currentStyleIndex]} key={index}/>
      })}
      <RelatedProducts currentProduct={props.currentProduct} fetchNewProduct={props.fetchNewProduct.bind(this)}/>
      <YourOutfit currentProduct={props.currentProduct} currentStyle={styles[currentStyleIndex]}/>
    </div>
    )
  }
  // return content;
};

export default Overview;