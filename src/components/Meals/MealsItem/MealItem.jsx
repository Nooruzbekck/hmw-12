import CardButton from "./CardButton";
import classes from "./MealItem.module.css";
export function MealItem(props) {
  const price = +props.price.toFixed(2);


  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <CardButton price={price} />
        
      </div>
    </li>
  );
}
