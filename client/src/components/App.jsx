import React from 'react';
import QuestionList from './QuestionList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <RelatedProducts />
      <QuestionList />
    )
  }
}

export default App;