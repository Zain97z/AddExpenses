import "./ExpenseDate.css";
import Card from "../../UI/Card";
const ExpenseDate = (props) => {
  const year = new Date(props.date.date).getFullYear();
  const month = new Date(props.date.date).toLocaleString("en-US", {
    month: "long",
  });
  const day = new Date(props.date.date).toLocaleString("en-US", {
    day: "numeric",
  });
  return (
    <Card className="ExpenseItemDate">
      <div>{month}</div>
      <h1>{day}</h1>
      <div>{year}</div>
    </Card>
  );
};

export default ExpenseDate;
