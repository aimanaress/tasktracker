import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useView } from "../context/ViewContext";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

function MainNavigation(props) {
  const [active, setActive] = useState("Today");

  const { view, toggleView } = useView();

  const activeHandler = (title) => {
    // Update active state with the title of the clicked navigation
    toggleView(title);
  };

  const navigations = [
    {
      id: 1,
      title: "Today",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      id: 2,
      title: "Weekly",
      icon: CalendarDaysIcon,
    },
    {
      id: 3,
      title: "Overall",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="container__mainnav">
      {navigations.map((nav) => {
        return (
          <NavLinks
            key={nav.id}
            title={nav.title}
            icon={<nav.icon />}
            // Check if the navigation is active
            show={nav.title === view}
            // Pass the title to activeHandler
            onClick={() => activeHandler(nav.title)}
          />
        );
      })}
    </div>
  );
}

export default MainNavigation;
