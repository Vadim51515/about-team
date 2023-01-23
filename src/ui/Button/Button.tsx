import classNames from "classnames";
import styles from "./Button.module.scss";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<PropsType> = ({ className, ...props }) => {
  return (
    <button className={classNames([styles.button, className])} {...props} />
  );
};
export default Button;
