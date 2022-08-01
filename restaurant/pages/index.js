import styles from "../styles/Home.module.scss";
import Header from "../components/header/Header";
import { Fragment } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <About />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
