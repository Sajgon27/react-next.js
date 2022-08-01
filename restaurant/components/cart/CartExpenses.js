import styles from "./CartExpenses.module.scss";
import OrderContext from "../../store/order-context";
import { useContext } from "react";
function CartExpenses() {
  const orderCtx = useContext(OrderContext);
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.name}>Discounts:</span>
        <span id={styles.discount}>Apply discount</span>
      </div>
      <div>
        <span className={styles.name}>Order value:</span>
        <span>{orderCtx.totalPrice}</span>
      </div>
      <div>
        <span className={styles.name}>Delivery:</span>
        <span>9.99$</span>
      </div>
      <div>
        <span className={styles.name}>Totality:</span>
        <span>99.76$</span>
      </div>
    </div>
  );
}

export default CartExpenses;
