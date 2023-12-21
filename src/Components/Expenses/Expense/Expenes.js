import Card from "../../UI/Card";

import FilteredYear from "../FilterExpenseYear/FilteredYear";
import { useState } from "react";
import "./Expense.css";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (value) => {
    setSelectedYear(value);
  };
  const filteredExpenses = props.ExpenseValues.filter(
    (element) => element.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="Expense">
      <FilteredYear
        filteredYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseDetails filteredExpense={filteredExpenses} />
    </Card>
  );
};

export default Expense;
