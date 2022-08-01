import { useContext, Fragment } from "react";
import CartItem from "../../components/cart/CartItem";
import OrderContext from "../../store/order-context";
import NavBar from "../../components/header/navbar/NavBar";
import styles from "../../styles/cart.module.scss";
import CartExpenses from "../../components/cart/CartExpenses";
import OrderForm from "../../components/orderForm/OrderForm";

function Cart() {
  const cartCtx = useContext(OrderContext);
  const meals = cartCtx.cart;

  const mealsContent = meals.map((meal) => (
    <CartItem
      key={meal.name}
      name={meal.name}
      price={meal.price}
      amount={meal.amount}
      url={meal.url}
    />
  ));

  return (
    <Fragment>
      <NavBar />
      <h1 className={styles.title}>Your order</h1>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          {meals.length === 0 ? <p>Empty cart</p> : mealsContent}
        </div>
        {meals.length !== 0 ? <CartExpenses /> : ""}
      </div>
      {meals.length !== 0 ? <OrderForm /> : ""}
    </Fragment>
  );
}

export default Cart;
