import styles from "./DetailOrder.module.scss";
import OrderContext from "../../store/order-context";
import { useContext, useRef } from "react";

function DetailOrder() {
  const amountInput = useRef();
  const itemCtx = useContext(OrderContext);
  const item = itemCtx.currentItem;

  function onHideModal() {
    itemCtx.hideModal();
  }

  function addItemToOrder() {
    const amount = parseInt(amountInput.current.value);

    const totalPrice = amount * item.price;
    itemCtx.addItem({
      amount,
      price: item.price,
      name: item.name,
      totalPrice,
      url: item.url,
    });
    itemCtx.hideModal();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <img src={item.url}></img>
        </div>
        <h2>
          {item.name} <span>{item.price}</span>
        </h2>
        <input ref={amountInput} defaultValue="1" type="number" />
      </div>
      <div className={styles.desc}>
        <span>{item.desc}</span>
      </div>

      <div className={styles.buttons}>
        <button onClick={onHideModal}>Close</button>
        <button onClick={addItemToOrder}>Order</button>
      </div>
    </div>
  );
}

export default DetailOrder;
