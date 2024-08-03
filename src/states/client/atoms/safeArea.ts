import { atom } from "recoil";

export const safeAreaState = atom<number>({
  key: "safeArea",
  default: 0,
});