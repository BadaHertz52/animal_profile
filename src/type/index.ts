export type AnimalType = "dog" | "cat" | "panda" | undefined;
export type AnimalProfile = {
  type: AnimalType;
  name?: string;
  like?: string;
  hate?: string;
};
