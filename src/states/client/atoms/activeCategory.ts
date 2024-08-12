import { atom } from "recoil";

import { Category } from "@/model/Category";

const initialActiveCatogory = {
  categoryId: -1,
  name: ""
};

export const activeCategory = atom<Category>({
  key: "activeCategory",
  default: initialActiveCatogory
});
