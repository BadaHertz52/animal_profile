import React, { Dispatch, SetStateAction, useCallback } from "react";
import styles from "./style.module.scss";
import Btn from "../../Btn";
import ModalPortal from "../ModalPortal";
import { useSetRecoilState } from "recoil";
import { currentAnimalProfile, initialProfile } from "../../../data/state";
import { sessionKey } from "../../../data/key";
import { AnimalType } from "../../../type";

type ConfirmModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
function ConfirmModal({ setOpenModal }: ConfirmModalProps) {
  const setAnimalProfileState = useSetRecoilState(currentAnimalProfile);
  const closeModal = () => {
    setOpenModal(false);
    sessionStorage.removeItem(sessionKey.type);
  };
  const changeAnimalType = useCallback(() => {
    const item = sessionStorage.getItem(sessionKey.type);
    if (item) {
      const type = item as AnimalType;
      setAnimalProfileState((prev) =>
        prev.type === type ? prev : { ...initialProfile, type: type }
      );
    }
  }, [setAnimalProfileState]);
  const handleClickYesBtn = () => {
    changeAnimalType();
    closeModal();
  };
  const handleClickNoBtn = () => {
    closeModal();
  };
  return (
    <ModalPortal>
      <div className={styles.modalOuter}>
        <div className={styles.modal}>
          <div className="content">
            <p>변경 시, 프로필이 초기화돼요.</p>
            <p>변경할까요?</p>
          </div>
          <div className="btn-group">
            <Btn onClick={handleClickYesBtn}>네</Btn>
            <Btn onClick={handleClickNoBtn}>아니요</Btn>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export default React.memo(ConfirmModal);
