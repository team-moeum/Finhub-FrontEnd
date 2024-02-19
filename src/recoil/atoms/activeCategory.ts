import { atom } from "recoil";

export const activeCategory = atom<string>({
  key: "activeCategory",
  default: "주식"
})