import { atom } from "recoil";
import { AnimalProfile } from "../type";

export const initialProfile: AnimalProfile = {
  type: undefined,
  name: undefined,
  like: undefined,
  hate: undefined,
};
export const animal = atom({
  key: "animal",
  default: initialProfile,
});
