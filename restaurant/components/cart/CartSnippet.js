import styles from "./CartSnippet.module.scss";
import { useContext } from "react";
import OrderContext from "../../store/order-context";

function CartSnippet() {
  const cartCtx = useContext(OrderContext);
  const cart = cartCtx.cart;
  return (
    <div className={styles.container}>
      {cart.map((i) => (
        <div key={i.name} className={styles.info}>
          <span> {i.name}</span> <span>x {i.amount}</span>
        </div>
      ))}
      <div>Price:{cartCtx.totalPrice}$</div>
      <button>See cart</button>
    </div>
  );
}
export default CartSnippet;
