import React from "react";

function Input(props) {
  return (
    <div className="container__input">
      <input type={props.type} onChange={props.onChange} />
    </div>
  );
}

export default Input;
