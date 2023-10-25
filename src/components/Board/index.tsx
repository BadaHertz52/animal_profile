import React, { useState, useEffect, useCallback } from "react";
import styles from "./style.module.scss";
import { selector, useRecoilValue } from "recoil";
import { currentAnimalProfile } from "../../data/state";
import { AnimalType } from "../../type";

function Board() {
  const [sentence, setSentence] = useState<string>();
  const getTypeSentence = (type: AnimalType) => {
    switch (type) {
      case "dog":
        return " 🌼🌿🐕(노즈워킹 중..)";
      case "cat":
        return "☀️🐈🍞(식빵 굽기 장인) ";
      case "panda":
        return "🐼🍃(토끼귀=기분이 좋다)";
      default:
        break;
    }
  };
  const sentenceSelector = selector({
    key: "sentence",
    get: ({ get }) => {
      const profile = get(currentAnimalProfile);
      let array = [];
      const nameSentence = "안녕! 나는 " + profile.name + "야.";
      const typeSentence = getTypeSentence(profile.type);
      const likeSentence = profile.like + " 좋아!!😍";
      const hateSentence = profile.hate + "... 그건 좀..";
      if (profile.name) array.push(nameSentence);
      if (profile.type) array.push(typeSentence);
      if (profile.like) array.push(likeSentence);
      if (profile.hate) array.push(hateSentence);
      return array.filter((i) => i);
    },
  });
  const sentenceArray = useRecoilValue(sentenceSelector);
  const showRandomSentence = useCallback(() => {
    const newSentence =
      sentenceArray[Math.floor(Math.random() * sentenceArray.length)];
    setSentence(newSentence);
  }, [sentenceArray]);

  useEffect(() => {
    let intervalSentence: undefined | NodeJS.Timer;
    if (sentenceArray.length > 1) {
      intervalSentence = setInterval(showRandomSentence, 2000);
    } else {
      setSentence(sentenceArray[0]);
    }

    return () => {
      intervalSentence && clearInterval(intervalSentence);
    };
  }, [showRandomSentence, sentenceArray]);

  return (
    <div className={styles.board}>
      <div className="bubble">{sentence}</div>
    </div>
  );
}

export default React.memo(Board);
