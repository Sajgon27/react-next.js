import styles from "./Modal.module.scss";
import { Fragment, useContext } from "react";

import OrderContext from "../../../store/order-context";
import DetailOrder from "../../detailOrder/DetailOrder";

function Modal(props) {
  const orderCtx = useContext(OrderContext);
  function onHideModal() {
    orderCtx.hideModal();
  }

  return (
    <Fragment>
      <div onClick={onHideModal} className={styles.backdrop}></div>
      <div className={styles.modal}>
        <DetailOrder />
      </div>
    </Fragment>
  );
}
export default Modal;
