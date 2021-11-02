import React, { useState } from 'react';

const Search = (props) => {

  const [state, setState] = useState({
    query: '',
  });

  const handleInput = (e) => {
    setState({...state, query: e.target.value});
  }

  const handleSearch = (e) => {
    e.preventDefault();

    let term = state.query;

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

  }

  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleInput} type='text' placeholder='Have a question? Search for answers…'/>
      <input type='submit' value='search' />
    </form>
  )
}

export default Search;