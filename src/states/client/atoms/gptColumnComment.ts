import { atom } from "recoil";

export const gptColumnCommentState = atom<string>({
  key: "gptColumnComment",
  default: ""
})