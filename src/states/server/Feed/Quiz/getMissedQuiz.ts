import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";


export const getMissedQuiz = async (
  date: string,
  limit?: number,
  ssr?: boolean
) => {
  const path = limit ? `/api/v1/main/quiz/missed?date=${date}&limit=${limit}` : `/api/v1/main/quiz/missed?date=${date}`
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: path,
    tags: queryKeys.missedQuiz(date, limit),
    ssr
  });

  if (response.status === "FAIL") {
    return null;
  }

  return response.data.quizList;
};
