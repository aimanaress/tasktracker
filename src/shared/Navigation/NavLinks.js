import React from "react";
import "./NavLinks.css";

function NavLinks(props) {
  return (
    <a
      className={`container__navlink ${props.show && "current"} `}
      onClick={props.onClick}
    >
      <div className="icon__navlink">{props.icon}</div>
      {props.show && <p className="title__navlink">{props.title}</p>}
    </a>
  );
}

export default NavLinks;
