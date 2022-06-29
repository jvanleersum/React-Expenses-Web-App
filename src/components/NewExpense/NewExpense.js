import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
  }

  return <div className='new-expense'>
    <ExpenseForm onSaveNewExpense={saveNewExpenseHandler}/>
  </div>
}

export default NewExpense;