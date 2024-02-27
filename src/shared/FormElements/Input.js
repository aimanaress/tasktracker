import React from "react";

import "./Input.css";

function Input(props) {
  return (
    <div className="container__input">
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Input;
