import { atom } from "recoil";

export const historyPathsState = atom<string[]>({
  key: "historyPathsState",
  default: [],
});