import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`btn ${props.primary ? "btn__primary" : "btn__secondary"}`}
    >
      {props.name}
    </button>
  );
}

export default Button;
