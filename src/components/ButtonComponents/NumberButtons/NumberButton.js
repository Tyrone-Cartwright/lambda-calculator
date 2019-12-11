import React from "react";
// import { props } from "bluebird";

const NumberButton = props => {
  console.log("NumberButton", props)
  return (
    <button onClick={() => props.addNumber(props.text)}> 
        {props.text}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;

