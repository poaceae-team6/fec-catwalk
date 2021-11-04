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
    height: '50px',
    width: '800px',
    fontSize: '20px',
  }


  return (
    <form>
      <input style={searchStyle} onChange={handleInput} type='text' placeholder='Have a question? Search for answers…'/>
    </form>
  )
}

export default Search;