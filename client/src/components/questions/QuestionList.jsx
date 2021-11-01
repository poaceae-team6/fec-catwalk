import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import Search from './Search.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    data: {
      "product_id": "40344",
      "results": [
          {
              "question_id": 426460,
              "question_body": "Can you actually be seen in the camo onesie?",
              "question_date": "2021-09-24T00:00:00.000Z",
              "asker_name": "Lt. Dan",
              "question_helpfulness": 9,
              "reported": false,
              "answers": {
                  "3990304": {
                      "id": 3990304,
                      "body": "It's like you're wearing harry potter's invisible cloak.....",
                      "date": "2021-09-24T00:00:00.000Z",
                      "answerer_name": "Forest",
                      "helpfulness": 12,
                      "photos": [
                          "https://firebasestorage.googleapis.com/v0/b/fec-iroh.appspot.com/o/55fc732add0895843d8b4708.jpeg?alt=media&token=174bf4a5-7f65-4ebc-93d0-33b15b6e0b80"
                      ]
                  },
                  "3990317": {
                      "id": 3990317,
                      "body": "No, I blend in completely!",
                      "date": "2021-09-24T00:00:00.000Z",
                      "answerer_name": "Zuko",
                      "helpfulness": 0,
                      "photos": [
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526457/parxzslwt2fwnjiqd8lu.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526458/q4wl9uawwzcrf5lprx44.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526457/cimta26dmsglwajw8ted.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526457/uosxfyrpwk9cop5mmpa5.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526457/ofr0af0azefvplwiune4.jpg"
                      ]
                  },
                  "3990318": {
                      "id": 3990318,
                      "body": "No, I blend in completely!",
                      "date": "2021-09-24T00:00:00.000Z",
                      "answerer_name": "Zuko",
                      "helpfulness": 0,
                      "photos": [
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526467/mxkoyikxdut7jt6dydxz.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526470/qipotsk0uqbymn3hmgrk.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526460/ra5dlbjd3uvizpmxvlgg.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526466/rzt8jlco8psy3ivu3bjy.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526466/jthtefzpdez8t5haleok.jpg"
                      ]
                  },
                  "3990319": {
                      "id": 3990319,
                      "body": "No, I blend in completely!",
                      "date": "2021-09-24T00:00:00.000Z",
                      "answerer_name": "Zuko",
                      "helpfulness": 0,
                      "photos": [
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526478/xy0f7ipvgv8ia9o4cjtx.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526468/sclgbgtimg9z1mpzmfmj.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526471/ts9srvud0fucwg0amvy8.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526476/kpqamjnj0omqwrzbrxdp.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526475/yci248n7ctdixn0ijbjc.jpg"
                      ]
                  },
                  "3990320": {
                      "id": 3990320,
                      "body": "No, I blend in completely!",
                      "date": "2021-09-24T00:00:00.000Z",
                      "answerer_name": "Zuko",
                      "helpfulness": 0,
                      "photos": [
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526482/osrrnxnlck6sk4wxxgbd.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526478/nlv3s16yhjao4ibuhqfp.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526492/i9cppqo1k4u9g9vnke5g.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526486/fzxxijm70udkf2sobbhx.jpg",
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526483/tamxvwtgbhs8v8exzkx6.jpg"
                      ]
                  },
                  "3990403": {
                      "id": 3990403,
                      "body": "HELLO FROM 9/26 CASPIAN ",
                      "date": "2021-09-27T00:00:00.000Z",
                      "answerer_name": "asdfasdf",
                      "helpfulness": 0,
                      "photos": []
                  },
                  "3990441": {
                      "id": 3990441,
                      "body": "You cannot see me if I am not moving",
                      "date": "2021-09-29T00:00:00.000Z",
                      "answerer_name": "Drax",
                      "helpfulness": 0,
                      "photos": []
                  },
                  "3990803": {
                      "id": 3990803,
                      "body": "SDC Test",
                      "date": "2021-10-09T00:00:00.000Z",
                      "answerer_name": "test",
                      "helpfulness": 0,
                      "photos": []
                  },
                  "3990804": {
                      "id": 3990804,
                      "body": "Testing",
                      "date": "2021-10-09T00:00:00.000Z",
                      "answerer_name": "Test",
                      "helpfulness": 0,
                      "photos": []
                  },
                  "3990806": {
                      "id": 3990806,
                      "body": "Testing",
                      "date": "2021-10-09T00:00:00.000Z",
                      "answerer_name": "Test",
                      "helpfulness": 0,
                      "photos": []
                  },
                  "4996573": {
                      "id": 4996573,
                      "body": "Yes you can actually be seen.",
                      "date": "2021-10-28T00:00:00.000Z",
                      "answerer_name": "Zuko",
                      "helpfulness": 0,
                      "photos": [
                          "https://res.cloudinary.com/drbwyfh4x/image/upload/v1635449624/igopfygexh5igymhgv0f.png"
                      ]
                  }
              }
          }
      ]
    },
    length: 4,
    };
  }

  sortData () {
    let results = this.state.data.results;
    let sorted = [];

    for (let i = 0; i < results.length; i++) {
      results[i].question_helpfulness
    }
  }

  getData () {
    // send request to server asking API data
  }

  render () {

    //only 4 questions will be visiable by default
    let data = this.state.data.results;
    // need to sort by helpfuness

    //slice the data array to set the defaut length
    data = data.slice(0, this.state.length);

    return (
      <div className='questions-container'>
        <p>Questions & Answers</p>
        <Search />
        <ul>
          {data.map((question, index) => <QuestionItem key={index} question={question}/>)}
        </ul>
        <button>MORE ANSWERED QUESTIONS</button>  |  <button>ADD A QUESTIONS +</button>
      </div>
    )
  }
}

export default QuestionList;