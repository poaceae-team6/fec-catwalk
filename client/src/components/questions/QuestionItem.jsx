import React from 'react';
import Answer from './Answer.jsx';

const QuestionItem = (props) => {

 let answers = Object.values (props.question.answers);

 //sort the answers by helpfulness

 //slice the array to the correct length
 answers = answers.slice(0, 2);



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