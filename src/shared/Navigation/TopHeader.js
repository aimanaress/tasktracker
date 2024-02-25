import React from "react";
import TopNavigation from "./TopNavigation";

import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="container__topheader">
      <TopNavigation name="Today" />
    </div>
  );
}

export default TopHeader;
