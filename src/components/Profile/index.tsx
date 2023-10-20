import React, { useState } from "react";
import styles from "./style.module.scss";
import Btn from "../Btn";
import ProfileItem, { ProfileItemProps } from "../ProfileItem";
import { useRecoilState } from "recoil";
import { animalProfile } from "../../data/state";
function Profile() {
  const [profile, setProfile] = useRecoilState(animalProfile);
  const [edit, setEdit] = useState<boolean>(false);
  const type =
    profile.type === "cat"
      ? "고양이"
      : profile.type === "dog"
      ? "강아지"
      : "판다";
  const profileItemArray: Omit<ProfileItemProps, "disable">[] = [
    { id: "name", label: "이름", content: profile.name },
    { id: "like", label: "좋아하는 것", content: profile.like },
    { id: "hate", label: "싫어하는 것", content: profile.hate },
  ];
  const saveEdit = () => {};

  const revertPrevious = () => {};
  return (
    <div className={styles.profile}>
      <h2> 안녕 나는 {type}야</h2>
      <div className={styles.btnGroup}>
        {edit ? (
          <>
            <Btn onClick={saveEdit}>저장</Btn>
            <Btn onClick={() => setEdit(false)}>취소</Btn>
          </>
        ) : (
          <>
            <Btn onClick={() => setEdit(true)}>편집</Btn>
            <Btn title="이전 프로필로 되돌리기" onClick={revertPrevious}>
              🔃
            </Btn>
          </>
        )}
      </div>
      <div className={styles.profileContents}>
        {profileItemArray.map((i) => (
          <ProfileItem
            id={i.id}
            label={i.label}
            content={i.content}
            disable={!edit}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
