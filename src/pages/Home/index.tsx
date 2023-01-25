import FallingText from "animation/FallingText";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <FallingText containerClassName={styles.firstAnimatedText} textLine="самая потрясающая команда"/>
      <FallingText  containerClassName={styles.secondAnimatedText} textLine="способная сделать все!"/>
    </div>
  );
};

export default Home;
