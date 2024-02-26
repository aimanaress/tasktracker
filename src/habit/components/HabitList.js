import React, { useEffect, useState } from "react";
import HabitItem from "./HabitItem";

import "./HabitList.css";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";

function HabitList() {
  const [newTask, setNewTask] = useState("");
  const [isShowAddTask, setIsShowAddTask] = useState(false);

  let [habitList, setHabitList] = useState([
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
  ]);

  function addTaskHandler() {
    console.log("Task added");
    console.log(newTask);

    setHabitList((prevList) => [
      ...prevList,
      {
        id: habitList.length + 1,
        name: newTask,
        status: false,
      },
    ]);
  }

  function editHandler() {
    console.log("Edit Handler");
  }

  function doneHandler(id) {
    console.log("Done Handler");
    setHabitList(
      habitList.map((habit) => {
        if (habit.id === id) {
          return { ...habit, status: !habit.status };
        }
        return habit;
      })
    );
    console.log(habitList);
  }

  function showAddTaskHandler() {
    setIsShowAddTask(!isShowAddTask);
  }

  return (
    <React.Fragment>
      <div className="container__inputform">
        {isShowAddTask && (
          <React.Fragment>
            <Input type="text" onChange={(e) => setNewTask(e.target.value)} />
            <Button name="Add task" onClick={addTaskHandler} />
          </React.Fragment>
        )}

        <Button name="Add new task" onClick={showAddTaskHandler} />
      </div>
      <div className="container__habitlist">
        {habitList.map((habit) => {
          return (
            <HabitItem
              name={habit.name}
              status={habit.status}
              doneHandler={() => doneHandler(habit.id)}
              editHandler={editHandler}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default HabitList;
