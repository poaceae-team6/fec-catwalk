import React, { useState } from 'react';
import Answer from './Answer.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import axios from 'axios';


const QuestionItem = (props) => {

  const questionId = props.question.question_id;

  const [state, setState] = useState({
    length: 2,
    helpfulNum: props.question.question_helpfulness,
    vote: false,
  });

  const [modalShow, setModal] = useState(false);

  // find seller's answers
  const findSeller = (answers) => {
    let seller = [];

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answerer_name === 'Seller') {
        let pop = answers.splice(i, 1);
        seller.push(pop[0]);
        i--;
      }
    }

    // sort seller's answer by helpfulness
    sortAnswers(seller);

    for (let j = seller.length - 1; j >= 0; j--) {
      answers.unshift(seller[j]);
    }
  }

  const helpful = () => {
    // update the data in the app
    if (state.vote === false && localStorage.getItem(questionId) === null) {
      let voted = props.question.question_helpfulness += 1;
      setState({ ...state, helpfulNum: voted, vote: true });

      // then send the request to update the API
      axios.put(`/questions/helpfulness/${props.question.question_id}`, {question_id: props.question.question_id})
      .then(() => console.log('helpfulness updated'))
      .catch((err) => console.log(err));

      localStorage.setItem(questionId, true);
    }
  }

  // load more questions
  const handleMoreAnswers = () => {
    setState({ ...state, length: state.length + 2 })
  };

  // load less questions
  const handleLessAnswers = () => {
    setState({...state, length: 2})
  };

  // Add answer funciton
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  }

  // style here
  const questionBody = { fontWeight: 'bold', display:'inline-block', maxWidth:'600px' };
  const yesButton = {textDecoration: 'underline', margin: '5px', cursor: 'pointer'}


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
  // after sorting see if seller is asnwering

  findSeller(answers);


  if (answers.length > 2) {

    if (state.length >= answers.length) {
      answers = answers.slice(0, state.length);

      return (
        <div className='question'>
          {modalShow && <AddAnswerModal getData={props.getData} questionId={questionId} question={props.question.question_body} name={props.name} close={closeModal}/>}
          <p>
            <span style={questionBody}>Q: {props.question.question_body}</span>
            <span style={{float: 'right',}}>
            <span>helpful? </span> <span style={yesButton} onClick={helpful}> Yes</span> <span>({state.helpfulNum})</span>  |
            <span style={yesButton} onClick={openModal}>Add answer</span>
            </span>
          </p>
          {answers.map((answer, index) => <Answer key={index} answer={answer} questionId={questionId}/>)}
          <span className='loadMoreAnswer' onClick={handleLessAnswers}>Load Less Answers</span>
        </div>
      )
    }

    //slice the array to the correct length
    answers = answers.slice(0, state.length);

    return (
      <div className='question'>
        {modalShow && <AddAnswerModal getData={props.getData} questionId={questionId} question={props.question.question_body} name={props.name} close={closeModal}/>}
        <p>
          <span style={questionBody}>Q: {props.question.question_body}</span>
          <span style={{float: 'right',}}>
          <span>helpful? </span> <span style={yesButton} onClick={helpful}> Yes </span> <span>({state.helpfulNum})</span>  |
          <span style={yesButton} onClick={openModal}>Add answer</span>
          </span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} questionId={questionId}/>)}
        <span className='loadMoreAnswer' onClick={handleMoreAnswers}>Load More Answers</span>
      </div>
    )
  } else {
    return (
      <div className='question'>
        {modalShow && <AddAnswerModal getData={props.getData} questionId={questionId} question={props.question.question_body} name={props.name} close={closeModal}/>}
        <p>
          <span style={questionBody}>Q: {props.question.question_body}</span>
          <span style={{float: 'right',}}>
          <span>helpful? </span> <span style={yesButton} onClick={helpful}> Yes </span> <span>({state.helpfulNum})</span>  |
          <span style={yesButton} onClick={openModal}>Add answer</span>
          </span>
        </p>
        {answers.map((answer, index) => <Answer key={index} answer={answer} questionId={questionId}/>)}

      </div>

    )
  }

}

export default QuestionItem;