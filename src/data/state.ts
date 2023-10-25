import { atom } from "recoil";
import { AnimalProfile } from "../type";

export const initialProfile: AnimalProfile = {
  type: "panda",
  name: undefined,
  like: undefined,
  hate: undefined,
};
export const currentAnimalProfile = atom({
  key: "currentAnimalProfile",
  default: initialProfile,
});

export const previousAnimalProfile = atom({
  key: "previousAnimalProfile",
  default: initialProfile,
});
