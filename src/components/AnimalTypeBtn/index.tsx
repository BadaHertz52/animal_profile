import React, { useCallback, Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
import { AnimalType } from "../../type";
import { sessionKey } from "../../data/key";

type AnimalTypeBtnProps = {
  type: AnimalType;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
function AnimalTypeBtn({ type, setOpenModal }: AnimalTypeBtnProps) {
  const animalIcon = type === "dog" ? "🐶" : type === "cat" ? "🐱" : "🐼";

  const handleClick = () => {
    console.log("click");
    setOpenModal(true);
    sessionStorage.setItem(sessionKey.type, type);
  };
  return (
    <button className={styles.btn} title={type} onClick={handleClick}>
      {animalIcon}
    </button>
  );
}

export default React.memo(AnimalTypeBtn);
