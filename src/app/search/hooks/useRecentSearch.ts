import { useRecoilValue, useSetRecoilState } from "recoil";
import { recentSearchState } from "@/states/client/atoms/recentSearch";

export const useAddRecentSearchState = () => {
  const setRecentSearchState = useSetRecoilState(recentSearchState);
  return (
    (keyword: string) => setRecentSearchState(prev =>
      [{ keyword }, ...prev].slice(0, 15)
    )
  )
}

export const useDeleteRecentSearchState = () => {
  const setRecentSearchState = useSetRecoilState(recentSearchState);
  return (
    (keyword: string) => setRecentSearchState(prev =>
      prev.filter(item => item.keyword !== keyword)
    )
  )
}