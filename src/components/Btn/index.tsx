import React, { ReactNode } from "react";
import styles from "./style.module.scss";
type BtnProps = {
  children: ReactNode;
  onClick: () => void;
  title?: string;
};
function Btn(props: BtnProps) {
  return (
    <button className={styles.btn} title={props.title} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default React.memo(Btn);
