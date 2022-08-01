import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import CartSnippet from "../../cart/CartSnippet";

function NavBar() {
  const [cartSnippet, setCartSnippet] = useState(false);

  const router = useRouter();

  function showCart() {
    if (router.pathname === "/menu") setCartSnippet(true);
  }
  function hideCart() {
    if (router.pathname === "/menu") setCartSnippet(false);
  }
  let button;
  let title;
  let link;
  let navClasses = `${styles.nav}`;
  let buttonClasses = `${styles.button}`;
  if (router.pathname === "/") {
    title = "";
    button = "MENU";
    link = "/menu";
  }

  if (router.pathname === "/menu") {
    title = "Gorlami Restaurant";
    button = "YOUR ORDER";
    link = "/cart";
    navClasses = `${styles.nav} ${styles.navMenu}`;
    buttonClasses = `${styles.buttonMenu}`;
  }
  if (router.pathname === "/cart") {
    title = "Gorlami Restaurant";
    button = "";
    link = "/menu";
    navClasses = `${styles.nav} ${styles.navMenu}`;
    buttonClasses = `${styles.buttonCart}`;
  }

  return (
    <nav>
      <ul className={navClasses}>
        <li className={styles.title}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </li>
        <Link href={link}>
          <li
            className={buttonClasses}
            onMouseEnter={showCart}
            onMouseLeave={hideCart}
          >
            <a>{button}</a>
            {cartSnippet && <CartSnippet />}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
