import React from "react";
import HabitItem from "./HabitItem";

import "./HabitList.css";

function HabitList() {
  const habitList = [
    {
      id: 1,
      name: "Habit 1",
      status: true,
    },
    {
      id: 2,
      name: "Habit 2",
      status: true,
    },
    {
      id: 3,
      name: "Habit 3",
      status: false,
    },
    {
      id: 4,
      name: "Habit 4",
      status: false,
    },
    {
      id: 5,
      name: "Habit 5",
      status: false,
    },
    {
      id: 6,
      name: "Habit 6",
      status: false,
    },
    {
      id: 7,
      name: "Habit 7",
      status: false,
    },
    {
      id: 8,
      name: "Habit 8",
      status: false,
    },
    {
      id: 9,
      name: "Habit 9",
      status: false,
    },
  ];

  return (
    <div className="container__habitlist">
      {habitList.map((habit) => {
        return <HabitItem name={habit.name} status={habit.status} />;
      })}
    </div>
  );
}

export default HabitList;
