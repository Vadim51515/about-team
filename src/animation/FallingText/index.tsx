import styles from "./index.module.scss";
const FallingText = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span>Splinex</span>
        <span>работа </span>
        <span>вашей</span>
        <span>мечты</span>
      </h1>
    </section>
  );
};

export default FallingText;
