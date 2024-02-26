import React from "react";
import "./HabitItem.css";
import Button from "../../shared/FormElements/Button";

function HabitItem(props) {
  return (
    <div
      className={`container__habititem ${
        props.status && "done overlay__habitdone"
      }`}
    >
      <div>
        <div>{props.name}</div>
      </div>
      <div>
        <Button
          name={`${props.status ? "Undone" : "Done"}`}
          primary
          onClick={props.doneHandler}
        />
        <Button name="Edit" secondary onClick={props.editHandler} />
      </div>
    </div>
  );
}

export default HabitItem;
