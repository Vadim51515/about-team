import styles from "./index.module.scss";

const FallingText = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <p>самая</p>
        <p>потрясающая</p>
        <p>команда</p>
      </div>
      <div className={styles.rightContainer}>
        <p>способная</p>
        <p>сделать</p>
        <p>всё!</p>
      </div>
    </section>
  );
};

export default FallingText;
