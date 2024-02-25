import React from "react";

import "./TopNavigation.css";

function TopNavigation(props) {
  return (
    <div className="container__topnav">
      <div className="header">{props.name}</div>
    </div>
  );
}

export default TopNavigation;
