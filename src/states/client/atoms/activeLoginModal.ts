import { atom } from "recoil";

export const activeLoginModal = atom<boolean>({
  key: "activeLoginModal",
  default: false
});
