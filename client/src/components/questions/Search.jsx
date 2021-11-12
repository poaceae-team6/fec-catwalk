/* eslint-disable no-unused-vars */
import React from 'react';

const Search = (props) => {

  // handle input changes to filter search
  const handleInput = (e) => {

    let term = e.target.value;
    props.search(term);

  }

  // styles
  const searchStyle = {
    height: '40px',
    width: '1000px',
    fontSize: '20px',
  }


  return (
    <div className='search'>

      <input className='searchStyle' onChange={handleInput} type='text' placeholder='Have a question? Search for answers…'/>

    </div>
  )
}

export default Search;