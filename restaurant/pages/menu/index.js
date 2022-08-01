import { Fragment, useContext } from "react";
import NavBar from "../../components/header/navbar/NavBar";
import MenuFiltrs from "../../components/menu/MenuFiltrs";
import MealsList from "../../components/menu/MealsList";
import MealIntro from "../../components/menu/MenuIntro";
import styles from "../../styles/menu.module.scss";
import Modal from "../../components/layout/modal/Modal";
import OrderContext from "../../store/order-context";

function Menu(props) {
  const orderCtx = useContext(OrderContext);

  return (
    <Fragment>
      <NavBar />
      <MealIntro />
      <div className={styles.container}>
        <MenuFiltrs />
        <MealsList data={props.data} />
      </div>
      {orderCtx.isModal && <Modal />}
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://gorlami-a8740-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
  );
  console.log("a");
  const data = await res.json();
  const loadedMeals = [];
  for (const key in data) {
    loadedMeals.push({
      name: data[key].name,
      price: data[key].price,
      desc: data[key].desc,
      id: key,
      url: data[key].url,
    });
  }

  return {
    props: { data: loadedMeals },
  };
}

export default Menu;
