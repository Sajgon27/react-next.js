import styles from "./MealItem.module.scss";
import Modal from "../layout/modal/Modal";
import { useContext } from "react";
import OrderContext from "../../store/order-context";

function MealItem(props) {
  const orderCtx = useContext(OrderContext);
  function onOrder() {
    orderCtx.showModal(props);
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={props.url}></img>
      </div>
      <h2>
        {props.name} <span id={styles.price}>{props.price}</span>
        <button onClick={onOrder}>Order</button>
      </h2>
    </div>
  );
}

export default MealItem;
