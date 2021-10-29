import React from 'react';

const QuestionItem = (props) => {

  return (
    <div>
      <p>Q: {props.question.question_body}</p>
      <p>A: Answers goes here</p>
    </div>

  )
}

export default QuestionItem;