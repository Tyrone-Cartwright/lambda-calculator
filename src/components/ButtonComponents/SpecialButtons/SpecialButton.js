import React from "react";
import { props } from "bluebird";

const SpecialButton = (props) => {
  console.log("special", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.text}</button>
    </>
  );
};

export default SpecialButton
