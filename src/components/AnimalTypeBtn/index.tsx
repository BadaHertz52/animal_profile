import React from "react";
import styles from "./style.module.scss";
import { AnimalType } from "../../type";
import { animalProfile } from "../../data/state";
import { useSetRecoilState } from "recoil";

type AnimalTypeBtnProps = {
  type: AnimalType;
};
function AnimalTypeBtn({ type }: AnimalTypeBtnProps) {
  const animalIcon = type === "dog" ? "🐶" : type === "cat" ? "🐱" : "🐼";
  const setAnimalProfileState = useSetRecoilState(animalProfile);
  const handleClick = () => {
    setAnimalProfileState((prev) => ({ ...prev, type: type }));
  };
  return (
    <button className={styles.btn} title={type} onClick={handleClick}>
      {animalIcon}
    </button>
  );
}

export default AnimalTypeBtn;
