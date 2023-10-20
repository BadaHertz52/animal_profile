import React, { useState, useCallback } from "react";
import { ProfileItemType } from "../../type";
import styles from "./style.module.scss";
export type ProfileItemProps = {
  id: ProfileItemType;
  label: string;
  content: string | undefined;
  disable: boolean;
};
function ProfileItem(props: ProfileItemProps) {
  const [value, setValue] = useState<string | undefined>(
    props.content || "???"
  );
  const changeEscapeChars = useCallback((str: string) => {
    switch (str) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case `"`:
        return `&quot;`;
      case "'":
        return "&#39;";
      default:
        return str;
    }
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      //XSS 공격 방어
      const text = event.target.value.replaceAll(/[&<>"']/g, (t) =>
        changeEscapeChars(t)
      );
      // 6자 이하로
      setValue(text);
    },
    [changeEscapeChars]
  );
  return (
    <div className={styles.item}>
      <label htmlFor={props.id}>{props.label}</label>
      <span>:</span>
      <input
        id={props.id}
        value={value}
        placeholder={props.disable ? undefined : "6자 이하로 입력해주세요."}
        onChange={handleChange}
        disabled={props.disable}
      />
    </div>
  );
}

export default React.memo(ProfileItem);
