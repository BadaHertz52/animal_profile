import React, { ReactNode } from "react";
import styles from "./style.module.scss";
type BtnProps = {
  children: ReactNode;
  onClick: () => void;
  title?: string;
  disable?: boolean;
};
function Btn(props: BtnProps) {
  return (
    <button
      className={styles.btn}
      title={props.title}
      disabled={props.disable}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default React.memo(Btn);
