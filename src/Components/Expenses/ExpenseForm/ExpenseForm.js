import { useState } from "react";
import "./ExpenseForm.css";

import Button from "../../UI/Button/Button";

const ExpenseForm = (props) => {
  const [enteredtitle, setTitle] = useState();
  const [enteredprice, setPrice] = useState();
  const [enteredtdate, setDate] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      id: Math.random() * enteredprice,
      date: new Date(enteredtdate),
      title: enteredtitle,
      price: enteredprice,
    };
    props.newExpensesValues(newData);
  };

  return (
    <>
      <form className="ExpenseForm" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            htmlFor="title"
            onChange={titleChangeHandler}
            value={enteredtitle}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            htmlFor="Price"
            min="0.1"
            step="0.1"
            onChange={priceChangeHandler}
            value={enteredprice}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            htmlFor="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredtdate}
          />
        </div>
        <Button type="submit">Add Expense</Button>
      </form>
    </>
  );
};

export default ExpenseForm;
