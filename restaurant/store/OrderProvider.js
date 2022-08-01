import OrderContext from "./order-context";
import { useState } from "react";

let cartList = [];
const OrderProvider = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [cart, addToCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const orderContext = {
    showModal: showModalHandler,
    hideModal: hideModalHandler,
    isModal: isModal,
    addItem: addItemHandler,
    currentItem: currentItem,
    cart: cart,
    totalPrice: totalPrice,
  };

  function addItemHandler(item) {
    const day = item;
    setTotalPrice((prevState) => {
      const b = prevState + item.totalPrice;

      return b;
    });
    console.log(day);
    const duplicate = cartList.findIndex((i) => {
      return i.name === item.name;
    });

    if (duplicate !== -1) {
      cartList[duplicate].amount = item.amount + cartList[duplicate].amount;
      day.amount;
    } else {
      cartList.push(item);
    }

    addToCart(cartList);
  }

  function showModalHandler(data) {
    setIsModal(true);
    setCurrentItem(data);
  }

  function hideModalHandler() {
    setIsModal(false);
  }

  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
