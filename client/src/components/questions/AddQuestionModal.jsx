import React, { useState } from 'react';

const AddQuestionModal = (props) => {

  let modalBg = {
    width: '700px',
    height: '700px',
    backgroundColor: 'white',
    position: 'fix',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  let modalContianer = {
    width: '700px',
    height: '800px',
    borderRadius: '12px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    border: 'solid'
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

  return (
    <div className='modalBg' style={modalBg}>
      <div className='modalContianer' style={modalContianer}>
        <div>
          <button onClick={props.close}>X</button>
        </div>
      <div className='title'>
        <h2>Ask Your Question</h2>
        <h4>Question about [product Name]</h4>
        </div>
      <div className='body'>
        <form>
          <p>What is your nickname?</p>
          <input style={input} type='text' placeholder='Example: jackson11!'/>
          <p>For privacy reasons, do not use your full name or email address</p>
          <br></br>
          <p>Your email</p>
          <input style={input} type='text' placeholder='Why did you like the product or not?'/>
          <p>For authentication reasons, you will not be emailed</p>
          <br></br>
          <p>Your Question</p>
          <input type='text' placeholder='question body' style={body}/>
          <br></br>
          <br></br>
          <input type='submit' value='submit'/>
          <input onClick={props.close} type='submit' value='cancel'/>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;