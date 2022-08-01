import styles from "./OrderMessage.module.scss";
import { Fragment } from "react";

function OrderMessage() {
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>
        <h2>Your meal will arrive at your place soon</h2>
        <p>Thank you for chosing our services</p>
        <p>You will be redirected soon</p>
      </div>
    </Fragment>
  );
}

export default OrderMessage;
