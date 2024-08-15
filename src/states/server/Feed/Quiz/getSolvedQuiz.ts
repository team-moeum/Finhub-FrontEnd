import { queryKeys } from "../../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getSolvedQuiz = async (isCorrect: string, date: string, limit: number) => {
  const response: ApiResponse = await get(
    `/api/v1/main/quiz/solved/${isCorrect}?date=${date}&limit=${limit}`,
    queryKeys.solvedQuiz(isCorrect, date, limit)
  );

  if (response.status === "FAIL") {
    return [];
  }

  return response.data.quizList;
};

export const getSsrSolvedQuiz = async (isCorrect: string, date: string, limit: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/quiz/solved/${isCorrect}?date=${date}&limit=${limit}`,
    queryKeys.solvedQuiz(isCorrect, date, limit)
  );

  if (response.status === "FAIL") {
    return [];
  }

  return response.data.quizList;
};
