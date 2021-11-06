import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

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

      // API call
      let id = props.answer.id;
      axios.put(`/questions/report/answers/${id}`, {answer_id: id})
      .then(() => {console.log('you report this answer')})
      .catch(err => console.log(err));

    }
  };

  // handle answer helpful click
  const handleHelpful = () => {
    const id = props.answer.id;

    if(state.vote === false && localStorage.getItem(id) === null) {
      setState({
        ...state,
        helpfulNum: props.answer.helpfulness += 1,
        vote: true,
      })

      //calls the API for the update
      axios.put(`/questions/helpfulness/answers/${id}`, {answer_id: id})
      .then(() => {console.log('you find this answer helpful')})
      .catch(err => console.log(err));

      localStorage.setItem(id, true);
    } else {
      console.log ('you voted')
    }
  };

 //overflow style
 let overflow = {
  overflow: 'scroll',
  maxHeight: '300px'
}
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
      <div style={overflow}>
        <p>
           <span style={boldA}>A: </span>{props.answer.body}
        </p>
        <span> by User</span> <span style={bold}> {props.answer.answerer_name}</span><span>, {date}</span>  |  <span>helpful?</span> <span onClick={handleHelpful}> Yes ({state.helpfulNum})</span>  |  <span onClick={handleReport}>{state.reportDisplay}</span>
      </div>

    )
  } else {

    return (
      <div style={overflow}>
        <p> A: {props.answer.body}</p>
        {props.answer.photos.map((img, index) => <img key={index} src={img} style={{height: '50px', width: '50px'}}/>)}
        <br></br>
        <span> by User </span> <span style={bold}>{props.answer.answerer_name}</span> <span>, {date}</span>  |  <span>helpful?</span>  <span onClick={handleHelpful}>Yes ({state.helpfulNum})</span>  |  <span onClick={handleReport}>{state.reportDisplay}</span>
      </div>

    )
  }


}
export default Answer;