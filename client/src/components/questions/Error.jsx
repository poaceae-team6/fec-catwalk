import React from 'react';

const Error = (props) => {
  return (
    <div>
    <span>
      You must enter the following:
    </span>
    {props.msg.map((err, index) => <li key={index}> {err} </li>)}

  </div>
  )
};


export default Error;