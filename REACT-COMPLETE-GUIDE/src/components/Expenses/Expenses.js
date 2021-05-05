import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020');

const FilterChangeHandler = (selectedYear) => {
 setFilteredYear(selectedYear);
}

const filteredExpenses = props.items.filter((expense) => {
  let yearNumber = expense.date.getFullYear();
  let yearNumberToString = yearNumber.toString();
  return yearNumberToString === filteredYear;
});



  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
     
    </Card>
  );
}

export default Expenses;
