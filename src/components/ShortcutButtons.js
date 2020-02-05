import React from 'react';
//import ReactDOM from 'react-dom';

export default ({ label, handleOnClick }) => 

  (
    <div >
      <button className="shortcut" onClick={() => handleOnClick(label)} >{label}</button>

    </div>
  )


  
  ;
