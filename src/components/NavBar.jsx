import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const links = [
    { title: "Home", position: "left" },
    { title: "About", position: "left" },
    { title: "Contact", position: "left" },
    { title: "Login", position: "right" },
    { title: "Register", position: "right" },
  ];
  const handleClick = (message) => {
    console.log(message);
  };
  return (
    <nav className="nav-bar">
      <div className="nav-bar-left">
        {links
          .filter((link) => link.position === "left")
          .map((link, i) => (
            <div
              className="nav-bar-item"
              onClick={() => {
                handleClick(link.title);
              }}
              key={i}
            >
              {link.title}
            </div>
          ))}
      </div>
      <div className="nav-bar-right">
        {links
          .filter((link) => link.position === "right")
          .map((link, i) => (
            <div
              className="nav-bar-item"
              onClick={() => {
                handleClick(link.title);
              }}
              key={i}
            >
              {link.title}
            </div>
          ))}
      </div>
    </nav>
  );
};
export default NavBar;
