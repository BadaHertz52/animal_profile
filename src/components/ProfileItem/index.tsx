import React, { useState, useCallback, useEffect } from "react";
import { ProfileItemType } from "../../type";
import styles from "./style.module.scss";
export type ProfileItemProps = {
  id: ProfileItemType;
  label: string;
  content: string | undefined;
  edit: boolean;
};
function ProfileItem(props: ProfileItemProps) {
  const text = props.content || "???";
  const [value, setValue] = useState<string | undefined>();
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
      const text = event.target.value
        .replaceAll(/[&<>"']/g, (t) => changeEscapeChars(t))
        .slice(0, 10);
      setValue(text);
    },
    [changeEscapeChars]
  );
  useEffect(() => {
    setValue(undefined);
  }, [props.edit]);
  return (
    <div className={styles.item}>
      <label htmlFor={props.id}>{props.label}</label>
      <span>:</span>
      {props.edit ? (
        <input
          id={props.id}
          className={styles.content}
          value={value}
          placeholder="10자 이하 입력"
          onChange={handleChange}
        />
      ) : (
        <span id={props.id} className={styles.content}>
          {text}
        </span>
      )}
    </div>
  );
}

export default React.memo(ProfileItem);
