// import React, { useState } from 'react';
import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
//  const [title,setTitle] = useState(props.title);

//  const clickHandler = () => {
//    setTitle("Updated!");
//    console.log("Clicked!!!!");
//  }
  return (
   <li>
   <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Click me</button> */}
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;