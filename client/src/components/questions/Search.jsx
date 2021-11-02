import React, { useState } from 'react';

const Search = (props) => {

  const [state, setState] = useState({
    currentQ: props.questions,
  });


  // handle input changes to filter search
  const handleInput = (e) => {

    let term = e.target.value;

    if (term.length > 2) {

      props.setQuestions({
        ...state,
        data: props.questions.filter((question) => {
          if (term === '') {
            return question;
          } else if (question.question_body.toLowerCase().includes(term.toLowerCase())) {
            return question;
          }
        }),
      })
    } else {
      props.setQuestions({
        ...state,
        data: state.currentQ
      })
    }
  }

  // styles
  const searchStyle = {
    height: '50px',
    width: '800px',
    fontSize: '20px',
  }


  return (
    <form>
      <input style={searchStyle} onChange={handleInput} type='text' placeholder='Have a question? Search for answers…'/>
    </form>
  )
}

export default Search;