/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';
import axios from 'axios';

// Theme Toggle Button Icons
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import Overview from './overview/Overview.jsx';
import QuestionList from './questions/QuestionList.jsx';
import ReviewMain from './review/reviewmain/ReviewMain.jsx';

// const url = 'http://localhost:3000';
const url = 'http://127.0.0.1:3000';

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

    axios.get(`${url}/products`)
      .then(res => {
        setCurrentProduct(res.data[0]);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const fetchNewProduct = (productId) => {
    setCurrentProduct(null);
    axios.get(`${url}/products/${productId}`)
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
    setDarkMode(darkMode => !darkMode);
  }

  if (currentProduct === null) {
    return <p>Please wait...Loading...</p>
  } else {
    return (
      <ThemeContext.Provider value={darkMode}>
        <div id={darkMode ? 'bg-dark' : ''}>
          <div className='theme-setting'>


            <h3>{darkMode ? "Dark Mode" : "Light Mode"}</h3>
            <button id='toggle-btn' onClick={toggleMode.bind(this)}>
              {darkMode ? <BsToggleOn /> : <BsToggleOff />}
            </button>
            <h3 className={darkMode ? 'font-dark' : ''}>
              dark mode will turn this red
            </h3>
            <ReviewMain productId={currentProduct.id} />
          </div>
          {/* <Overview currentProduct={currentProduct} fetchNewProduct={fetchNewProduct.bind(this)}/> */}
          {/* <QuestionList id={currentProduct.id} name={currentProduct.name}/> */}
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;