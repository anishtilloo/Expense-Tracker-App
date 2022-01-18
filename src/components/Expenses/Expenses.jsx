import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  function dropdownFilterChangeHandler(selectedYear) {
    console.log("Expenses.jsx");
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveDropdownData={dropdownFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* to output conditional content */}

      {/* OR */}
      {/* if the part before and(&&) returns true then the part after the ans(&&) is rendered */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            // this helps react to identify the array items
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </Card>
  );
}

export default Expenses;
