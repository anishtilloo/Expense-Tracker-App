import React from "react";
import "./Card.css";

function Card(props) {
  // if you don't give space after card in const in the string it will not be
  // able to accept the other classes from other file
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
