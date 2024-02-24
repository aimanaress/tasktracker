import React from "react";
import "./NavLinks.css";

function NavLinks(props) {
  return (
    <a
      className={`container__navlink ${props.show && "current"} `}
      onClick={props.onClick}
    >
      {props.icon}
      <p>{props.title}</p>
    </a>
  );
}

export default NavLinks;
