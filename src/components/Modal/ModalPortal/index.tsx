import React, { ReactNode } from "react";
import * as ReactDOM from "react-dom";
import "./style.scss";
type ModalPortalProps = {
  children: ReactNode;
};
function ModalPortal({ children }: ModalPortalProps) {
  const modalRootEl = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(children, modalRootEl);
}

export default React.memo(ModalPortal);
