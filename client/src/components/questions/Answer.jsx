import React from 'react';
import moment from 'moment';

const Answer = (props) => {

  //format the date
  let date = moment(props.answer.date).format('LL');

  if (props.answer.photos.length === 0) {

    return (
      <div>
        <p> A: {props.answer.body}</p>
        <span> by User {props.answer.answerer_name}, {date}</span>  |  <span>helpful?  Yes ({props.answer.helpfulness})</span>  |  <span>report</span>
      </div>

    )
  } else {

    return (
      <div>
        <p> A: {props.answer.body}</p>
        {props.answer.photos.map((img, index) => <img key={index} src={img} />)}
        <span> by User {props.answer.answerer_name}, {date}</span>  |  <span>helpful?  Yes ({props.answer.helpfulness})</span>  |  <span>report</span>
      </div>

    )
  }


}
export default Answer;