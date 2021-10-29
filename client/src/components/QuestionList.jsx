import React from 'react';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);

  }

  getData () {
    // send request to server asking API data
  }

  render () {
    return (
      <div className='questions'>
        <h3>Questions & Answers</h3>
        QuestionList goes here
      </div>
    )
  }
}

export default QuestionList;