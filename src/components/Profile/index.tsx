import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import styles from "./style.module.scss";
import Btn from "../Btn";
import ProfileItem, { ProfileItemProps } from "../ProfileItem";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentAnimalProfile,
  initialProfile,
  previousAnimalProfile,
} from "../../data/state";
import { AnimalProfile } from "../../type";
import Revert from "../Revert";
function Profile() {
  const [currentProfile, setCurrentProfile] =
    useRecoilState(currentAnimalProfile);
  const setPrevProfile = useSetRecoilState(previousAnimalProfile);
  const [edit, setEdit] = useState<boolean>(false);
  const type =
    currentProfile.type === "cat"
      ? "고양이"
      : currentProfile.type === "dog"
      ? "강아지"
      : "판다";
  const profileItemArray: Omit<ProfileItemProps, "edit">[] = useMemo(
    () => [
      { id: "name", label: "이름", content: currentProfile.name },
      { id: "like", label: "좋아하는 것", content: currentProfile.like },
      { id: "hate", label: "싫어하는 것", content: currentProfile.hate },
    ],
    [currentProfile]
  );
  const profileContentRef = useRef<HTMLDivElement>(null);
  const updateCurrentProfile = useCallback(() => {
    const inputElArray = profileContentRef.current?.querySelectorAll("input");
    let newProfile: AnimalProfile = {
      ...currentProfile,
    };
    if (inputElArray) {
      inputElArray.forEach((e) => {
        switch (e.id) {
          case "name":
            newProfile.name = e.value || undefined;
            break;
          case "like":
            newProfile.like = e.value || undefined;
            break;
          case "hate":
            newProfile.hate = e.value || undefined;
            break;
          default:
            break;
        }
      });
    }
    setPrevProfile(currentProfile);
    setCurrentProfile(newProfile);
  }, [currentProfile, setCurrentProfile, setPrevProfile]);

  const saveEdit = useCallback(() => {
    updateCurrentProfile();
    setEdit(false);
  }, [updateCurrentProfile, setEdit]);

  useEffect(() => {
    setEdit(false);
    setPrevProfile(initialProfile);
  }, [currentProfile.type, setPrevProfile]);
  return (
    <div className={styles.profile}>
      <h2 className="bubble"> 안녕 나는 {type}야</h2>
      <div className={styles.btnGroup}>
        {edit ? (
          <>
            <Btn onClick={saveEdit}>저장</Btn>
            <Btn onClick={() => setEdit(false)}>취소</Btn>
          </>
        ) : (
          <>
            <Btn onClick={() => setEdit(true)}>편집</Btn>
            <Revert />
          </>
        )}
      </div>
      <div className={styles.profileContents} ref={profileContentRef}>
        {profileItemArray.map((i) => (
          <ProfileItem
            key={i.id}
            id={i.id}
            label={i.label}
            content={i.content}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Profile);
