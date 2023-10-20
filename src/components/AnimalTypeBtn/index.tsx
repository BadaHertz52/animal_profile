import React from "react";
import styles from "./style.module.scss";
import { AnimalType } from "../../type";

type AnimalTypeBtnProps = {
  type: AnimalType;
};
function AnimalTypeBtn({ type }: AnimalTypeBtnProps) {
  const animalIcon = type === "dog" ? "🐶" : type === "cat" ? "🐱" : "🐼";

  return (
    <button className={styles.btn} title={type}>
      {animalIcon}
    </button>
  );
}

export default AnimalTypeBtn;
