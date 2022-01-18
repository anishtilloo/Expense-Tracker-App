import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // For title
  const [enteredTitle, setEnteredTitle] = useState("");
  function titleEventHandler(event) {
    // console.log("Title Changed");
    setEnteredTitle(event.target.value);
  }

  // For Amount
  const [enteredAmount, setEnteredAmount] = useState("");
  function amountEventHandler(event) {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  }

  // For Date
  const [enteredDate, setEnteredDate] = useState("");
  function dateEventHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    // this method prevents the default behaviour of the form
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    // we can execute because we are passing pointer to the onSaveExpenseData prop
    // and then inside ExpenseForm component we are calling it
    // This is forwarding the expenseData to NewExpense.jsx
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateEventHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
