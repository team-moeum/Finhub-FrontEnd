import { Category } from "@/model/Category";
import { atom } from "recoil";

const initialActiveCatogory = {
  categoryId: -1,
  name: ""
}

export const activeCategory = atom<Category>({
  key: "activeCategory",
  default: initialActiveCatogory
})