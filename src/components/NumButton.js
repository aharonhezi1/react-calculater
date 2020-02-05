import React from 'react';
//import ReactDOM from 'react-dom';

export default ({ label, handleOnClick }) => {
  return (
    <div >
      <button className="numbers" onClick={() => handleOnClick(label)} >{label}</button>

    </div>
  )

}
  ;
