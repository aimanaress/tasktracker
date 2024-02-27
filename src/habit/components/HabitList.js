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
  const [isShowEditTask, setIsShowEditTask] = useState(false);
  const { view } = useView();

  const [editTaskId, setEditTaskId] = useState(null); // State to store the ID of the task being edited
  const [editedTaskName, setEditedTaskName] = useState(""); // State to store the edited task name

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

  useEffect(() => {
    if (isShowEditTask && editTaskId !== null) {
      const habitToEdit = habitList.find((habit) => habit.id === editTaskId);
      if (habitToEdit) {
        setEditedTaskName(habitToEdit.name);
      }
    }
  }, [isShowEditTask, editTaskId, habitList]);

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

  function doneHandler(id) {
    setHabitList(
      habitList.map((habit) => {
        if (habit.id === id) {
          return { ...habit, status: !habit.status };
        }
        return habit;
      })
    );
  }

  function showAddTaskHandler() {
    setIsShowAddTask(!isShowAddTask);
  }

  function closeAddTaskHandler() {
    setIsShowAddTask(false);
  }

  function showEditTaskHandler(id) {
    setEditTaskId(id);
    setIsShowEditTask(true);
  }

  function closeEditTaskHandler() {
    setIsShowEditTask(false);
  }

  function handleEditInputChange(event) {
    setEditedTaskName(event.target.value);
  }

  function saveEditedTask() {
    if (editedTaskName.trim() !== "") {
      setHabitList((prevList) =>
        prevList.map((habit) =>
          habit.id === editTaskId ? { ...habit, name: editedTaskName } : habit
        )
      );
      setIsShowEditTask(false);
      setEditedTaskName("");
    }
  }

  return (
    <React.Fragment>
      {view === "Today" && (
        <React.Fragment>
          <div className="container__addtask">
            <Button name="Add new task" onClick={showAddTaskHandler} />
          </div>
          <div className="container__habitlist">
            {habitList.map((habit) => (
              <HabitItem
                key={habit.id}
                name={habit.name}
                status={habit.status}
                doneHandler={() => doneHandler(habit.id)}
                editHandler={() => showEditTaskHandler(habit.id)}
              />
            ))}
          </div>
        </React.Fragment>
      )}
      <Modal
        show={isShowAddTask}
        onCancel={closeAddTaskHandler}
        header="Add Task"
        footer={<Button name="Add task" onClick={addTaskHandler} />}
      >
        <Input
          type="text"
          placeholder="Title"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Modal>
      <Modal
        show={isShowEditTask}
        onCancel={closeEditTaskHandler}
        header={`Edit Task`}
        footer={
          <React.Fragment>
            <Button name="Edit task" onClick={saveEditedTask} />
            <Button name="Cancel" onClick={closeEditTaskHandler} />
          </React.Fragment>
        }
      >
        <Input
          type="text"
          placeholder="Title"
          value={editedTaskName}
          onChange={handleEditInputChange}
        />
      </Modal>
    </React.Fragment>
  );
}

export default HabitList;
