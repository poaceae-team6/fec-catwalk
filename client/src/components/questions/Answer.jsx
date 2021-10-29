import React from 'react';

const Answer = (props) => {

  return (
    <div>
      <p> A: {props.answer.body}</p>
      <span> by User{props.answer.id}</span>  |  <span>helpful?  Yes ({props.answer.helpfulness})</span>  |  <span>report</span>
    </div>

  )
}
export default Answer;