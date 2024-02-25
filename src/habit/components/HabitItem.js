import React from "react";
import "./HabitItem.css";
import Button from "../../shared/FormElements/Button";

function HabitItem() {
  return (
    <div className="container__habititem">
      <div>
        <div>HabitItem</div>
      </div>
      <div>
        <Button name="Done" primary />
        <Button name="Edit" secondary />
      </div>
    </div>
  );
}

export default HabitItem;
