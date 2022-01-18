import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [isNewItemEdited, setIsNewItemEdited] = useState(false);
  // We are passing this function inside of onSaveExpenseData
  // we are executing this component inside of different component
  // that is ExpenseData Component

  function editingHandler() {
    setIsNewItemEdited(true);
  }

  function cancelEditingHandler() {
    setIsNewItemEdited(false);
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // This is forwarding the expenseData to app.jsx
    props.onAddExpense(expenseData);
    setIsNewItemEdited(false);
  }

  return (
    <div className="new-expense">
      {!isNewItemEdited && (
        <button onClick={editingHandler}>Add New Expense</button>
      )}
      {isNewItemEdited && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditingHandler={cancelEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
