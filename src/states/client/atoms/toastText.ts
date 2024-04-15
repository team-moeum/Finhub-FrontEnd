import { atom } from "recoil";

export const toastTextState = atom<string>({
  key: "toastTextState",
  default: ""
})