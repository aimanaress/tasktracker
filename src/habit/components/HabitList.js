import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useView } from "../../shared/context/ViewContext";

import Modal from "../../shared/UIElements/Modal";
import HabitItem from "./HabitItem";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";

import "./HabitList.css";
function HabitList(props) {
  const [newTask, setNewTask] = useState("");
  const [isShowAddTask, setIsShowAddTask] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const { view } = useView();

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
    setHabitList((prevList) => [
      ...prevList,
      {
        id: uuidv4(),
        name: newTask,
        status: false,
      },
    ]);

    setIsShowAddTask(false);
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

  function openAddTaskHandler() {
    setIsShowAddTask(true);
  }

  function closeAddTaskHandler() {
    setIsShowAddTask(false);
  }

  return (
    <React.Fragment>
      {/* Show add task button in "Today" only */}
      {view === "Today" && (
        <React.Fragment>
          <div className="container__addtask">
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
      )}
      {/* Show add task form */}
      <Modal
        show={isShowAddTask}
        onCancel={closeAddTaskHandler}
        header="Add Task"
        headerClass="addtask__modal-header"
        contentClass="addtask__modal-content"
        footerClass="addtask__modal-actions"
        footer={<Button name="Add task" onClick={addTaskHandler} />}
      >
        <div className="container__inputform">
          <Input type="text" onChange={(e) => setNewTask(e.target.value)} />
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default HabitList;
