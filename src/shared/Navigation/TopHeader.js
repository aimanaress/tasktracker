import React from "react";
import TopNavigation from "./TopNavigation";

import "./TopHeader.css";
import Button from "../FormElements/Button";

function TopHeader() {
  return (
    <div className="container__topheader">
      <TopNavigation name="Today" />
      <div className="">
        <Button name="Add Task" />
      </div>
    </div>
  );
}

export default TopHeader;
