import React from 'react';
import Answer from './Answer.jsx';

const QuestionItem = (props) => {

 let answers = Object.values (props.question.answers);


  return (
    <div>
      <p>
        Q: {props.question.question_body}  <span>helpful? Yes ({props.question.question_helpfulness})</span>  |  <span>Add answer</span>
        </p>
      {answers.map((answer, index) =>  <Answer key={index} answer={answer}/>)}

    </div>

  )
}

export default QuestionItem;