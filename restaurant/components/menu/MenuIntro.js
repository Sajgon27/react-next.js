import styles from "./MenuIntro.module.scss";

function MealIntro() {
  return (
    <div className={styles.container}>
      <div>
        <h3>
          Fell free to choose anything from our wide range of very tasty meals
        </h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </div>
  );
}

export default MealIntro;
