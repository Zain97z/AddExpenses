import Card from "../../UI/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="ExpenseItem">
        <ExpenseDate date={props.ExpenseValues} />
        <div className="ExpenseItemDescription">
          <h1>{props.ExpenseValues.title}</h1>
          <div className="price">${props.ExpenseValues.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
