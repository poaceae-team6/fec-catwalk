import React from 'react';
import QuestionList from './QuestionList.jsx';
import ReviewMain from './review/ReviewMain.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div id='app'>
        <h1> react is running </h1>
        <div>Overview Goes Here</div>
        <div>Related items Goes Here</div>
        <QuestionList />
        <div>Review Goes Here</div>
        <ReviewMain />
      </div>
    )
  }
}

export default App;