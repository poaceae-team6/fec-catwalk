
import React from 'react';

const ButtonStyles = {
  height: '42px',
  width: 'auto',
  marginLeft: '10px',
  padding:'8px',
  fontSize: '16px',
  fontWeight: 'bold'
}

const InputBoxStyles = {
  width: '300px',
  // marginBottom: '10px',
  padding:'10px',
  border: 'solid grey 1px',
  fontSize: '16px'
}

function UploadPic() {
  return (
    <div>
      <input style={InputBoxStyles } type="text" placeholder="Upload Photos"/>
      <input style={ButtonStyles} type="submit" value="Upload" />
      <ul style={{fontSize:'14px', color: 'grey'}}>
        <li>PicUrl</li>
        <li></li>
      </ul>
    </div>
  );
}


export default UploadPic;