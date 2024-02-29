import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarItem.css";

function CalendarItem(props) {
  //   const preHighlightedDates = [
  //     new Date("2024-02-21"),
  //     new Date("2024-02-23"),
  //     new Date("2024-02-27"),
  //   ];

  const preHighlightedDates = props.getCompletedDatesById(props.id);

  //   function getCompletedDatesById(habitId) {
  //     const habit = habitList.find((habit) => habit.id === habitId);
  //     if (!habit) return [];

  //     const completedDates = habit.history
  //       .filter((entry) => entry.completed)
  //       .map((entry) => new Date(entry.date));

  //     return completedDates;
  //   }

  const [date, setDate] = useState(new Date());

  // Function to check if a date should be highlighted
  const tileClassName = ({ date, view, id }) => {
    // console.log("TileClassName called with date:", date);
    // Check if the date is in the pre-highlighted dates array
    const isHighlighted = preHighlightedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );
    // console.log("Is highlighted?", isHighlighted);
    return isHighlighted ? "highlighted" : "";
  };

  return (
    <div className="container__calendaritem">
      <h2>{props.name}</h2>
      <Calendar onChange={setDate} value={date} tileClassName={tileClassName} />
      {/* <Calendar onChange={setDate} value={date} tileClassName={tileClassName} /> */}
    </div>
  );
}

export default CalendarItem;
