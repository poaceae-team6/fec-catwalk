import React, { useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import Search from './Search.jsx';


const QuestionList = (props) => {

  const [state, setState] = useState(
    {
      data: {
        "product_id": "40347",
        "results": [
            {
                "question_id": 329021,
                "question_body": "Why is this product cheaper here than other sites?",
                "question_date": "2017-08-12T00:00:00.000Z",
                "asker_name": "toofast",
                "question_helpfulness": 7,
                "reported": false,
                "answers": {
                    "3073745": {
                        "id": 3073745,
                        "body": "This product is overstocked here!",
                        "date": "2017-09-12T00:00:00.000Z",
                        "answerer_name": "toofast",
                        "helpfulness": 5,
                        "photos": []
                    },
                    "3989841": {
                        "id": 3989841,
                        "body": "Its made in china.",
                        "date": "2021-09-20T00:00:00.000Z",
                        "answerer_name": "jack",
                        "helpfulness": 0,
                        "photos": []
                    },
                    "3990001": {
                        "id": 3990001,
                        "body": "hello",
                        "date": "2021-09-22T00:00:00.000Z",
                        "answerer_name": "Seller",
                        "helpfulness": 0,
                        "photos": []
                    },
                    "3990002": {
                        "id": 3990002,
                        "body": "hello!",
                        "date": "2021-09-22T00:00:00.000Z",
                        "answerer_name": "Seller",
                        "helpfulness": 1,
                        "photos": []
                    },
                    "3990310": {
                        "id": 3990310,
                        "body": "asdfdasfsdfas",
                        "date": "2021-09-24T00:00:00.000Z",
                        "answerer_name": "asdfdsafasdf",
                        "helpfulness": 1,
                        "photos": [
                            "https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png"
                        ]
                    },
                    "3990312": {
                        "id": 3990312,
                        "body": "asdfsafasdf",
                        "date": "2021-09-24T00:00:00.000Z",
                        "answerer_name": "asdfasdfsadf",
                        "helpfulness": 0,
                        "photos": [
                            "https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png"
                        ]
                    }
                }
            },
            {
                "question_id": 426188,
                "question_body": "are they tight?",
                "question_date": "2021-09-20T00:00:00.000Z",
                "asker_name": "randy",
                "question_helpfulness": 1,
                "reported": false,
                "answers": {}
            },
            {
                "question_id": 426008,
                "question_body": "Will this Work?",
                "question_date": "2021-09-17T00:00:00.000Z",
                "asker_name": "matthew",
                "question_helpfulness": 1,
                "reported": false,
                "answers": {}
            },
            {
                "question_id": 426007,
                "question_body": "Where are these shoes made?",
                "question_date": "2021-09-17T00:00:00.000Z",
                "asker_name": "Stud",
                "question_helpfulness": 1,
                "reported": false,
                "answers": {}
            }
        ]
    },
      length: 4,
    }
  )


  const getData = () => {
    // send request to server asking API data
  };

  const sortData = (questions) => {

    let compare = (a, b) => {
      let voteA = a.question_helpfulness;
      let voteB = b.question_helpfulness;
      console.log('A: ', a, 'B: ', b);
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

  const handleMoreQuestionsClick = (e) => {
    setState({...state, length: state.length + 2} );
  }

  //only 4 questions will be visiable by default
  let data = state.data.results;

  // if no question, just display add question
  if (data.length === 0) {
    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>

        <button>ADD A QUESTIONS +</button>
      </div>
    )
  } else {
    // if there are questions
    // need to sort by helpfuness
    sortData(data);

    //slice the data array to set the defaut length
    data = data.slice(0, state.length);

    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>
        <Search />
        <ul>
          {data.map((question, index) => <QuestionItem key={index} question={question} />)}
        </ul>
        <button onClick={handleMoreQuestionsClick}>MORE ANSWERED QUESTIONS</button>  |  <button>ADD A QUESTIONS +</button>
      </div>
    );
  }
}


export default QuestionList;