import React, { useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import Search from './Search.jsx';


const QuestionList = (props) => {

  const [state, setState] = useState(
    {
      data: [
        {
            "question_id": 329029,
            "question_body": "What fabric is the top made of?",
            "question_date": "2019-08-18T00:00:00.000Z",
            "asker_name": "coolkid",
            "question_helpfulness": 56,
            "reported": false,
            "answers": {
                "3073786": {
                    "id": 3073786,
                    "body": "Suede",
                    "date": "2019-09-18T00:00:00.000Z",
                    "answerer_name": "warmkid",
                    "helpfulness": 5,
                    "photos": [
                        "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80"
                    ]
                },
                "3989678": {
                    "id": 3989678,
                    "body": "oh well",
                    "date": "2021-09-17T00:00:00.000Z",
                    "answerer_name": "lets",
                    "helpfulness": 0,
                    "photos": []
                },
                "3989680": {
                    "id": 3989680,
                    "body": "warmkid",
                    "date": "2021-09-17T00:00:00.000Z",
                    "answerer_name": "hmm",
                    "helpfulness": 0,
                    "photos": []
                },
                "3989681": {
                    "id": 3989681,
                    "body": "Seller Test",
                    "date": "2021-09-17T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 1,
                    "photos": []
                },
                "3989688": {
                    "id": 3989688,
                    "body": "try",
                    "date": "2021-09-17T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 4,
                    "photos": []
                },
                "3989725": {
                    "id": 3989725,
                    "body": "haha",
                    "date": "2021-09-18T00:00:00.000Z",
                    "answerer_name": "no of  your business",
                    "helpfulness": 0,
                    "photos": []
                },
                "3989747": {
                    "id": 3989747,
                    "body": "yes",
                    "date": "2021-09-18T00:00:00.000Z",
                    "answerer_name": "maple",
                    "helpfulness": 0,
                    "photos": []
                },
                "3989989": {
                    "id": 3989989,
                    "body": "Why is it different without seller",
                    "date": "2021-09-21T00:00:00.000Z",
                    "answerer_name": "Matthew",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 425954,
            "question_body": "How accurate is it to the photo?",
            "question_date": "2021-09-16T00:00:00.000Z",
            "asker_name": "Cora",
            "question_helpfulness": 10,
            "reported": false,
            "answers": {
                "3989782": {
                    "id": 3989782,
                    "body": "im the seller",
                    "date": "2021-09-19T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 8,
                    "photos": []
                },
                "3989786": {
                    "id": 3989786,
                    "body": "asdffdsa",
                    "date": "2021-09-19T00:00:00.000Z",
                    "answerer_name": "asdffdsa",
                    "helpfulness": 1,
                    "photos": []
                },
                "3989856": {
                    "id": 3989856,
                    "body": "sef",
                    "date": "2021-09-20T00:00:00.000Z",
                    "answerer_name": "sef",
                    "helpfulness": 0,
                    "photos": []
                },
                "3990287": {
                    "id": 3990287,
                    "body": "Sounds great",
                    "date": "2021-09-24T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 2,
                    "photos": [
                        "https://www.linkpicture.com/q/pngaaa.com-4065275_1.png"
                    ]
                }
            }
        },
        {
            "question_id": 426014,
            "question_body": "how a",
            "question_date": "2021-09-17T00:00:00.000Z",
            "asker_name": "curate",
            "question_helpfulness": 5,
            "reported": false,
            "answers": {
                "3989991": {
                    "id": 3989991,
                    "body": "hmmmm",
                    "date": "2021-09-21T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        }
    ],
      length: 4,
      display: [],
    }
  )


  const getData = () => {
    // send request to server asking API data
  };

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

  const handleMoreQuestionsClick = () => {
    setState({...state, length: state.length + 2} );
  }

  //only 4 questions will be visiable by default
  let data = state.data;

  // if no question, just display add question
  if (state.data.length === 0) {
    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>

        <button>ADD A QUESTION +</button>
      </div>
    )
  } else {
    // if there are questions
    // need to sort by helpfuness
    sortQuestions(data);

    //slice the data array to set the defaut length
    data = data.slice(0, state.length);

    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>
        <Search questions={state.data} setQuestions={setState}/>
        <ul>
          {data.map((question, index) => <QuestionItem key={index} question={question} />)}
        </ul>
        <button onClick={handleMoreQuestionsClick}>MORE ANSWERED QUESTIONS</button>  |  <button>ADD A QUESTIONS +</button>
      </div>
    );
  }
}


export default QuestionList;