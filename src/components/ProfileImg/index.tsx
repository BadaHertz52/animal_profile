import React from "react";
import { useRecoilValue } from "recoil";
import { animalProfile } from "../../data/state";
import { catImg, dogImg, pandaImg } from "../../data/imgData";
import styles from "./style.module.scss";
function ProfileImg() {
  const profile = useRecoilValue(animalProfile);
  const src =
    profile.type === "cat"
      ? catImg
      : profile.type === "dog"
      ? dogImg
      : pandaImg;
  return (
    <img className={styles.img} src={src} alt={profile.type + "image"}></img>
  );
}

export default ProfileImg;
