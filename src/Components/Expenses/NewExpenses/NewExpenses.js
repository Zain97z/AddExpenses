import Card from "../../UI/Card";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const addedExpensesHandler = (theValues) => {
    const newExpensesData = theValues;

    props.onSave(newExpensesData);
  };

  return (
    <Card className="NewExpense">
      <ExpenseForm newExpensesValues={addedExpensesHandler} />
    </Card>
  );
};

export default NewExpenses;
