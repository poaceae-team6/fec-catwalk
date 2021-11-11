/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';

import QuestionItem from '../../../questions/QuestionItem.jsx';
import Answer from '../../../questions/Answer.jsx';
import AddQuestionModal from '../../../questions/AddQuestionModal.jsx';
import AddAnswerModal from '../../../questions/AddAnswerModal.jsx';
import Search from '../../../questions/Search.jsx';
import QuestionList from '../../../questions/QuestionList.jsx';

const sample = {
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
};

describe ('Question List', () => {
  it('should render the list', () => {
    shallow(<QuestionList />);
  });
});

describe ('question item', () => {
  it('should render one question', () => {
    let data = sample.results[0];

    const question = shallow(<QuestionItem question={data} />);

    expect(question.contains(data.question_body)).toBe(true);
  });

  it('should render helpfulness', () => {
    let data = sample.results[0];

    const question = shallow(<QuestionItem question={data} />);

    expect(question.contains(data.question_helpfulness)).toBe(true);
  });

});

describe ('answers', () => {
  const data = {
    answerer_name: "user1234",
    body: "I'm answering a question about this product here. Here is my answer. I'm totally just filling space so don't bother reading this stuff",
    date: "2021-11-05T00:00:00.000Z",
    helpfulness: 1,
    id: 5087444,
    photos: []
  };

  it ('should render one answer', () => {
    const answer = shallow(<Answer answer={data} />);
    expect (answer.contains(data.body)).toBe(true);
  });

  it ('should render username', () => {
    const answer = shallow(<Answer answer={data} />);
    expect (answer.contains(data.answerer_name)).toBe(true);
  });

  it ('should render helpfulness', () => {
    const answer = shallow(<Answer answer={data} />);
    expect (answer.contains(data.helpfulness)).toBe(true);
  });
});

describe ('Question Modal', () => {
  const data = {id: 40344, name: 'camo one'};

  it('should render the modal',() => {
    shallow(<AddQuestionModal id={data.id} name={data.name} />);

  });

  // it('should render the prouct name',() => {
  //   const questionModal = shallow(<AddQuestionModal id={data.id} name={data.name} />);
  //   expect (questionModal.contains(data.name)).toBe(true);
  // });


});

describe ('Answer Modal', () => {
  const data = {questionId: 426417, question: 'how are you?', name: 'camo'};

  it('should render the modal', () => {
    shallow (<AddAnswerModal name={data.name} question={data.question} questionId={data.questionId}/>);

  });

  // it('should render the product name', () => {
  //   const answerModal = shallow (<AddAnswerModal name={data.name} question={data.question} questionId={data.questionId}/>);
  //   expect(answerModal.contains(data.name)).toBe(true);
  // });

  // it('should render the question', () => {
  //   const answerModal = shallow (<AddAnswerModal name={data.name} question={data.question} questionId={data.questionId}/>);
  //   expect(answerModal.contains(data.question)).toBe(true);
  // });

});

describe ('Search', () => {
  it('should render the search bar', () => {
    shallow(<Search/>);
  });
});