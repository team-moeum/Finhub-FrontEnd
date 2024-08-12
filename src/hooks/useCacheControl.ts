import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { useCache } from "./useCache";

import { historyPathsState } from "@/states/client/atoms/history";

export const CACHE_KEY = {
  quizResult: "quizResult"
} as const;

export const useCacheControl = () => {
  const { get, clear } = useCache();
  const queryClient = useQueryClient();
  const historyPaths = useRecoilValue(historyPathsState);

  /** Quiz Result tag 이동 후 뒤로가지 않은 경우 */
  const verifyQuizResultExitWithoutBack = (startPath?: string) => {
    if (!startPath) return;

    if (historyPaths.at(-3) === startPath && historyPaths.at(-1) !== startPath) {
      if (startPath === "/feed") {
        queryClient.invalidateQueries({ queryKey: ["quiz"] });
      }

      clear(CACHE_KEY.quizResult);
    }
  };

  useEffect(() => {
    verifyQuizResultExitWithoutBack(get(CACHE_KEY.quizResult)?.startPath);
  }, [historyPaths]);
};
