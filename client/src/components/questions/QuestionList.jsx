import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';
import Search from './Search.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import Track from '../TrackerHOC/Track.js';
import axios from 'axios';

const QuestionList = (props) => {

  const [state, setState] = useState(
    {
      data: [],
      length: 2,
      storage: [],
    }
  )

  const [showModal, setModal] = useState(false)

  const productId = props.id;
  const questions = state.data;

  const getData = () => {
    // send request to server asking API data
    axios.get(`/questions/${productId}`, {params: {id: productId}})
    .then(res => {
      setState({
        ...state,
        data: res.data.results,
        storage: res.data.results,
      })
    })
    .catch(err => console.log('Question List axios error', err))
  };

  useEffect(getData, []);

  const handleSearch = (term) => {

    if (term.length > 2) {

      setState({
        ...state,
        data: state.data.filter((question) => {
          if (term === '') {
            return question;
          } else if (question.question_body.toLowerCase().includes(term.toLowerCase())) {
            return question;
          }
        }),
      })
    } else {

      setState({
        ...state,
        data: state.storage
      })
    }
  }

  const sortQuestions = (questions) => {

    let compare = (a, b) => {
      let voteA = a.question_helpfulness;
      let voteB = b.question_helpfulness;

      let comparision = 0;
      if (voteA < voteB) {
        comparision = 1;
      } else {
        comparision = -1;
      }
      return comparision;
    }

    return questions.sort(compare);

  };


  // open Add a question
  const openAddQuestion = () => {
    setModal(true);
  };
  // close add a question
  const closeAddQuestion = () => {
    setModal(false);
  };

  const closeModal = () => {
    closeAddQuestion ();
  };

  // add a question to the list
  const AddQuestion = (questionObj) => {
    let questions = state.data;
    questions.push(questionObj);

    setState({
      ...state,
      data: questions,
    })
  }

  const handleMoreQuestionsClick = () => {
    setState({...state, length: state.length + 2} );
  };


  //overflow style
  let overflow = {
    overflow: 'scroll',
    maxHeight: '800px'
  }

  //only 4 questions will be visiable by default
  let data = state.data;

  // if no question, just display add question
  if (state.data.length === 0) {
    return (
      <div className='questions-container'>
        <h2 className='list-title'>QUESTIONS & ANSWERS</h2>
        <Search ql={state} questions={questions} search={handleSearch}/>
        <p>No questions found. Do you want to add yours?</p>
        <span className='qa-btn'>
        <Track eventName={`User wants to add a question for ${productId}`} module='Questions'>
          <button className={props.darkMode ? 'click-btn-dark' : 'click-btn'} onClick={openAddQuestion}>ADD A QUESTION +</button>
        </Track>
        </span>
        {showModal && <AddQuestionModal getData={getData} addQ={AddQuestion} id={props.id} name={props.name} close={closeModal}/>}
      </div>
    )
  } else {
    // if there are questions
    // need to sort by helpfuness
    sortQuestions(data);

    //when no more questions to show, do not display more questions
    if (state.length >= state.data.length) {
      data = data.slice(0, state.length);

    return (
      <div className='questions-container'>
        <h2 className='list-title'>QUESTIONS & ANSWERS</h2>
        <Search ql={state} questions={state.data} search={handleSearch}/>
        <div style={overflow}>
          {data.map((question, index) => <QuestionItem getData={getData} name={props.name} key={index} question={question} />)}
        </div>
        <span className='qa-btn'>
        <Track eventName={`User wants to add a question for ${productId}`} module='Questions'>
         <button className={props.darkMode ? 'click-btn-dark' : 'click-btn'} onClick={openAddQuestion}>ADD A QUESTIONS +</button>
        </Track>
         </span>
         {showModal && <AddQuestionModal getData={getData} addQ={AddQuestion} id={props.id} name={props.name} close={closeModal}/>}

      </div>
    );
    }

    //otherwise, there is a more questions button.

    //slice the data array to set the defaut length
    data = data.slice(0, state.length);

    return (
      <div className='questions-container'>
        <h2 className='list-title'>QUESTIONS & ANSWERS</h2>
        <Search ql={state} questions={state.data} search={handleSearch}/>
        <div style={overflow}>
          {data.map((question, index) => <QuestionItem getData={getData} name={props.name} key={index} question={question} />)}
        </div>
        <span className='qa-btn'>
        <Track eventName={`User wants to load more answered questions for ${productId}`} module='Questions'>
          <button className={props.darkMode ? 'click-btn-dark' : 'click-btn'} onClick={handleMoreQuestionsClick}>MORE ANSWERED QUESTIONS</button>    <button className={props.darkMode ? 'click-btn-dark' : 'click-btn'} onClick={openAddQuestion}>ADD A QUESTIONS +</button>
        </Track>
        </span>
        {showModal && <AddQuestionModal getData={getData} addQ={AddQuestion} id={props.id} name={props.name} close={closeModal}/>}
      </div>
    );
  }
}


export default QuestionList;