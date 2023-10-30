import React from "react";
import { selector, useRecoilValue } from "recoil";
import { currentAnimalProfile } from "../../data/state";

import { AnimalProfile } from "../../type";

const getImgUrl = async (profile: AnimalProfile) => {
  const q =
    profile.type === "panda"
      ? profile.type
      : profile.type === "cat"
      ? "kitten"
      : "puppy";
  try {
    const params = new URLSearchParams({
      key: process.env.REACT_APP_PIXABAY as string,
      q: q,
      image_type: "photo",
      order: "popular",
      orientation: "horizontal",
      per_page: "10",
    }).toString();
    const apiUrl = new URL(`https://pixabay.com/api/?${params}`);
    const image = await (await fetch(apiUrl)).json();
    return image.hits[0].largeImageURL;
  } catch (error) {
    console.error(error);
  }
};
const imgUrlSelector = selector({
  key: "profileImg",
  get: async ({ get }) => {
    const url = await getImgUrl(get(currentAnimalProfile));
    return url;
  },
});

function ProfileImg() {
  const imgUrl = useRecoilValue(imgUrlSelector);

  return <img src={imgUrl} alt={"profile img"}></img>;
}

export default React.memo(ProfileImg);
