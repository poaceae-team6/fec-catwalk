import React, { useState } from 'react';
import Error from './Error.jsx';
import axios from 'axios';

const AddQuestionModal = (props) => {

  const [state, setState] = useState ({
    name: '',
    email: '',
    question: '',
    error: false,
    msg: '',
  });

  const productId = props.id;

  // style
  let modalBg = {
    width: '700px',
    height: '700px',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  let modalContianer = {
    width: '700px',
    height: '800px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    border: 'solid 1px',
  }

  let xButton = {
    float: 'right',
  }

  let input = {
    width: '500px',
    height: '30px',
    fontSize: '18px'
  }
  let body = {
    width: '500px',
    height: '150px',
    fontSize: '18px',
  }

  // handle input changes

  const handleNameInput = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const handleEmailInput = (e) => {
    setState({
      ...state,
      email: e.target.value,
    })


  };

  const handleQInput = (e) => {
    setState({
      ...state,
      question: e.target.value,
    });

  };

  // validation for the input

  const isValid = (property) => {
    let result = false;

    if (property === 'email') {
      if(state[property].indexOf('@') !== -1 && state[property].length > 5 && state[property].indexOf('.com') !== -1) {
        result = true;
      }
    } else if (state[property].length !== 0) {
      result = true;
    }

    return result;
  };

  // handle submit

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = isValid('name');
    let email = isValid('email');
    let question = isValid('question');
    let error = [];

    if (!name) {
     error.push('Name');

    }
    if (!email) {
      error.push('email');
    }
    if (!question) {
      error.push('question body')
    }

    if (name && email && question) {
      //submit ok add question
      // let questionData = {
      //   question_body: state.question,
      //   asker_name: state.name,
      //   answers: [],
      //   question_helpfulness: 0,
      //   reported: false
      // };

      // props.addQ(questionData);
      // send this data to API
      let postObj = {
        body: state.question,
        name: state.name,
        email: state.email,
        product_id: props.id
      }

      axios.post(`/questions/${productId}`, postObj)
      .then(res => console.log('add question ok', res))
      .catch(err => console.log('add question err', err));
      // close the window
      props.close ();
    } else {
      setState({
        ...state,
        error: true,
        msg: error,
      });
    }
  }


  return (
    <div className='modalBg' style={modalBg}>
      <div className='modalContianer' style={modalContianer}>
        <div>
          <button style={xButton} onClick={props.close}>X</button>
        </div>
      <div className='title'>
        <h2>Ask Your Question</h2>
        <h4>Question about {props.name}</h4>
        </div>
      <div className='body'>
        <form onSubmit={handleSubmit}>
          <p>What is your nickname?</p>
          <input onChange={handleNameInput} style={input} type='text' placeholder='Example: jackson11!'/>
          <p>For privacy reasons, do not use your full name or email address</p>
          <br></br>
          <p>Your email</p>
          <input onChange={handleEmailInput} style={input} type='text' placeholder='Why did you like the product or not?'/>
          <p>For authentication reasons, you will not be emailed</p>
          <br></br>
          <p>Your Question</p>
          <input onChange={handleQInput} type='text' placeholder='question body' style={body}/>
          <br></br>
          <br></br>
          <input type='submit' value='submit'/>
          <input onClick={props.close} type='submit' value='cancel'/>
          <br></br>
          {state.error && <Error msg={state.msg} />}
        </form>
      </div>
      </div>
    </div>
  );
};


export default AddQuestionModal;