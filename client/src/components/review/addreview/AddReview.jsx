import React, {useState} from 'react';
import StarRatingInput from '../reviewmain/StarRatingInput.jsx';
import UploadPic from './UploadPic.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';

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

  const PopWindowStyles = {
    height: 'auto',
    width: 'auto',
    border: 'solid grey 0.5px',
    padding: '30px',
    position: 'absolute',
    marginTop: 'Math.max(0,($(window).height() - modalDialog.height()) / 2))'
  }

  const ButtonStyles = {
    height: '35px',
    width: 'auto',
    // margin: '10px',
    padding:'8px',
    fontSize: '16px',
    fontWeight: 'bold'
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
    event.preventDefault();
  }

  const InputBoxStyles = {
    width: '95%',
    marginBottom: '10px',
    padding:'10px',
    border: 'solid grey 1px',
    fontSize: '16px'
  }

  return (
    <div style={PopWindowStyles}>
      <AiOutlineCloseCircle style={{float: 'right'}} color="grey" size= {30} onClick={ () => setShowAddReview(false)}/>
      <div style={{fontSize: '16px',fontWeight: 'bold', marginTop: '10px', marginBottom: '10px'}}>
        {productTitle}</div>
      {/* <div >RatingBreackdown</div> */}
      <br></br>
      <form onSubmit={submit}>
        <div ><StarRatingInput updateStarRating={setRating}/></div>
        <div style={{whiteSpace: 'nowrap'}}>
            <div style={{display: 'inline-block', marginRight: '5px'}}>Do you recommend this product?</div>
            <div style={{display: 'inline-block'}}>
              <input type="radio" value='true' name="YN" onChange={() => {setRecommend(true)}}/> Yes
              <input type="radio" value='false' name="YN"  onChange={() => {setRecommend(false)}}/> No
            </div>
        </div>
        <br></br>
        <div>
          Summary:
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Review Summary"
            value={summary}
            name="summary"
            onChange={(e) => {setSummary(e.target.value)}} />
        </div>
        <br></br>
        <div>
          Detail:
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Detail"
            value={body}
            name="body"
            onChange={(e) => setBody(e.target.value)} required/>
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
          Nickname:
        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Nick Name"
          value={nickName}
          name="nickName"
          onChange={(e) => setNickName(e.target.value)} required/>
        </div>
        <div>
          Email:
          <input
            style={InputBoxStyles}
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)} required/>
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
