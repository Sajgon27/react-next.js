import styles from "./About.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import inside from "../../public/images/inside.jpg";

function About() {
  return (
    <Fragment>
      <div className={styles.about}>
        <h3>We are the restaurant for you</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button>
          <Link href="/menu">Menu</Link>
        </button>
      </div>
      <div className={styles.imgContainer}>
        <Image src={inside} alt="Picture of the author" />
      </div>
      <div className={styles.imgText}>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </Fragment>
  );
}

export default About;
