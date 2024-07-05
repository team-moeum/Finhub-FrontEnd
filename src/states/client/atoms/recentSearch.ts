import { recoilPersist } from "recoil-persist";
import { AtomEffect, atom } from "recoil";
import { ssrCompletedState } from "./user";


const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

type recentSearchStateType = {
  keyword: string
}
export const recentSearchState = atom<recentSearchStateType[]>({
  key: `recentSearchState`,
  default: [],
  effects_UNSTABLE: [persistAtomEffect],
});