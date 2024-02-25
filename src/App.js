import React, { useState } from "react";
import MainHeader from "./shared/Navigation/MainHeader";
import HabitList from "./habit/components/HabitList";
import TopHeader from "./shared/Navigation/TopHeader";

import "./App.css";

function App() {
  const [isCurrent, setIsCurrent] = useState("Today");

  return (
    <React.Fragment>
      <TopHeader name={isCurrent} />
      <div className="container__content">
        <HabitList />
      </div>
      <MainHeader current={isCurrent} />
    </React.Fragment>
  );
}

export default App;
