import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // useState is a rect hook
  // we can not call useState hook ,
  // outside of the component function or inside of a nested function
  // we use array destructuring to store both elements in separate variables
  // title is the pointer at that managed value
  // so props title is stored in title
  // second element is the function which we can call to update the new variable
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   // we are passing the new value to be updated in the variable title
  //   // this state updating functions this special variable will not just receive a new value
  //   // but the component function in which you called this state updating function and
  //   // in which you initialize your state with useState will be executed again
  //   setTitle("Updated!!!");
  // }

  return (
    /* visually it doesn't change anything but semantically its better to wrap it in a list tag 
    because we are rendering a div tag in unordered list tag*/
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
