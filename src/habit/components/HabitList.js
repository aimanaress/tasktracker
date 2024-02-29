import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useView } from "../../shared/context/ViewContext";

import Modal from "../../shared/UIElements/Modal";
import HabitItem from "./HabitItem";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import CalendarItem from "./CalendarItem";

import "./HabitList.css";

function HabitList(props) {
  const [newTask, setNewTask] = useState("");
  const [isShowAddTask, setIsShowAddTask] = useState(false);
  const [isShowEditTask, setIsShowEditTask] = useState(false);
  const [habitHistory, setHabitHistory] = useState([]);
  const { view } = useView();

  const dateToday = new Date().toISOString().slice(0, 10); // Format as "YYYY-MM-DD"

  const [editTaskId, setEditTaskId] = useState(null); // State to store the ID of the task being edited
  const [editedTaskName, setEditedTaskName] = useState(""); // State to store the edited task name

  let [habitList, setHabitList] = useState([
    {
      id: 1,
      name: "Habit 1",
      daysToRepeat: [1, 3, 5], // Monday, Wednesday, Friday
      history: [
        { date: "2024-02-25", completed: false }, // Assuming today is 2024-02-28
        { date: "2024-02-26", completed: false },
        { date: "2024-02-27", completed: false },
        { date: "2024-02-28", completed: true },
      ],
    },
    {
      id: 2,
      name: "Habit 2",
      daysToRepeat: [2, 4, 6], // Tuesday, Thursday, Saturday
      history: [
        { date: "2024-02-25", completed: false },
        { date: "2024-02-26", completed: false },
        { date: "2024-02-27", completed: false },
        { date: "2024-02-28", completed: false },
      ],
    },
    // {
    //   id: 3,
    //   name: "Habit 3",
    //   status: false,
    // },
    // {
    //   id: 4,
    //   name: "Habit 4",
    //   status: false,
    // },
    // {
    //   id: 5,
    //   name: "Habit 5",
    //   status: false,
    // },
    // {
    //   id: 6,
    //   name: "Habit 6",
    //   status: false,
    // },
    // {
    //   id: 7,
    //   name: "Habit 7",
    //   status: false,
    // },
    // {
    //   id: 8,
    //   name: "Habit 8",
    //   status: false,
    // },
    // {
    //   id: 9,
    //   name: "Habit 9",
    //   status: false,
    // },
  ]);

  useEffect(() => {
    if (isShowEditTask && editTaskId !== null) {
      const habitToEdit = habitList.find((habit) => habit.id === editTaskId);
      if (habitToEdit) {
        setEditedTaskName(habitToEdit.name);
      }
    }

    console.log(habitList);
  }, [isShowEditTask, editTaskId, habitList]);

  function addTaskHandler() {
    setHabitList((prevList) => [
      ...prevList,
      {
        id: uuidv4(),
        name: newTask,
        history: [
          {
            date: dateToday,
            completed: false,
          },
        ],
      },
    ]);
    setIsShowAddTask(false);
  }

  // function doneHandler(id) {
  //   setHabitList(
  //     habitList.map((habit) => {
  //       if (habit.id === id) {
  //         // return { ...habit, history: [!habit.history.completed] };
  //         return {
  //           ...habit,
  //           history: habit.history.map((hist) => {
  //             console.log("Hist date " + hist.date);
  //             if (hist.date === dateToday) {
  //               console.log("Hist date " + hist.date);
  //               console.log("Hist completed!" + !hist.completed);
  //               return { ...hist, completed: !hist.completed };
  //             }
  //             console.log("Hist " + hist);
  //             return hist;
  //           }),
  //         };
  //       }
  //       console.log("Habit " + habit);
  //       return habit;
  //     })
  //   );
  //   console.log("habitlist " + habitList);
  //   return habitList;
  // }

  function doneHandler(id) {
    const updatedHabitList = habitList.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          history: habit.history.map((hist) => {
            if (hist.date === dateToday) {
              return { ...hist, completed: !hist.completed };
            }
            return hist;
          }),
        };
      }
      return habit;
    });
    setHabitList(updatedHabitList);
    return updatedHabitList;
  }

  function statusHandler(id, date) {
    // Find the habit with the given ID
    const habit = habitList.find((h) => h.id === id);

    // If the habit exists
    if (habit) {
      // Convert date to ISO string format
      const isoDate = new Date(date).toISOString().split("T")[0];

      // Find the history entry for the given date
      const entry = habit.history.find((h) => h.date === isoDate);

      // If entry exists, return its completed status, otherwise return null
      return entry ? entry.completed : null;
    } else {
      // If habit with given ID is not found, return null
      return null;
    }
  }

  // habit.history.date === dateToday

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
                status={statusHandler(habit.id, dateToday)}
                doneHandler={() => doneHandler(habit.id)}
                editHandler={() => showEditTaskHandler(habit.id)}
              />
            ))}
          </div>
        </React.Fragment>
      )}
      {view === "Weekly" && (
        <React.Fragment>
          <CalendarItem />
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
