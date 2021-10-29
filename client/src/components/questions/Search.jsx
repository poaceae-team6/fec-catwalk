import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {

    return (
      <form>
        <input type='text' />
        <input type='submit' value='search' />
      </form>
    )
  }
}

export default Search;