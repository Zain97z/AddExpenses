import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";
const Chart = (props) => {
  const arrayPrice = props.dataChart.map((dataprice) => dataprice.price);
  const maxPrice = Math.max(...arrayPrice);
  return (
    <div className="Chart">
      {props.dataChart.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          price={data.price}
          maxPrice={maxPrice}
        />
      ))}
    </div>
  );
};
export default Chart;
