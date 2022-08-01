import Dropdown from "../layout/dropdown/Dropdown";
import styles from "./MealsSorting.module.scss";
import { useEffect } from "react";

let baseOrder;
function MealsSorting(props) {
  useEffect(() => {
    baseOrder = [...props.loadedMeals];
  }, []);

  function sortingHandler() {
    props.loadedMeals.sort(function (x, y) {
      return x.price - y.price;
    });
  }

  function sort(option) {
    if (option === 0) {
      props.lista(baseOrder);
    }
    if (option === 1) {
      sortingHandler();

      props.lista(props.loadedMeals);
    }

    if (option === 2) {
      sortingHandler();
      props.loadedMeals.reverse();
      props.lista(props.loadedMeals);
    }
  }

  return <Dropdown sort={sort} />;
}

export default MealsSorting;
