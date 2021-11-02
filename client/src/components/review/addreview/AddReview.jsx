
import React from 'react';
import StarRating from '../reviewmain/StarRating.jsx';
import UploadPic from './UploadPic.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";

function AddReview() {

  const PopWindowStyles = {
    height: 'auto',
    width: 'auto',
    border: 'solid grey 0.5px',
    padding: '30px',
  }

  const ButtonStyles = {
    height: '35px',
    width: 'auto',
    // margin: '10px',
    padding:'8px',
    fontSize: '16px',
    fontWeight: 'bold'
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
      <AiOutlineCloseCircle style={{float: 'right'}} color="grey" size= {30}/>
      <div style={{fontSize: '16px',fontWeight: 'bold', marginTop: '10px', marginBottom: '10px'}}>
        Product Title</div>
      <div ><StarRating /></div>
      <div style={{whiteSpace: 'nowrap'}}>
          <div style={{display: 'inline-block', marginRight: '5px'}}>Do you recommend this product?</div>
          <div style={{display: 'inline-block'}}>
            <input type="radio" value="Y" name="YN" /> Yes
            <input type="radio" value="N" name="YN" /> No
          </div>
      </div>
      <br></br>
      <div >RatingBreackdown</div>
      <br></br>
      <form>
        <input style={InputBoxStyles} type="text" placeholder="Review Summary"/>
        <br></br>
        <input  style={InputBoxStyles} type="text" placeholder="Review Detail"/>
        <br></br>
        <div><UploadPic /></div><br></br>
        <input style={InputBoxStyles} type="text" placeholder="Nick Name"/>
        <input style={InputBoxStyles} type="text" placeholder="Email"/>
        <br></br>
        <input style={ButtonStyles} type="submit" value="Submit Review" />
      </form>

    </div>
  );
}

export default AddReview;