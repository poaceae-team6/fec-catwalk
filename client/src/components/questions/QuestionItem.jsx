import React, { useState } from 'react';
import Answer from './Answer.jsx';

const QuestionItem = (props) => {

  const [state, setState] = useState({
    length: 2,
  });

  const handleMoreAnswers = (e) => {
    setState({ ...state, length: state.length + 2 })
  };


  let answers = Object.values(props.question.answers);

  //sort the answers by helpfulness
  const sortAnswers = (answers) => {
    let compare = (a, b) => {
      let voteA = a.helpfulness;
      let voteB = b.helpfulness;
      let comparision = 0;

      if (voteA < voteB) {
        comparision = 1;
      } else {
        comparision = -1;
      }

      return comparision;
    }
    answers.sort(compare);
  }

  sortAnswers(answers);


  if (answers.length > 2) {
    //slice the array to the correct length
    answers = answers.slice(0, state.length);

    return (
      <div>
        <p>
          Q: {props.question.question_body}
          <span>helpful? Yes ({props.question.question_helpfulness})</span>  |
          <span>Add answer</span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}
        <span onClick={handleMoreAnswers}>Load more answers</span>
      </div>

    )
  } else {
    return (
      <div>
        <p>
          Q: {props.question.question_body}
          <span>helpful? Yes ({props.question.question_helpfulness})</span>  |
          <span>Add answer</span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}

      </div>

    )
  }

}

export default QuestionItem;