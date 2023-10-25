import React, { useCallback } from "react";
import styles from "./style.module.scss";
import { AnimalType } from "../../type";
import { animalProfile, initialProfile } from "../../data/state";
import { useSetRecoilState } from "recoil";

type AnimalTypeBtnProps = {
  type: AnimalType;
};
function AnimalTypeBtn({ type }: AnimalTypeBtnProps) {
  const animalIcon = type === "dog" ? "🐶" : type === "cat" ? "🐱" : "🐼";
  const setAnimalProfileState = useSetRecoilState(animalProfile);
  const handleClick = useCallback(() => {
    setAnimalProfileState((prev) =>
      prev.type === type ? prev : { ...initialProfile, type: type }
    );
  }, [setAnimalProfileState, type]);
  return (
    <button className={styles.btn} title={type} onClick={handleClick}>
      {animalIcon}
    </button>
  );
}

export default React.memo(AnimalTypeBtn);
