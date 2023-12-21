import Chart from "../../Charts/Chart/Chart";
import "./ExpenseChart.css";
const ExpenseChart = (props) => {
  const ChartDataPoint = [
    { label: "Jan", price: 0 },
    { label: "Feb", price: 0 },
    { label: "Mar", price: 0 },
    { label: "Apr", price: 0 },
    { label: "May", price: 0 },
    { label: "Jun", price: 0 },
    { label: "Jul", price: 0 },
    { label: "Aug", price: 0 },
    { label: "Sep", price: 0 },
    { label: "Oct", price: 0 },
    { label: "Nov", price: 0 },
    { label: "Dec", price: 0 },
  ];

  props.expenses.map((expense) => {
    const chartMonth = expense.date.getMonth();

    return (ChartDataPoint[chartMonth].price += expense.price);
  });
  return <Chart dataChart={ChartDataPoint} />;
};

export default ExpenseChart;
