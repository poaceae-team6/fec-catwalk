/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Error from './Error.jsx';
import axios from 'axios';

const url = 'http://127.0.0.1:3000';

const AddAnswerModal = (props) => {

  const questionId = props.questionId;

  const [image, setImg] = useState(null);

  const [state, setState] = useState({
    name: '',
    email: '',
    answer: '',
    error: false,
    msg: [],
  })

  let modalBg = {
    width: '700px',
    height: '950px',
    backgroundColor: 'white',
    position: 'absolute',
    display: 'inline-block',
    left: '400px',
    zIndex: '1000'
  };

  let modalContianer = {
    width: '700px',
    height: '950px',
    backgroundColor: 'white',
    display: 'inline-block',
    padding: '25px',
    border: 'solid 1px',
  }

  let inputBox = {
    width: '500px',
    height: '30px',
    fontSize: '18px',
  }

  let answerBox = {
    width: '500px',
    height: '300px',
    fontSize: '18px',
  }

  const refresh = () => {
    props.getData();
  };

  //handle upload image
  const onImageChange = (e) => {
    let images = e.target.files;
    let length = images.length;
    let results = [];

    if (length > 5) {
      length = 5;
    }

    for (let i = 0; i < images.length; i++) {
      let img = URL.createObjectURL(images[i]);
      results.push(img);
    }

    setImg (results);
  }


  //handle input changes
  const nameChange = (e) => {
    setState({
      ...state,
      name: e.target.value
    })
  }

  const emailChange = (e) => {
    setState({
      ...state,
      email: e.target.value
    })
  }

  const answerChange = (e) => {
    setState({
      ...state,
      answer: e.target.value
    })
  }


  // validation
  const isValid = (property) => {
    let result = false;

    if (property === 'email') {
      if (state[property].indexOf('@') !== -1 && state[property].length > 5) {
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
    let answer = isValid('answer');
    let error = [];

    if (!name) {
      error.push('Name');
    }
    if (!email) {
      error.push('email');
    }
    if (!answer) {
      error.push('your answer')
    }

    if (name && email && answer) {
      //submit ok add question
      let postObj = {
        question_id: questionId,
        body: state.answer,
        name: state.name,
        email: state.email,

      };

      if (image) {
        postObj.photos = [image];
      }

      // send this data to API
      axios.post(`/questions/answers/${questionId}`, postObj)
        .then(() => {
          console.log('add answer ok');
          props.getData();
          props.close();
        })
        .catch((err) => console.log('add answer err', err));

      // close the window
      // props.close();

      // // fetch data
      // props.getData();

    } else {
      setState({
        ...state,
        error: true,
        msg: error,
      });
    }
  }

  return (
    <div className='popup-box' >
      <div className='popup-inner-box' >
        <div>
          <button style={{ float: 'right' }} onClick={props.close}>X</button>
        </div>
        <div>
          <h2>Submit Your Answer</h2>
          <h4>{props.name}: {props.question} </h4>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <p>What is your nickname? *</p>
            <input onChange={nameChange} style={inputBox} type='text' placeholder='Example: jack543!' />
            <p>For privacy reasons, do not use your full name or email address</p>

            <p>What is your email? *</p>
            <input onChange={emailChange} style={inputBox} type='text' placeholder='Example: jack@email.com' />
            <p>For authentication reasons, you will not be emailed</p>
            <p>Your Answer *</p>
            <input onChange={answerChange} style={answerBox} type='text' placeholder='your answer here...' />
            <p>Do you want to upload your pictures? (up to 5) </p>
            <input onChange={onImageChange} type='file' name='upload image' multiple/>
            {image && image.map((img, index) => <img style={{ height: '40px', margin: '5px' }} key={index} src={img} />)}
            <p></p>
            <input type='submit' value='submit' />
          </form>
          <button onClick={props.close}>cancel</button>
          {state.error && <Error msg={state.msg} />}
        </div>
      </div>
    </div>
  )
}

export default AddAnswerModal;