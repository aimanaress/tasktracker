import React from "react";
import MainHeader from "./shared/Navigation/MainHeader";
import HabitList from "./habit/components/HabitList";

function App() {
  return (
    <React.Fragment>
      <HabitList />
      <MainHeader />
    </React.Fragment>
  );
}

export default App;
