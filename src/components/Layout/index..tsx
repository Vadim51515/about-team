import { ReactNode } from "react";
import styles from "./index.module.scss";

type PropsType = {
  children?: ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container__content}>{children}</div>
    </div>
  );
};

export default Layout;
