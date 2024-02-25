import React from "react";
import { useView } from "../context/ViewContext";
import TopNavigation from "./TopNavigation";

import "./TopHeader.css";

function TopHeader(props) {
  const { view } = useView();
  return (
    <div className="container__topheader">
      <TopNavigation name={view} />
    </div>
  );
}

export default TopHeader;
