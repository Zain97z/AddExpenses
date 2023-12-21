import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Expense from "./Components/Expenses/Expense/Expenes";
import NewExpenses from "./Components/Expenses/NewExpenses/NewExpenses";
import { useState } from "react";

const ExpenseValues = [
  {
    id: 1,
    date: new Date("08-28-2020"),
    title: "Car Insurance",
    price: 299,
  },
  {
    id: 2,
    date: new Date("08-28-2021"),
    title: "A book",
    price: 30,
  },
  {
    id: 3,
    date: new Date("08-28-2022"),
    title: "Airpods",
    price: 110,
  },
];

function App() {
  const [newExpensesValues, setNewExpensesValues] = useState(ExpenseValues);
  const enteredDataHandler = (newData) => {
    setNewExpensesValues((thePreviousData) => {
      return [newData, ...thePreviousData];
    });
  };
  return (
    <Container>
      <Header />
      <NewExpenses onSave={enteredDataHandler} />
      <Expense ExpenseValues={newExpensesValues} />
    </Container>
  );
}

export default App;
