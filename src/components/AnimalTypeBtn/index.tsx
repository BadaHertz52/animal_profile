import React, { useCallback, Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
import { AnimalType } from "../../type";
import { sessionKey } from "../../data/key";
import { useRecoilValue } from "recoil";
import { currentAnimalProfile } from "../../data/state";

type AnimalTypeBtnProps = {
  type: AnimalType;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
function AnimalTypeBtn({ type, setOpenModal }: AnimalTypeBtnProps) {
  const animalIcon = type === "dog" ? "🐶" : type === "cat" ? "🐱" : "🐼";
  const currentProfile = useRecoilValue(currentAnimalProfile);
  const disabled = currentProfile.type === type;
  const handleClick = () => {
    setOpenModal(true);
    sessionStorage.setItem(sessionKey.type, type);
  };
  return (
    <button
      className={styles.btn}
      disabled={disabled}
      title={type}
      onClick={handleClick}
    >
      {animalIcon}
    </button>
  );
}

export default React.memo(AnimalTypeBtn);
