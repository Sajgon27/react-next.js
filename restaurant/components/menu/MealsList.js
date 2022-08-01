import MealItem from "./MealItem";
import styles from "./MealsList.module.scss";
import MealsSorting from "./MealsSorting";
import { useState, useEffect } from "react";

function MealsList(props) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    lista(props.data);
  }, []);

  function lista(list) {
    const sortedMeals = [...list];

    setMeals(sortedMeals);
  }

  const m = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      url={meal.url}
      desc={meal.desc}
    />
  ));

  return (
    <div>
      <MealsSorting loadedMeals={props.data} lista={lista} />
      <div className={styles.list}>{m}</div>
    </div>
  );
}

export default MealsList;
