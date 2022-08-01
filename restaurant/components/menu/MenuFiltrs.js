import styles from "./MenuFiltrs.module.scss";
import { useState } from "react";

function MenuFiltrs() {
  const options = [
    { name: "7.99-18.99", value: "zjeb", key: 1 },
    { name: "18.99-24.99", value: "huj", key: 2 },
    { name: "24.99-35.99", value: "faja", key: 3 },
  ];

  return (
    <div className={styles.filtrs}>
      <div className={styles.filtrsPrice}>
        <label>Price:</label>
        {options.map((option, i) => (
          <label key={option.key}>
            <input key={option.key} type="checkbox" name="price" />
            {option.name}
          </label>
        ))}
      </div>

      <div className={styles.filtrsPrice}>
        <label>Kitchen:</label>
        <label>
          <input type="radio" name="food" /> Italian
        </label>
        <label>
          <input type="radio" name="food" /> French
        </label>
        <label>
          <input type="radio" name="food" /> Polish
        </label>
      </div>
    </div>
  );
}
export default MenuFiltrs;
