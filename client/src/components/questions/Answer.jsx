import React, { useState } from 'react';
import moment from 'moment';

const Answer = (props) => {

  const [state, setState] = useState({
    helpfulNum: props.answer.helpfulness,
    vote: false,
    report: false,
    reportDisplay: 'report',
  });

  //format the date
  let date = moment(props.answer.date).format('LL');

  // handle report
  const handleReport = () => {
    if (state.report === false) {
      setState({
        ...state,
        report: true,
        reportDisplay: 'reported'
      });
    }
  };

  // handle answer helpful click
  const handleHelpful = () => {

    if(state.vote === false) {
      setState({
        ...state,
        helpfulNum: props.answer.helpfulness += 1,
        vote: true,
      })

      //calls the API for the update

    }
  };


  // bold the A in the answer
  let boldA = {
    fontWeight: 'bold'
  };

  // conditional bold the seller username
  let bold = {
   fontWeight: 'normal'
  };

  if(props.answer.answerer_name === 'Seller') {
    bold.fontWeight = 'bold';
  }


  if (props.answer.photos.length === 0) {

    return (
      <div>
        <p>
           <span style={boldA}>A: </span>{props.answer.body}
        </p>
        <span> by User</span> <span style={bold}> {props.answer.answerer_name}</span><span>, {date}</span>  |  <span>helpful?</span> <span onClick={handleHelpful}> Yes ({state.helpfulNum})</span>  |  <span onClick={handleReport}>{state.reportDisplay}</span>
      </div>

    )
  } else {

    return (
      <div>
        <p> A: {props.answer.body}</p>
        {/* {props.answer.photos.map((img, index) => <img key={index} src={img} />)} */}
        <span> by User </span> <span style={bold}>{props.answer.answerer_name}</span> <span>, {date}</span>  |  <span>helpful?</span>  <span onClick={handleHelpful}>Yes ({state.helpfulNum})</span>  |  <span onClick={handleReport}>{state.reportDisplay}</span>
      </div>

    )
  }


}
export default Answer;