import React, {useState} from 'react';
import StarRatingInput from '../reviewmain/StarRatingInput.jsx';
import UploadPic from './UploadPic.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';

function AddReview({ setShowAddReview, productTitle, productId }) {
  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [photos, setPhotos] = useState([]);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});

  const PopWindowStyles = {
    height: 'auto',
    width: 'auto',
    border: 'solid grey 0.5px',
    padding: '30px',
    position: 'sticky'
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
      console.log('post review result: ', res.status);
    });
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

        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Review Summary"
          value={summary}
          name="summary"
          onChange={(e) => {setSummary(e.target.value)}} />
        <br></br>
        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Detail"
          value={body}
          name="body"
          onChange={(e) => setBody(e.target.value)} required/>
        <br></br>
        <div><UploadPic /></div><br></br>
        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Nick Name"
          value={nickName}
          name="nickName"
          onChange={(e) => setNickName(e.target.value)} required/>
        <input
          style={InputBoxStyles}
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)} required/>
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