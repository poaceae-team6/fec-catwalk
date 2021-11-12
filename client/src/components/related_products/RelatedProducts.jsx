import React, { useState, useContext, useEffect, useRef } from 'react';
import RelatedProductsItem from './RelatedProductsItem.jsx';
import ProductComparisonModal from './ProductComparisonModal.jsx';
import { ThemeContext } from '../ThemeContext.js';
import { MdArrowForwardIos, MdOutlineFitScreen } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import useOutsideClick from '../useOutsideClick.js';
import axios from 'axios';

const RelatedProducts = (props) => {

  const [relatedProducts, setRelatedProducts] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLength, setScrollLength] = useState(500);

  const [productData, setProductData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  useEffect(() => {
    fetchRelatedProducts();
    // cleanup/reset state after unmount
    return () => {
      setRelatedProducts(null);
    }
  }, [])

  const fetchRelatedProducts = () => {
    axios.get(`/products/${props.currentProduct.id}/related`)
      .then(res => {
        setRelatedProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const slide = (direction) => {
    let element = document.getElementById('products-slide');
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

  const handleModalClick = (clickedProductData) => {
    setProductData(clickedProductData);
    setShowModal(true);
  }

  useOutsideClick(ref, () => {
    if (showModal) {
      setShowModal(false);
    }
  });


  if (relatedProducts === null) {
    return '';
  } else {
    return (
      <ThemeContext.Consumer>
        {darkMode => (
          <div className='products-container'>
            <h2 className='list-title' style={darkMode ? {color: '#f3f3f3'} : {}}>RELATED PRODUCTS</h2>
            <div ref={ref}>
              {showModal && productData ? <ProductComparisonModal currentProduct={props.currentProduct} comparedProduct={productData}/> : null}
            </div>
            <div className='scroll-container'>
              <button className='arrow' aria-label="Justify" onClick={handleLeftArrow.bind(this)}>
                {scrollPosition > 0 ? <MdArrowBackIos onClick={handleLeftArrow.bind(this)}/> : ''}
              </button>
              <div className='horizontal-slide' id='products-slide'>
                {relatedProducts.map( (productId, index) => {
                  return <RelatedProductsItem productId={productId} fetchNewProduct={props.fetchNewProduct.bind(this)} currentProduct={props.currentProduct} key={index} handleModalClick={handleModalClick}/>
                })}
              </div>
              <button className='arrow' aria-label="Justify" onClick={handleRightArrow.bind(this)}>
                {relatedProducts.length > 4 && scrollPosition < scrollLength ? <MdArrowForwardIos onClick={handleRightArrow.bind(this)}/> : ''}
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default RelatedProducts;