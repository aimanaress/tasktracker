import React, { useState } from "react";
import NavLinks from "./NavLinks";
import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "./MainNavigation.css";

function MainNavigation() {
  const [active, setActive] = useState("Today");

  const activeHandler = (title) => {
    // Update active state with the title of the clicked navigation
    setActive(title);
  };

  const navigations = [
    {
      title: "Today",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: "Weekly",
      icon: CalendarDaysIcon,
    },
    {
      title: "Overall",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="container__mainnav">
      {navigations.map((nav) => {
        return (
          <NavLinks
            title={nav.title}
            icon={<nav.icon />}
            // Check if the navigation is active
            show={nav.title === active}
            // Pass the title to activeHandler
            onClick={() => activeHandler(nav.title)}
          />
        );
      })}
    </div>
  );
}

export default MainNavigation;
