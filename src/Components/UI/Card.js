import classes from "./Card.module.css";

const Card = (props) => {
  const classer = `${classes.Card} ${props.className}`;
  return <div className={classer}>{props.children}</div>;
};
export default Card;
