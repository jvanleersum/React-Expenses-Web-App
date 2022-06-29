import { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const yearSelectedhandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onYearSelected={yearSelectedhandler}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
