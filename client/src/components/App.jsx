import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';
import axios from 'axios';

// Theme Toggle Button Icons
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import Overview from './overview/Overview.jsx';
import QuestionList from './questions/QuestionList.jsx';
import ReviewMain from './review/reviewmain/ReviewMain.jsx';

const url = 'http://localhost:3000';

const App = (props) => {

  const [currentProduct, setCurrentProduct] = useState({
    "id": 40344,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
      }
    ]
  });
  // hooks version of componentDidMount
  // fetch the first product in the proucts list in DB
  // and set it as the currentProduct
  // useEffect(() => {
  //   axios.get(`${url}/products`)
  //     .then(res => {
  //       setCurrentProduct(res.data[0]);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [])

  const fetchNewProduct = (productId) => {
    axios.get(`${url}/products/${productId}`)
      .then(res => {
        setCurrentProduct(res.data);
      })
  }

  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme.darkMode);

  const toggleMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <div>
        <div className='theme-setting'>
          <h3>{darkMode ? "Dark Mode" : "Light Mode"}</h3>
          <button id='toggle-btn' onClick={toggleMode.bind(this)}>
            {darkMode ? <BsToggleOn /> : <BsToggleOff />}
          </button>
          <h3 className={darkMode ? "font-dark" : ""}>
            dark mode will turn this red
          </h3>
        </div>
        <Overview currentProduct={currentProduct} fetchNewProduct={fetchNewProduct.bind(this)}/>
        <QuestionList />
        <ReviewMain />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;