import React from "react";
import MainHeader from "./shared/Navigation/MainHeader";
import HabitList from "./habit/components/HabitList";
import TopHeader from "./shared/Navigation/TopHeader";

function App() {
  return (
    <React.Fragment>
      <TopHeader />
      <div className="empty"></div>
      <HabitList />
      <MainHeader />
    </React.Fragment>
  );
}

export default App;
