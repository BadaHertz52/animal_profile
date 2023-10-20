import { atom } from "recoil";
import { AnimalProfile } from "../type";

export const initialProfile: AnimalProfile = {
  type: "panda",
  name: undefined,
  like: undefined,
  hate: undefined,
};
export const animalProfile = atom({
  key: "animal",
  default: initialProfile,
});
