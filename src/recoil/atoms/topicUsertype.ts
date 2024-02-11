import { atom } from "recoil";

export const topicUserType = atom<string>({
  key: "topicUserType",
  default: "선생님"
})