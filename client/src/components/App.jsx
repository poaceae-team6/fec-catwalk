import React from 'react';
import QuestionList from './questions/QuestionList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

      currentProduct: {},

    };
  }

  render () {

    return (
      <div id='app'>
        <h1> react is running </h1>
        <div className='overview-container'>Overview Goes Here</div>
        <div>Related items Goes Here</div>
        <QuestionList />
        <div>Review Goes Here</div>
      </div>
    )
  }
}

export default App;