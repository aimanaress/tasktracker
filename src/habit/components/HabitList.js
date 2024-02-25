import React from "react";
import HabitItem from "./HabitItem";

import "./HabitList.css";

function HabitList() {
  return (
    <div className="container__habitlist">
      <HabitItem />;
      <HabitItem />;
    </div>
  );
}

export default HabitList;
