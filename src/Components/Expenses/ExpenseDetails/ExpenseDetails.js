import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
  let expenseDetails = <p>There is No Item This Year</p>;

  if (props.filteredExpense.length > 0) {
    expenseDetails = props.filteredExpense.map((expense) => (
      <ExpenseItem key={expense.id} ExpenseValues={expense} />
    ));
  }
  return <ul className="expenseDetails">{expenseDetails}</ul>;
};

export default ExpenseDetails;
