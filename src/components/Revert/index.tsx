import React, { useMemo } from "react";
import Btn from "../Btn";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentAnimalProfile, previousAnimalProfile } from "../../data/state";

function Revert() {
  const previousProfile = useRecoilValue(previousAnimalProfile);
  const setAnimalProfile = useSetRecoilState(currentAnimalProfile);
  const isInitialProfile = useMemo(() => {
    const { name, like, hate } = previousProfile;
    return !(name || like || hate);
  }, [previousProfile]);
  const revertPrevious = () => {
    setAnimalProfile(previousProfile);
  };
  return (
    <Btn
      title="이전 프로필로 되돌리기"
      disable={isInitialProfile}
      onClick={revertPrevious}
    >
      🔃
    </Btn>
  );
}

export default React.memo(Revert);
