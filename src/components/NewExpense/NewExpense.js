import { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [displayForm, updateDisplayForm] = useState(false);

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
    updateDisplayForm(false);
  }

  const displayFormHandler = () => {
    updateDisplayForm(true);
  }

  const cancelHandler = () => {
    updateDisplayForm(false);
  };

  return <div className='new-expense'>
    {!displayForm && <button onClick={displayFormHandler}>Add New Expense</button>}
    {displayForm && <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancel={cancelHandler}/>}
  </div>
}

export default NewExpense;