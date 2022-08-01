import Background from "./background/Background";
import NavBar from "./navbar/NavBar";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Background />
      <div className={styles.logo}>
        <Image
          width="300px"
          height="300px"
          src={logo}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.desc}>
        <h3>We deliver food to your home</h3>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
