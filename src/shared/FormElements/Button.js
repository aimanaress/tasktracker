import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <a className={`btn ${props.primary ? "btn__primary" : "btn__secondary"}`}>
      {props.name}
    </a>
  );
}

export default Button;
