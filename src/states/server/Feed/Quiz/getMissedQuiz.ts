import { queryKeys } from "../../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getMissedQuiz = async (date: string, limit?: number) => {
  const path = limit
    ? `/api/v1/main/quiz/missed?date=${date}&limit=${limit}`
    : `/api/v1/main/quiz/missed?date=${date}`;
  const response: ApiResponse = await get(path, queryKeys.missedQuiz(date, limit));

  if (response.status === "FAIL") {
    return [];
  }

  return response.data.quizList;
};

export const getSsrMissedQuiz = async (date: string, limit?: number) => {
  const path = limit
    ? `/api/v1/main/quiz/missed?date=${date}&limit=${limit}`
    : `/api/v1/main/quiz/missed?date=${date}`;
  const response: ApiResponse = await getSsr(path, queryKeys.missedQuiz(date, limit));

  if (response.status === "FAIL") {
    return [];
  }

  return response.data.quizList;
};
