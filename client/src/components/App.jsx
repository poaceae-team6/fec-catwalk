/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, lazy, Suspense} from 'react';
import { ThemeContext } from './ThemeContext.js';
import axios from 'axios';


// Theme Toggle Button Icons
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import Overview from './overview/Overview.jsx';
// import QuestionList from './questions/QuestionList.jsx';
// import ReviewMain from './review/reviewmain/ReviewMain.jsx';



const QuestionList = lazy(() => import('./questions/QuestionList.jsx'));
const ReviewMain = lazy(() => import('./review/reviewmain/ReviewMain.jsx'));

const App = (props) => {

  const [currentProduct, setCurrentProduct] = useState(null);
  // hooks version of componentDidMount
  // fetch the first product in the proucts list in DB
  // and set it as the currentProduct
  useEffect(() => {

    // get the outfit data from localStorage
    localStorage.getItem('outfits');
    const hasOutfitsData = localStorage.getItem('outfits');
    if (hasOutfitsData === null) {
      localStorage.setItem('outfits', JSON.stringify([]));
    }

    axios.get(`/products`)
      .then(res => {
        setCurrentProduct(res.data[0]);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const fetchNewProduct = (productId) => {
    setCurrentProduct(null);
    axios.get(`/products/${productId}`)
      .then(res => {
        setCurrentProduct(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme.darkMode);

  const toggleMode = () => {
    if (!darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    setDarkMode(darkMode => !darkMode);
  }

  if (currentProduct === null) {
    return (
      <div className='app-loading'>
        <h3>Team Poaceae</h3>
      </div>
    );
  } else {
    return (
      <ThemeContext.Provider value={darkMode}>
        <div>
          <div className="logo" style={darkMode ? {backgroundColor: '#3E6765'} : {}}>
            <img src='./img/poaceae-logo.webp' alt='poaceae-company-logo' style={darkMode ? {filter: 'invert(99%) sepia(60%) saturate(30%) hue-rotate(60deg) brightness(130%) contrast(86%)'} : {}}/>
          </div>
          <div className='theme-setting'>
            <h3 style={darkMode ? {color: '#f3f3f3'} : {}}>{darkMode ? "Dark Mode" : "Light Mode"}</h3>
            <button id='toggle-btn' style={darkMode ? {color: '#f3f3f3'} : {}} onClick={toggleMode.bind(this)} aria-label="Right Align">
              {darkMode ? <BsToggleOn /> : <BsToggleOff />}
            </button>
          </div>
          <div className="announce-container">
            <h3 style={darkMode ? {color: '#d8e1d5'} : {}}>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong> - NEW PRODUCT HIGHLIGHT</h3>
          </div>
          <Overview currentProduct={currentProduct} fetchNewProduct={fetchNewProduct.bind(this)}/>
          <Suspense fallback={<div>is Loading...</div>}>
          <QuestionList id={currentProduct.id} name={currentProduct.name}/>
          <ReviewMain darkMode={darkMode} productId={currentProduct.id} />
          </Suspense>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;