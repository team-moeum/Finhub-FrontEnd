import { mutationKeys } from "../../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postQuizSolve = async (param: any) => {
  const response: ApiResponse = await post(`/api/v1/main/quiz`, mutationKeys.quizSolve, param);

  return response.data.quizInfo;
};
