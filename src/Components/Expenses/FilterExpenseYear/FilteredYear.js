import "./FilteredYear.css";

const FilteredYear = (props) => {
  const changeYear = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <h3>Selected Year: {props.filteredYear}</h3>
      <select value={props.filteredYear} onChange={changeYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilteredYear;
