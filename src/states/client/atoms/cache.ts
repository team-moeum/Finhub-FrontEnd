import { atom } from "recoil";

type CacheStateType = {
  [key: string]: any;
}

export const cacheState = atom<CacheStateType>({
  key: "cacheState",
  default: {}
})