export type AnimalType = "dog" | "cat" | "panda";
export type ProfileItemType = "type" | "name" | "like" | "hate";
export type AnimalProfile = {
  type: AnimalType;
  name?: string;
  like?: string;
  hate?: string;
};
