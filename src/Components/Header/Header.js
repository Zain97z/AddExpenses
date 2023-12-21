import Card from "../UI/Card";
import classes from "./Header.module.css";

function Header() {
  return (
    <Card className={classes.Header}>
      <h1>Expenses</h1>
    </Card>
  );
}

export default Header;
