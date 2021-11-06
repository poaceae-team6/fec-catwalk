import React from 'react';
import { render } from '@testing-library/react';
import QuestionList from '../QuestionList.jsx';

const data =  [
      {
          "question_id": 426417,
          "question_body": "How do you feel the product?",
          "question_date": "2021-09-23T00:00:00.000Z",
          "asker_name": "Maple",
          "question_helpfulness": 17,
          "reported": false,
          "answers": {
              "3990206": {
                  "id": 3990206,
                  "body": "pretty good",
                  "date": "2021-09-23T00:00:00.000Z",
                  "answerer_name": "Judy ",
                  "helpfulness": 6,
                  "photos": [
                      "https://www.linkpicture.com/q/pngaaa.com-4065275.png"
                  ]
              },
              "3990283": {
                  "id": 3990283,
                  "body": "Sounds great",
                  "date": "2021-09-24T00:00:00.000Z",
                  "answerer_name": "Lily",
                  "helpfulness": 0,
                  "photos": []
              },
              "3990394": {
                  "id": 3990394,
                  "body": "dsafdsaf",
                  "date": "2021-09-26T00:00:00.000Z",
                  "answerer_name": "fdsafsad",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087368": {
                  "id": 5087368,
                  "body": "sdf\nsdf\nsdf",
                  "date": "2021-11-03T00:00:00.000Z",
                  "answerer_name": "g",
                  "helpfulness": 0,
                  "photos": []
              },
              "5087370": {
                  "id": 5087370,
                  "body": "g",
                  "date": "2021-11-03T00:00:00.000Z",
                  "answerer_name": "g",
                  "helpfulness": 2,
                  "photos": [
                      "http://placecorgi.com/1280/720",
                      "http://placecorgi.com/1280/720",
                      "http://placecorgi.com/1280/720",
                      "http://placecorgi.com/1280/720",
                      "http://placecorgi.com/1280/720"
                  ]
              },
              "5087444": {
                  "id": 5087444,
                  "body": "I'm answering a question about this product here. Here is my answer. I'm totally just filling space so don't bother reading this stuff",
                  "date": "2021-11-05T00:00:00.000Z",
                  "answerer_name": "user1234",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      }
  ];

it('renders a list of questions', ()=> {

  const {container} = render(<QuestionList props={{id: 40344, name: 'lala'}}/>)

  expect(container).toBeDefined();

//   expect(list).toBeTruthy();

})