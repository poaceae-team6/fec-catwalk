import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';
import Search from './Search.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import axios from 'axios';

const url = 'http://127.0.0.1:3000';

const QuestionList = (props) => {

  const [state, setState] = useState(
    {
      data: [],
      length: 4,
      modalShow: false,
      storage: [],
    }
  )

  const productId = props.id;
  const questions = state.data;

  const getData = () => {
    // send request to server asking API data
    axios.get(`${url}/questions/${productId}`, {params: {id: productId}})
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
      console.log('should retore')
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
    setState({
      ...state,
      modalShow: true,
    });
  };
  // close add a question
  const closeAddQuestion = () => {
    setState({
      ...state,
      modalShow: false,
    });
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
        <p>Questions & Answers</p>
        <Search ql={state} questions={questions} search={handleSearch}/>
        <p>No questions found. Do you want to add yours?</p>
        <button onClick={openAddQuestion}>ADD A QUESTION +</button>
        {state.modalShow && <AddQuestionModal addQ={AddQuestion} id={props.id} name={props.name} close={closeAddQuestion}/>}
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
        <p>Questions & Answers</p>
        <Search ql={state} questions={state.data} search={handleSearch}/>
        <ul style={overflow}>
          {data.map((question, index) => <QuestionItem name={props.name} key={index} question={question} />)}
        </ul>
         <button onClick={openAddQuestion}>ADD A QUESTIONS +</button>
         {state.modalShow && <AddQuestionModal addQ={AddQuestion} id={props.id} name={props.name} close={closeAddQuestion}/>}

      </div>
    );
    }

    //otherwise, there is a more questions button.

    //slice the data array to set the defaut length
    data = data.slice(0, state.length);

    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>
        <Search ql={state} questions={state.data} search={handleSearch}/>
        <ul style={overflow}>
          {data.map((question, index) => <QuestionItem name={props.name} key={index} question={question} />)}
        </ul>
        <button onClick={handleMoreQuestionsClick}>MORE ANSWERED QUESTIONS</button>  |  <button onClick={openAddQuestion}>ADD A QUESTIONS +</button>
        {state.modalShow && <AddQuestionModal addQ={AddQuestion} id={props.id} name={props.name} close={closeAddQuestion}/>}
      </div>
    );
  }
}


export default QuestionList;