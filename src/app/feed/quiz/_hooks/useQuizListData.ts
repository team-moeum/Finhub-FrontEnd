"use client";

import { MissedQuiz } from "@/model/missedQuiz";
import { SolvedQuiz } from "@/model/solvedQuiz";
import { useMissedQuizQuery, useSolvedQuizQuery } from "@/states/server/queries";
import { useEffect, useMemo, useState } from "react";

export const QUIZ_LIST_TYPE = {
  quizList: "quizList",
  quizDetail: "quizDetail"
} as const;

type UseQuisListDataProps = {
  type?: keyof typeof QUIZ_LIST_TYPE;
  requestDate: string;
  solvedType?: "Y" | "N";
}

export const useQuizListData = ({type, requestDate, solvedType}: UseQuisListDataProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: missedQuizData,
    fetchNextPage: fetchNextMissedPage,
    hasNextPage: hasMissedNextPage,
    isFetching: isMissedFetching,
  } = useMissedQuizQuery({ date: requestDate, limit: type === QUIZ_LIST_TYPE.quizDetail ? 10 : 3 });

  const {
    data: solvedQuizData,
    fetchNextPage: fetchNextSolvedPage,
    hasNextPage: hasSolvedNextPage,
    isFetching: isSolvedFetching,
  } = useSolvedQuizQuery({ isCorrect: solvedType || "Y", date: requestDate, limit: type === QUIZ_LIST_TYPE.quizDetail ? 10 : 3 });

  const missedQuizList = useMemo(() => {
    return missedQuizData?.pages.flatMap(page => page) as MissedQuiz[];
  }, [missedQuizData]);
  
  const solvedQuizList = useMemo(() => {
    return solvedQuizData?.pages.flatMap(page => page) as SolvedQuiz[];
  }, [solvedQuizData])

  useEffect(() => {
    setIsLoading(isMissedFetching || isSolvedFetching);
  }, [isMissedFetching, isSolvedFetching])

  return {
    isLoading,
    missedQuizList,
    solvedQuizList,
    fetchNextMissedPage,
    fetchNextSolvedPage,
    hasMissedNextPage,
    hasSolvedNextPage,
  }

}