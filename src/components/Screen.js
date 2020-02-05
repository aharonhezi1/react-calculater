import React from 'react';
import ScaleText from "react-scale-text";
//import NumberFormat from 'react-number-format';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default (props) => {
  const number= numberWithCommas(props.number);
  return(
  <p className="screen">
    <ScaleText>
      <div className="screen__p">
        {number}
      </div>
    </ScaleText>
  </p>
)};


