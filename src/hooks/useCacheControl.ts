import { quizResultCacheState } from "@/states/client/atoms/cache"
import { historyPathsState } from "@/states/client/atoms/history";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

export const useCacheControl = () => {
  const historyPaths = useRecoilValue(historyPathsState);
  
  /** Quiz Result tag 이동 후 뒤로가지 않은 경우 */
  const [quizResultCache, setQuizResultCache] = useRecoilState(quizResultCacheState);
  const queryClient = useQueryClient();
  const verifyQuizResultExitWithoutBack = (startPath?: string) => {
    if (!startPath) return;

    if (
      historyPaths.at(-3) === startPath &&
      historyPaths.at(-1) !== startPath
    ) {
      if (startPath === "/feed") {
        queryClient.invalidateQueries({ queryKey: ["quiz"]}); 
      }

      setQuizResultCache(null);
    }
  }

  useEffect(() => {
    verifyQuizResultExitWithoutBack(quizResultCache?.startPath);
  }, [historyPaths]);
}