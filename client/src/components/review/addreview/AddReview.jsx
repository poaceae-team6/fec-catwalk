import React, {useState, useContext} from 'react';
import StarRatingInput from '../reviewmain/StarRatingInput.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';
import { ReviewContext } from '../ReviewProvider.jsx'

function AddReview({ setShowAddReview, productTitle, productId }) {
  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [warnings, setWarnings] = useState([]);

  const reviewContext = useContext(ReviewContext);

  const PopWindowStyles = {
    height: 'auto',
    width: 'auto',
    border: 'solid grey 0.5px',
    padding: '30px',
    position: 'absolute',
    marginTop: 'Math.max(0,($(window).height() - modalDialog.height()) / 2))',
    zIndex: 10,
    WebkitTransform: 'translateZ(0)'
  }

  const ButtonStyles = {
    height: '35px',
    width: 'auto',
    padding:'8px',
    fontSize: '16px',
    fontWeight: 'bold',
    "&:hover": {
      color: "red"
   },
  }

  const InputBoxStyles = {
    width: '95%',
    marginBottom: '10px',
    padding:'10px',
    border: 'solid grey 1px',
    fontSize: '16px'
  }

  const handleCharChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setCharacteristics({...characteristics, [id]: value});
  }

  const submit = (event) => {
    const photos = [];
    if (photo1) {
      photos.push(photo1);
    }
    if (photo2) {
      photos.push(photo2);
    }
    if (photo3) {
      photos.push(photo3);
    }
    const data = {
      rating, summary, body, photos, name: nickName,
      email, recommend, product_id: productId, characteristics }
    console.log('submitting review:', JSON.stringify(data));

    const warningList = validate(data);
    console.log('get warnings: ', JSON.stringify(warningList));
    setWarnings(warningList);
    if (!warningList) {
      // axios({
      //   method: 'post',
      //   url: `/reviews`,
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   data: JSON.stringify(data)
      // }).then(res => {
      //   alert('Successfully submit the review!')
      //   console.log('post review result: ', res.status);
      // }).catch(err => {
      //   alert('Failed to submit the review.')
      //   console.log('failed to submit the review', err);
      // });
      // setShowAddReview(false)
    }
    event.preventDefault();
  }

  const validate = (data) => {
    const warnings = [];
    const mandatories = ['rating', 'recommend', 'name', 'email'];
    for (const key of mandatories) {
      if (!data[key]) {
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
    <div style={PopWindowStyles}>
      <AiOutlineCloseCircle className='review-buttons' style={{float: 'right'}} color="grey" size= {30} onClick={ () => setShowAddReview(false)}/>

      <div style={{fontSize: '16px',fontWeight: 'bold', marginTop: '10px', marginBottom: '10px'}}>
        {productTitle}</div>
      <br></br>

      <div>
        {warnings.length > 0 ?
          <div >
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

      <form onSubmit={submit}>
        <div style={{height: '30px'}}><StarRatingInput updateStarRating={setRating}/></div>
        <br></br>

        <div style={{whiteSpace: 'nowrap'}}>
          <div style={{display: 'inline-block', marginRight: '5px'}}>Do you recommend this product? *</div>
          <div style={{display: 'inline-block'}}>
            <input type="radio" value='true' name="YN" onChange={() => {setRecommend(true)}} checked/> Yes
            <input type="radio" value='false' name="YN"  onChange={() => {setRecommend(false)}}/> No
          </div>
        </div>
        <br></br>

        <div style={{whiteSpace: 'nowrap'}}>Characteristics: *
          <table><tbody>
            {reviewContext.reviewMeta.characteristics ?
              Object.keys(reviewContext.reviewMeta.characteristics).map((charName, i) => (
                <tr key={i}>
                  <td style={{display: 'inline-block', marginRight: '5px', fontWeight: 'bold' }}>
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
        <br></br>

        <div>
          Summary:
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Example: Best purchase ever!"
            value={summary}
            name="summary"
            onChange={(e) => {setSummary(e.target.value)}} />
          <small>up to 60 characters</small>
        </div>
        <br></br>

        <div>
          Review Body: *
          <textarea
            style={InputBoxStyles}
            placeholder="Why did you like the product or not?"
            value={body}
            name="body"
            onChange={(e) => setBody(e.target.value)} />
          <small>
            {body.length >= 50 ?
              'Minimum reached' :
              'Minimum required characters left: ' + (50 - body.length) }
          </small>
        </div>
        <br></br>

        {/* <div><UploadPic /></div><br></br> */}
        <div>
          Add Photos:
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Photo1"
            value={photo1}
            name="photo1"
            onChange={(e) => setPhoto1(e.target.value)}/>
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Photo2"
            value={photo2}
            name="photo2"
            onChange={(e) => setPhoto2(e.target.value)}/>
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Photo3"
            value={photo3}
            name="photo3"
            onChange={(e) => setPhoto3(e.target.value)}/>
        </div>
        <br></br>

        <div>
          Nickname: *
        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Nick Name"
          value={nickName}
          name="nickName"
          onChange={(e) => setNickName(e.target.value)}/>
        </div>
        <small>For privacy reasons, do not use your full name or email address.</small>
        <br></br>

        <div>
          Email: *
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}/>
          <small>For authentication reasons, you will not be emailed.</small>
        </div>
        <br></br>

        <input
          style={ButtonStyles}
          type="submit"
          value="Submit Review" />
      </form>

    </div>
  );
}

export default AddReview;
