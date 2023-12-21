import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";
  if (props.maxPrice > 0) {
    barFill = Math.round((props.price / props.maxPrice) * 100) + "%";
  }
  return (
    <div className="ChartBar">
      <div className="ChartBar__inner">
        <div className="ChartBar__fill" style={{ height: barFill }}></div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};
export default ChartBar;
