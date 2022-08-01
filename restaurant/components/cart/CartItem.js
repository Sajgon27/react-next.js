import styles from "./CartItem.module.scss";

function CartItem(props) {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.url} />
      </div>

      <h3>{props.name}</h3>
      <span id={styles.price}>{props.price}</span>
      <span id={styles.amount}>{props.amount}</span>
    </div>
  );
}

export default CartItem;
