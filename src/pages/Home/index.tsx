import FallingText from "animation/FallingText";
import Developers from "components/DeveloperCards";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <FallingText />
      <Developers />
    </div>
  );
};

export default Home;
