/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Error from './Error.jsx';
import axios from 'axios';
import { ThemeContext } from '../ThemeContext.js';
import Track from '../TrackerHOC/Track.js';

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

  const refresh = () => {
    props.getData();
  };

  //handle upload image

  const isImage = (img) => {
    // validat img
    let allowed = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowed.exec(img)) {
      return false;
    } else {
      return true;
    }
  };

  const onImageChange = (e) => {
    let images = e.target.files;
    let length = images.length;
    let results = [];

    if (length > 5) {
      alert('You have reached max of 5 images');

    } else {
      for (let i = 0; i < length; i++) {

        if (!isImage(images[i].name)) {
          alert('invalid file type');
          break;
        } else {
          let img = URL.createObjectURL(images[i]);
          results.push(img);
        }
      }

      setImg(results);
    }

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
    <ThemeContext.Consumer>
      {darkMode => (
         <div className='popup-modal' >
         <div className={darkMode ? 'popup-inner-modal-dark' : 'popup-inner-modal'} >
           <div>
             <button className='close-btn' onClick={props.close}>X</button>
           </div>
           <div className='modal-title'>
             <p className='modal-title'>Submit Your Answer</p>
             <p className='modal-subtitle'>{props.name}: {props.question} </p>
           </div>
           <div className='modal-text'>
             <form onSubmit={handleSubmit}>
               <p>What is your nickname? *</p>
               <input onChange={nameChange} className='small-input' type='text' placeholder='Example: jack543!' />
               <p>For privacy reasons, do not use your full name or email address</p>

               <p>What is your email? *</p>
               <input onChange={emailChange} className='small-input' type='text' placeholder='Example: jack@email.com' />
               <p>For authentication reasons, you will not be emailed</p>
               <p>Your Answer *</p>
               <input onChange={answerChange} className='large-input' type='text' placeholder='your answer here...' />
               <p>Do you want to upload your pictures? (up to 5) </p>
               <input onChange={onImageChange} type='file' name='upload image' multiple />
               {image && image.map((img, index) => <img style={{ height: '40px', margin: '5px' }} key={index} src={img} alt=''/>)}
               {state.error && <Error msg={state.msg} />}
               <p></p>
               <Track eventName={`User Submits an Answer`} module='Answers'>
                <input className={darkMode ? 'click-btn-dark' : 'click-btn'} type='submit' value='submit' />
               </Track>
               <button className={darkMode ? 'click-btn-dark' : 'click-btn'} onClick={props.close}>cancel</button>
             </form>

           </div>
         </div>
       </div>
      )}

    </ThemeContext.Consumer>
  )
}

export default AddAnswerModal;