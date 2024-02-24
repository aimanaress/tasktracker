import React from "react";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <div className="container__mainnav">
      <NavLinks />
      <NavLinks />
      <NavLinks />
    </div>
  );
}

export default MainNavigation;
