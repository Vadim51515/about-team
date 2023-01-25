import styles from "./index.module.scss";
import classNames from "classnames";
type PropsType = {
  containerClassName?: string;
  animationClassName?: string;
  textLine: string;
};
const FallingText = ({
  containerClassName,
  textLine,
  animationClassName,
}: PropsType) => {
  console.log();
  const items = textLine.split(" ");

  return (
    <section className={classNames(styles.container, containerClassName)}>
      <h1 className={classNames(styles.title, animationClassName)}>
        {items.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </h1>
    </section>
  );
};

export default FallingText;
