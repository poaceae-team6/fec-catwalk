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
  const [relatedList, setRelatedList] = useState(sampleProductIdData);
  // shared component for Overview & Outfit
  const [outfitList, setOutfitList] = useState([]);
  
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
        <RelatedProducts relatedList={relatedList}/>
        <YourOutfit outfitIdList={outfitList}/>
        <QuestionList />
        <ReviewMain />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;