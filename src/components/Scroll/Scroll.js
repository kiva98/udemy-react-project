import React from "react";
import "./style.css";

const Scroll = (props) => {
  return (
    <div
      className="scrollable"
      style={{ overflowY: "scroll", height: "500px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
