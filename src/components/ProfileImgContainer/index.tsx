import React, { ReactNode } from "react";
import styles from "./style.module.scss";
type ProfileImgContainerProps = {
  children: ReactNode;
};
function ProfileImgContainer({ children }: ProfileImgContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default React.memo(ProfileImgContainer);
