import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext.js';

// Theme Toggle Button Icons
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import QuestionList from './questions/QuestionList.jsx';
import RelatedProducts from './related_products/RelatedProducts.jsx';
import YourOutfit from './related_products/YourOutfit.jsx';
import ReviewMain from './review/reviewmain/ReviewMain.jsx';

// Import sampleData for testing purposes
// Related Products
import sampleProductIdData from '../assets/related_products/sampleProductIdData.js'

const App = (props) => {

  const [currentProduct, setCurrentProduct] = useState({});
  // sample data for current product retrieved by id
  const [temp, setTemp] = useState(sampleProductIdData);
  // shared component for Overview & Outfit
  const [OutfitList, setOutfitList] = useState([]);
  
  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme.darkMode);
  
  const toggleMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
    <div>
      {darkMode ? "Dark Mode" : "Light Mode"}
      <button id='toggle-btn' onClick={toggleMode.bind(this)}>{darkMode ? <BsToggleOn /> : <BsToggleOff />}</button>
      <h1 className={darkMode ? "font-dark" : ""}> react is running </h1>
      <RelatedProducts outfitIdList={OutfitList}/>
      <YourOutfit />
      <QuestionList />
      <div id='review'>Review Goes Here</div>
      <ReviewMain />
    </div>
    </ThemeContext.Provider>
  );


}

export default App;