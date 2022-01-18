import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  // The toLocaleString() method returns a string with a language sensitive representation of this date.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  // getFullYear() method return year
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
