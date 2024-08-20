import { queryKeys } from "../../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getSolvedQuizResult = async (date?: string) => {
  const response: ApiResponse = await get(
    `/api/v1/main/quiz?date=${date}`,
    queryKeys.solvedQuizResult(date)
  );

  return { status: "SUCCESS", ...response.data?.quizInfo };
};
