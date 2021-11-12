import React, { useState, useContext } from 'react';
import StarRatingInput from '../reviewmain/StarRatingInput.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';
import { ReviewContext } from '../ReviewProvider.jsx';
import Track from '../../TrackerHOC/Track.js';

function AddReview({ setShowAddReview, productTitle, productId, darkMode }) {
  const [rating, setRating] = useState(null);
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [warnings, setWarnings] = useState([]);
  const [images, setImages] = useState([]);

  const reviewContext = useContext(ReviewContext);

  const ButtonStyles = {
    height: '50px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '200px',
    padding:'10px',
    background: 'none',
  }

  const ButtonStylesDark = {
    height: '50px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '200px',
    padding:'10px',
    background: '#2a2c29',
    color: '#f3f3f3',
    border: '1px solid #808080'
  }

  const InputBoxStyles = {
    width: '95%',
    padding: '10px',
    border: 'solid grey 1px',
    fontSize: '16px',
    display: 'block',
    fontFamily: 'sans-serif'
  }

  const handleCharChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setCharacteristics({ ...characteristics, [id]: Number(value) });
  }

  //handle upload image
  const onImageChange = (e) => {
    let images = e.target.files;
    let length = images.length;
    let results = [];

    if (length > 5) {
      length = 5;
    }

    for (let i = 0; i < length; i++) {
      let img = URL.createObjectURL(images[i]);
      results.push(img);
    }

    setImages(results);
  }

  const submit = (event) => {

    const data = {
      rating, summary, body, photos: images, name: nickName,
      email, recommend, product_id: productId, characteristics
    }
    console.log('submitting review:', JSON.stringify(data));

    const warningList = validate(data);
    console.log('get warnings: ', JSON.stringify(warningList));
    setWarnings(warningList);
    if (warningList.length === 0) {
      console.log('submitting');
      axios({
        method: 'post',
        url: `/reviews`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }).then(res => {
        alert('Successfully submit the review!')
        console.log('post review result: ', res.status);
      }).catch(err => {
        alert('Failed to submit the review.')
        console.log('failed to submit the review', err);
      });
      setShowAddReview(false)
    }
    event.preventDefault();
  }

  const validate = (data) => {
    const warnings = [];
    const mandatories = ['rating', 'recommend', 'name', 'email'];
    for (const key of mandatories) {
      if (data[key] === null || data[key] === '' || data[key].length === 0) {
        warnings.push(`Missing ${key} in the review.`)
      }
    }
    if (Object.keys(data.characteristics).length !=
      Object.keys(reviewContext.reviewMeta.characteristics).length) {
      warnings.push('Missing fields under characteristics.');
    }
    if (data.summary.length > 60) {
      warnings.push('Should have less than 60 characters in summary.');
    }
    if (data.body.length > 1000) {
      warnings.push('Should have less than 1000 characters in the review body.');
    }
    if (data.body.length < 50) {
      warnings.push('Should have more than 50 characters in the review body.');
    }
    if (data.name.length > 60) {
      warnings.push('Should have less than 60 characters in nickname.');
    }
    if (data.email && (data.email.indexOf('@') === -1 || data.email.length <= 5 || data.email.indexOf('.') === -1)) {
      warnings.push('Should enter valid email address.')
    }
    return warnings;
  }


  return (


        <div className='popup-box'>
          <div className={darkMode ? 'popup-inner-dark' : 'popup-inner-box'}>
            <AiOutlineCloseCircle className='review-buttons' style={{ float: 'right', marginRight: '20px'}} color="grey" size={30} onClick={() => setShowAddReview(false)} />

            {/* <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>
              {productTitle}</div>
            <br></br> */}

            <form onSubmit={submit}>
              <div style={{ height: '30px' }}><StarRatingInput updateStarRating={setRating} /></div>
              <br></br>

              <div style={{ whiteSpace: 'nowrap' }}>
                <div style={{ display: 'inline-block', marginRight: '5px' }}>Do you recommend this product? *</div>
                <br></br>

                <div style={{ display: 'inline-block' }}>
                  <input type="radio" value='true' name="YN" onChange={() => { setRecommend(true) }} checked /> Yes
                  <input type="radio" value='false' name="YN" onChange={() => { setRecommend(false) }} /> No
                </div>
              </div><br></br>


              <div style={{ whiteSpace: 'nowrap' }}>Characteristics: *
                <table><tbody>
                  {reviewContext.reviewMeta.characteristics ?
                    Object.keys(reviewContext.reviewMeta.characteristics).map((charName, i) => (
                      <tr key={i}>
                        <td style={{ display: 'inline-block', marginRight: '5px', fontWeight: 'bold' }}>
                          {charName}:
                        </td>
                        {[1, 2, 3, 4, 5].map((value, i) => (
                          <td key={i}>
                            <input
                              type="radio"
                              value={value}
                              name={reviewContext.reviewMeta.characteristics[charName].id}
                              onChange={handleCharChange} />
                            {reviewContext.reviewMeta.characteristicsRange[charName][i]}
                          </td>
                        ))}
                      </tr>)) : null}
                </tbody></table>
              </div>

              <div>
                <p>Summary:</p>
                <input
                  style={InputBoxStyles}
                  type="text"
                  placeholder="Example: Best purchase ever!"
                  value={summary}
                  name="summary"
                  onChange={(e) => { setSummary(e.target.value) }} />

                <small>Up to 60 characters</small>
              </div>

              <div>
                <p>Review Body: *</p>
                <textarea
                  style={InputBoxStyles}
                  placeholder="Why did you like the product or not?"
                  value={body}
                  name="body"
                  onChange={(e) => setBody(e.target.value)} />
                <small>
                  {body.length >= 50 ?
                    'Minimum reached' :
                    'Minimum required characters left: ' + (50 - body.length)}
                </small>
              </div>

              <div>
                <p>Add Photos:</p>
                <input onChange={onImageChange} type='file' name='upload image' multiple />
                {images && images.map((img, index) => <img style={{ height: '40px', margin: '5px' }} key={index} src={img} />)}
              </div>

              <p></p>

              <div>
                <p>Nickname: *</p>
                <input
                  style={InputBoxStyles}
                  type="text"
                  placeholder="Nick Name"
                  value={nickName}
                  name="nickName"
                  onChange={(e) => setNickName(e.target.value)} />
              </div>
              <small>For privacy reasons, do not use your full name or email address.</small>

              <div>
                <p>Email: *</p>
                <input
                  style={InputBoxStyles}
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)} />
                <small>For authentication reasons, you will not be emailed.</small>
              </div>
              <br></br>

              <div>
                {warnings.length > 0 ?
                  <div style={{ color: 'red' }}>
                    You must enter the following:
                    <ul>
                      {warnings.map((warn, i) => (
                        <li key={i}>{warn}</li>
                      ))}
                    </ul>
                    <br></br>
                  </div> : null
                }
              </div>
              <Track eventName={`A Review is submitted`} module='Reviews'>
                <input
                  style={darkMode ? ButtonStylesDark : ButtonStyles}
                  type="submit"
                  value="Submit Review" />
              </Track>
            </form>
          </div>
        </div>

  );
}

export default AddReview;
